const http = require('http');
const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.ANTHROPIC_API_KEY;
const DB_PATH = path.join(__dirname, 'knowledge.db');
const USERDATA_PATH = path.join(__dirname, 'userdata.db');

// ═══════════════════════════════════════════════════════
//  User Data Database (writable — saved diagnostics)
// ═══════════════════════════════════════════════════════

let userDb = null;

function initUserData() {
  try {
    userDb = new Database(USERDATA_PATH);
    userDb.pragma('journal_mode = WAL');

    userDb.exec(`
      CREATE TABLE IF NOT EXISTS saved_diagnostics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        machine_name TEXT,
        machine_brand TEXT,
        machine_model TEXT,
        machine_serial TEXT,
        category TEXT,
        severity TEXT,
        diagnosis TEXT,
        steps TEXT,
        parts_used TEXT,
        notes TEXT,
        conversation TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const count = userDb.prepare('SELECT COUNT(*) as cnt FROM saved_diagnostics').get().cnt;
    console.log(`User data: ${count} saved diagnostics`);
  } catch (e) {
    console.error('User data init error:', e.message);
  }
}

initUserData();

// ─── MIME TYPES ───
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml'
};

// ═══════════════════════════════════════════════════════
//  SQLite FTS5 Search Engine
// ═══════════════════════════════════════════════════════

let db = null;
let dbStats = null;

function initDatabase() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      console.error('Database not found: ' + DB_PATH);
      return;
    }
    db = new Database(DB_PATH, { readonly: true });
    db.pragma('journal_mode = WAL');

    const docs = db.prepare('SELECT COUNT(*) as cnt FROM documents').get().cnt;
    const chunks = db.prepare('SELECT COUNT(*) as cnt FROM chunks').get().cnt;
    const words = db.prepare('SELECT SUM(word_count) as cnt FROM chunks').get().cnt;
    const brands = db.prepare('SELECT brand, COUNT(*) as cnt FROM documents GROUP BY brand ORDER BY cnt DESC').all();

    dbStats = { documents: docs, chunks, total_words: words, brands };
    console.log(`Database: ${docs} docs, ${chunks} chunks, ${(words || 0).toLocaleString()} words`);
  } catch (e) {
    console.error('Database init error:', e.message);
  }
}

initDatabase();

// ═══════════════════════════════════════════════════════
//  Layer 1 — Diagnostic Decision Trees
// ═══════════════════════════════════════════════════════

let diagnostics = null;

function initDiagnostics() {
  const diagPath = path.join(__dirname, 'diagnostics.json');
  if (!fs.existsSync(diagPath)) {
    console.log('diagnostics.json not found — diagnostic trees disabled');
    return;
  }
  try {
    diagnostics = JSON.parse(fs.readFileSync(diagPath, 'utf8'));
    const treeNames = Object.keys(diagnostics.trees);
    console.log(`Diagnostics: ${treeNames.length} trees loaded (${treeNames.join(', ')})`);
  } catch (e) {
    console.error('Diagnostics load error:', e.message);
  }
}

initDiagnostics();

// ─── Intent Classifier ───
// Maps natural language symptoms to diagnostic categories
function classifySymptoms(userText) {
  if (!diagnostics) return [];
  // Normalize: lowercase, remove apostrophes, collapse whitespace
  const lower = userText.toLowerCase().replace(/[''`]/g, '').replace(/\s+/g, ' ').trim();
  const matches = [];

  for (const [category, info] of Object.entries(diagnostics.intent_map)) {
    let score = 0;
    const matched = [];
    for (const kw of info.keywords) {
      const kwNorm = kw.toLowerCase().replace(/[''`]/g, '');
      if (lower.includes(kwNorm)) {
        score += kw.includes(' ') ? 3 : 1;  // multi-word matches score higher
        matched.push(kw);
      }
    }
    if (score > 0) {
      matches.push({ category, label: info.label, icon: info.icon, score, matched_keywords: matched });
    }
  }

  return matches.sort((a, b) => b.score - a.score);
}

// ─── Get Diagnostic Tree ───
// Returns a formatted walkthrough for a specific category and optional node
function getDiagnosticTree(category, nodeId) {
  if (!diagnostics || !diagnostics.trees[category]) {
    return `No diagnostic tree found for category: ${category}. Available: ${Object.keys(diagnostics?.trees || {}).join(', ')}`;
  }

  const tree = diagnostics.trees[category];
  const nodes = tree.nodes;

  // If specific node requested, return just that node
  if (nodeId && nodes[nodeId]) {
    return formatNode(nodeId, nodes[nodeId], tree);
  }

  // Return ONLY the entry node — the AI must request subsequent nodes one at a time
  let output = `Category: ${tree.name || category}\n`;
  if (tree.safety_warning) output += `⚠️ ${tree.safety_warning}\n`;
  output += `\nSTART HERE:\n`;
  output += formatNode(tree.entry, nodes[tree.entry], tree);
  output += `\n\nIMPORTANT: Ask the user this question and WAIT for their answer. Then call get_diagnostic_tree again with the appropriate next node_id based on their response.`;
  return output;
}

function formatNode(id, node, tree) {
  let out = `[${id}] `;

  if (node.question) {
    out += `QUESTION: ${node.question}\n`;
    if (node.yes && node.no) {
      out += `  → YES: go to ${node.yes}\n  → NO: go to ${node.no}`;
    }
    if (node.options) {
      for (const [label, target] of Object.entries(node.options)) {
        out += `  → ${label.replace(/_/g, ' ').toUpperCase()}: go to ${target}\n`;
      }
    }
    // Handle branching keywords (sudden/gradual, pulsating/low_steady, etc.)
    for (const key of ['sudden', 'gradual', 'pulsating', 'low_steady', 'black', 'white_blue']) {
      if (node[key]) out += `  → ${key.replace(/_/g, ' ').toUpperCase()}: go to ${node[key]}\n`;
    }
  }

  if (node.diagnosis) {
    out += `DIAGNOSIS: ${node.diagnosis}\n`;
    if (node.safety_flag) out += `⚠️ SAFETY FLAG — include safety warning in response\n`;
    if (node.checks) {
      out += `CHECKS:\n`;
      node.checks.forEach((c, i) => {
        if (typeof c === 'string') {
          out += `  ${i + 1}. ${c}\n`;
        } else if (c.action) {
          out += `  ${c.step || (i + 1)}. ${c.action}${c.detail ? ' — ' + c.detail : ''}\n`;
        }
      });
    }
    if (node.oem_note) out += `OEM NOTE: ${node.oem_note}\n`;
    if (node.cross_ref) out += `CROSS-REF: Also check ${node.cross_ref.join(', ')} diagnostic tree(s)\n`;
    if (node.parts_needed) {
      out += `PARTS NEEDED: ${node.parts_needed.join(', ')}\n`;
    }
    if (node.severity) {
      out += `SEVERITY: ${node.severity.toUpperCase()}\n`;
    }
    if (node.next) {
      out += `→ If not resolved, continue to ${node.next}\n`;
    }
    if (node.redirect) {
      out += `→ REDIRECT: Diagnose using the "${node.redirect}" tree first\n`;
    }
    if (node.pro_feature) {
      out += `PRO FEATURE: ${node.pro_feature} — advanced diagnostics available with Pro upgrade\n`;
    }
  }

  return out;
}

// ─── Get specific diagnostic node for step-by-step conversation ───
function getDiagnosticNode(category, nodeId) {
  if (!diagnostics || !diagnostics.trees[category]) return null;
  const tree = diagnostics.trees[category];
  const node = tree.nodes[nodeId];
  if (!node) return null;

  return {
    tree_title: tree.title,
    safety_warning: tree.safety_warning || null,
    node_id: nodeId,
    ...node
  };
}

// ─── FTS5 SEARCH ───
function searchFTS(query, opts = {}) {
  if (!db) return [];
  const limit = opts.limit || 15;
  const brand = opts.brand || null;

  const terms = query.replace(/[^\w\s\-\.]/g, '').trim().split(/\s+/).filter(t => t.length > 1);
  if (terms.length === 0) return [];

  const ftsQuery = terms.map(t => `"${t}"*`).join(' OR ');

  try {
    let sql, params;
    if (brand) {
      sql = `SELECT c.content, c.chunk_type, c.section, c.page_num,
                    d.filename, d.title, d.brand, d.doc_type, rank
             FROM chunks_fts fts
             JOIN chunks c ON c.id = fts.rowid
             JOIN documents d ON d.id = c.doc_id
             WHERE chunks_fts MATCH ? AND d.brand = ?
             ORDER BY rank LIMIT ?`;
      params = [ftsQuery, brand, limit];
    } else {
      sql = `SELECT c.content, c.chunk_type, c.section, c.page_num,
                    d.filename, d.title, d.brand, d.doc_type, rank
             FROM chunks_fts fts
             JOIN chunks c ON c.id = fts.rowid
             JOIN documents d ON d.id = c.doc_id
             WHERE chunks_fts MATCH ?
             ORDER BY rank LIMIT ?`;
      params = [ftsQuery, limit];
    }
    return db.prepare(sql).all(...params);
  } catch (e) {
    // Fallback: LIKE search
    try {
      return db.prepare(`
        SELECT c.content, c.chunk_type, c.section, c.page_num,
               d.filename, d.title, d.brand, d.doc_type
        FROM chunks c JOIN documents d ON d.id = c.doc_id
        WHERE c.content LIKE ? LIMIT ?
      `).all(`%${terms[0]}%`, limit);
    } catch (e2) { return []; }
  }
}

// ─── MODEL LOOKUP ───
function lookupModel(model) {
  if (!db) return [];
  const clean = model.replace(/[^\w\-\.]/g, '').trim();
  if (!clean) return [];

  let results = [];
  try {
    results = db.prepare(`
      SELECT c.content, c.chunk_type, c.section, c.page_num,
             d.filename, d.title, d.brand, d.doc_type
      FROM chunks_fts fts
      JOIN chunks c ON c.id = fts.rowid
      JOIN documents d ON d.id = c.doc_id
      WHERE chunks_fts MATCH ? ORDER BY rank LIMIT 10
    `).all(`"${clean}"`);
  } catch (e) { /* ignore */ }

  if (results.length < 3) {
    try {
      const extra = db.prepare(`
        SELECT c.content, c.chunk_type, c.section, c.page_num,
               d.filename, d.title, d.brand, d.doc_type
        FROM chunks c JOIN documents d ON d.id = c.doc_id
        WHERE UPPER(c.content) LIKE ? LIMIT 10
      `).all(`%${clean.toUpperCase()}%`);
      const seen = new Set(results.map(r => r.content));
      for (const r of extra) { if (!seen.has(r.content)) results.push(r); }
    } catch (e) { /* ignore */ }
  }
  return results.slice(0, 10);
}

// ─── FORMAT FOR CLAUDE ───
function formatResults(results) {
  if (!results.length) return 'No results found.';
  return results.map((r, i) =>
    `--- Result ${i + 1} [${r.filename || '?'} / p.${r.page_num || '?'}] ---\n${r.content}`
  ).join('\n\n');
}

function formatSources(results) {
  const seen = new Set();
  return results.filter(r => {
    const k = `${r.filename}|${r.page_num}`;
    if (seen.has(k)) return false;
    seen.add(k); return true;
  }).map(r => `${r.title || r.filename} (p.${r.page_num || '?'})`).slice(0, 8);
}

// ═══════════════════════════════════════════════════════
//  PRO TOOLS — Nozzle Calculator, Injector Sizing, Multimeter
// ═══════════════════════════════════════════════════════

// ─── NOZZLE CALCULATOR ───
// Industry standard: Nozzle # = GPM × 10 at 4000 PSI
// Flow formula: GPM = (NozzleSize / 10) × √(PSI / 4000)
// Inverse: NozzleSize = (GPM × 10) / √(PSI / 4000)

function calculateNozzle(input) {
  const { gpm, psi, spray_angle, nozzle_number } = input;
  let result = {};

  if (nozzle_number && psi) {
    // Given nozzle number + PSI → calculate actual GPM
    // Nozzle # = GPM at 4000 PSI. At other pressures: GPM = Nozzle# × √(PSI/4000)
    const actualGPM = nozzle_number * Math.sqrt(psi / 4000);
    result = {
      mode: 'nozzle_to_flow',
      nozzle_number: nozzle_number,
      psi: psi,
      calculated_gpm: Math.round(actualGPM * 100) / 100,
      spray_angle: spray_angle || 'not specified',
      note: `A #${nozzle_number} nozzle at ${psi} PSI delivers ${(Math.round(actualGPM * 100) / 100)} GPM. At 4000 PSI it would deliver ${nozzle_number} GPM.`
    };
  } else if (gpm && psi) {
    // Given GPM + PSI → calculate needed nozzle number
    // NozzleNumber = GPM / √(PSI/4000)
    const exactSize = gpm / Math.sqrt(psi / 4000);
    const roundedSize = Math.round(exactSize * 2) / 2; // Round to nearest 0.5

    // Standard nozzle sizes (nozzle # = GPM at 4000 PSI)
    const standardSizes = [1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 12.0, 15.0, 20.0, 25.0];
    const closest = standardSizes.reduce((a, b) => Math.abs(b - exactSize) < Math.abs(a - exactSize) ? b : a);

    // What actual GPM the closest standard nozzle delivers at this PSI
    const actualGPM = closest * Math.sqrt(psi / 4000);

    // Standard tip code: AABB where AA=spray angle, BB=nozzle size×10
    // e.g., 25° angle, #4.0 nozzle → 2540 → "2540"
    const sizeCode = String(Math.round(closest * 10)).padStart(2, '0');

    // Color code based on spray angle
    const colorCodes = { 0: 'Red', 15: 'Yellow', 25: 'Green', 40: 'White', 65: 'Black' };
    const color = spray_angle ? (colorCodes[spray_angle] || 'varies by manufacturer') : 'depends on spray angle';

    result = {
      mode: 'flow_to_nozzle',
      requested_gpm: gpm,
      psi: psi,
      exact_nozzle_size: Math.round(exactSize * 100) / 100,
      recommended_nozzle: closest,
      actual_gpm_at_closest: Math.round(actualGPM * 100) / 100,
      spray_angle: spray_angle || 'not specified',
      nozzle_color: color,
      tip_code: spray_angle ? `${String(spray_angle).padStart(2, '0')}${sizeCode}` : `XX${sizeCode}`,
      warnings: []
    };

    // Add warnings
    if (closest < exactSize * 0.9) result.warnings.push('Closest standard nozzle is smaller than ideal — expect slightly higher pressure.');
    if (closest > exactSize * 1.1) result.warnings.push('Closest standard nozzle is larger than ideal — pressure will be lower than target.');
    if (psi > 4000) result.warnings.push('Operating above 4000 PSI — verify nozzle is rated for this pressure.');
    if (gpm > 10) result.warnings.push('High flow rate — verify hose and fittings are rated for this volume.');
  } else {
    result = { error: 'Need at least GPM + PSI, or nozzle_number + PSI' };
  }

  // Add quick reference chart (nozzle sizes needed at common GPM/PSI combos)
  result.quick_reference = {
    '2 GPM': { '1000': 4.0, '2000': 2.83, '3000': 2.31, '4000': 2.0 },
    '3 GPM': { '1000': 6.0, '2000': 4.24, '3000': 3.46, '4000': 3.0 },
    '4 GPM': { '1000': 8.0, '2000': 5.66, '3000': 4.62, '4000': 4.0 },
    '5 GPM': { '1000': 10.0, '2000': 7.07, '3000': 5.77, '4000': 5.0 },
    '8 GPM': { '1000': 16.0, '2000': 11.31, '3000': 9.24, '4000': 8.0 },
    note: 'Values are nozzle numbers. Nozzle # = GPM capacity at 4000 PSI. Spray angle does NOT affect flow rate.'
  };

  return JSON.stringify(result, null, 2);
}

// ─── CHEMICAL INJECTOR SIZING ───

function calculateInjector(input) {
  const { water_gpm, dilution_ratio, chemical_draw_oz_per_gal, operating_psi, injector_type } = input;
  let result = {};

  if (water_gpm && (dilution_ratio || chemical_draw_oz_per_gal)) {
    // Calculate chemical draw rate
    let chemGPM, ratio;
    if (dilution_ratio) {
      ratio = dilution_ratio;
      chemGPM = water_gpm / dilution_ratio;
    } else {
      // oz per gallon → GPM
      chemGPM = (chemical_draw_oz_per_gal / 128) * water_gpm;
      ratio = Math.round(128 / chemical_draw_oz_per_gal);
    }

    const chemOzPerMin = chemGPM * 128;
    const chemGalPerHour = chemGPM * 60;

    // Downstream injector sizing (low pressure, after unloader)
    // Typical downstream: 1-3 GPM water flow, 10:1 to 20:1 ratio
    // Upstream injector sizing (high pressure, before unloader)
    const isDownstream = !injector_type || injector_type === 'downstream' || (operating_psi && operating_psi < 500);
    const isUpstream = injector_type === 'upstream' || (operating_psi && operating_psi >= 500);

    // Common GP injector models by draw rate
    const injectors = [
      { model: '100678', type: 'downstream', maxGPM: 5.5, orifice: '2.1mm', draw: '3-6% of flow', notes: 'Standard QC downstream' },
      { model: '100679', type: 'downstream', maxGPM: 7.0, orifice: '2.3mm', draw: '3-8% of flow', notes: 'High-flow downstream' },
      { model: '100776', type: 'upstream', maxGPM: 5.5, orifice: '1.8mm', draw: '10-20% of flow', notes: 'Adjustable upstream' },
      { model: '100777', type: 'upstream', maxGPM: 8.0, orifice: '2.1mm', draw: '10-20% of flow', notes: 'High-flow upstream' },
    ];

    const typeFilter = isUpstream ? 'upstream' : 'downstream';
    const compatible = injectors.filter(i => i.type === typeFilter && i.maxGPM >= water_gpm);
    const recommended = compatible.length ? compatible[0] : injectors.find(i => i.type === typeFilter);

    result = {
      water_gpm,
      dilution_ratio: ratio,
      chemical_draw_gpm: Math.round(chemGPM * 1000) / 1000,
      chemical_oz_per_minute: Math.round(chemOzPerMin * 10) / 10,
      chemical_gallons_per_hour: Math.round(chemGalPerHour * 100) / 100,
      injector_type: typeFilter,
      recommended_injector: recommended,
      all_compatible: compatible,
      operating_psi: operating_psi || 'not specified',
      tips: []
    };

    // Add practical tips
    result.tips.push(`At ${ratio}:1 dilution, you'll use about ${(Math.round(chemGalPerHour * 10) / 10)} gallons of chemical per hour.`);
    if (isDownstream) {
      result.tips.push('Downstream injectors only work with low-pressure nozzle (soap tip) installed.');
      result.tips.push('Chemical draw rate decreases as hose length increases due to back-pressure.');
    }
    if (isUpstream) {
      result.tips.push('Upstream injectors draw chemical at full operating pressure — use chemical-rated hose.');
      result.tips.push('Higher draw rate but more wear on pump seals from chemical contact.');
    }
    if (chemGPM > water_gpm * 0.15) {
      result.tips.push('⚠️ Draw rate exceeds 15% of flow — this is very high. Verify dilution ratio is correct.');
    }
  } else {
    result = { error: 'Need water_gpm and either dilution_ratio or chemical_draw_oz_per_gal' };
  }

  return JSON.stringify(result, null, 2);
}

// ─── MULTIMETER ASSISTANT ───
// Guided electrical testing procedures

const multimeterTests = {
  voltage_at_outlet: {
    name: "Test Power at Outlet",
    when: "Machine completely dead, nothing powers on",
    safety: "⚠️ LIVE VOLTAGE — only if qualified. Use rated test equipment.",
    steps: [
      "Set meter to AC Voltage (V~), 200V or higher range",
      "Insert red probe into hot (narrow) slot of outlet",
      "Insert black probe into neutral (wide) slot",
      "Read voltage — should be 108-132V for 120V circuit, or 216-252V for 240V circuit",
      "Test both outlets if using a duplex — one side can fail while the other works"
    ],
    expected: "120V circuit: 108-132V. 240V circuit: 216-252V.",
    fail_low: "Below range → weak circuit, undersized wire run, or high demand on circuit. Check breaker, wire gauge, and other loads.",
    fail_zero: "0V → no power reaching outlet. Check breaker, GFCI reset, and wiring to outlet.",
    next_if_pass: "voltage_at_switch"
  },
  voltage_at_switch: {
    name: "Test Voltage at Machine Switch",
    when: "Outlet has power but machine won't start",
    safety: "⚠️ LIVE VOLTAGE — disconnect is not possible for this test.",
    steps: [
      "Access the power switch or control box on the machine",
      "Set meter to AC Voltage (V~)",
      "With power cord plugged in, test across the INPUT side of the on/off switch",
      "Read voltage — should match outlet voltage",
      "If good, turn switch ON and test OUTPUT side of switch"
    ],
    expected: "Input: same as outlet (120V or 240V). Output with switch ON: same voltage.",
    fail_input_zero: "0V at input → damaged power cord, bad plug, or broken wire in cord. Inspect cord for cuts, kinks, or heat damage.",
    fail_output_zero: "Voltage at input but 0V at output with switch ON → bad switch. Replace switch.",
    next_if_pass: "motor_continuity"
  },
  motor_continuity: {
    name: "Test Motor Windings (Continuity)",
    when: "Switch passes voltage but motor doesn't run",
    safety: "⚠️ UNPLUG MACHINE before this test. Capacitor may hold charge — discharge first.",
    steps: [
      "UNPLUG the machine from power",
      "Set meter to Resistance (Ω), lowest range",
      "Disconnect motor leads from switch/contactor",
      "Test between motor lead 1 and motor lead 2 (run winding)",
      "Test between motor lead 1 and start winding (if accessible)",
      "Test each motor lead to motor housing/ground"
    ],
    expected: "Run winding: 2-20Ω typical (varies by motor HP). Start winding: slightly higher than run. Lead to ground: OL (open/infinite) — no continuity.",
    fail_open: "OL (infinite) across windings → open winding, motor is burned. Replace motor.",
    fail_short: "Very low resistance (< 1Ω) across windings → shorted winding. Replace motor.",
    fail_ground: "Any continuity from winding to ground → ground fault. Motor must be replaced. This trips breakers and GFCIs.",
    next_if_pass: "capacitor_test"
  },
  capacitor_test: {
    name: "Test Motor Capacitor",
    when: "Motor hums but won't spin, or spins slowly",
    safety: "⚠️ UNPLUG MACHINE. Discharge capacitor by shorting terminals with insulated screwdriver.",
    steps: [
      "UNPLUG machine. Discharge capacitor (short terminals briefly with insulated tool)",
      "Remove capacitor from circuit (disconnect leads)",
      "Set meter to Capacitance (µF) if available, or use Resistance (Ω) method",
      "For µF mode: connect probes to capacitor terminals, read capacitance",
      "For Ω mode: set to 20kΩ range, touch probes — needle should sweep up then fall back slowly",
      "Compare reading to rating printed on capacitor label"
    ],
    expected: "Capacitance within ±10% of rated µF on label. Ω method: smooth sweep up and back indicates good cap.",
    fail_low: "Reading significantly below rated µF → weak capacitor. Motor may start slowly or not at all. Replace with same µF and voltage rating.",
    fail_zero: "0µF or no sweep on Ω test → dead capacitor. Replace.",
    fail_shorted: "Near 0Ω steady → shorted capacitor. Replace immediately.",
    next_if_pass: "contactor_test"
  },
  contactor_test: {
    name: "Test Contactor/Relay",
    when: "Control circuit works but motor doesn't engage",
    safety: "⚠️ May require LIVE testing. Extreme caution with exposed terminals.",
    steps: [
      "Identify contactor coil voltage (usually 24V or 120V, labeled on contactor)",
      "With power on and switch activated, test for coil voltage across contactor coil terminals",
      "If coil has voltage, contactor should click and pull in — listen/feel for it",
      "If contactor pulls in, test for voltage on OUTPUT (load) side terminals",
      "With power OFF, test continuity through each contactor pole when manually pressed in"
    ],
    expected: "Coil energized → contactor clicks in → full voltage passes through load terminals.",
    fail_no_coil_voltage: "No voltage at coil → problem is upstream: control switch, thermostat, or safety circuit.",
    fail_no_pull_in: "Coil has voltage but contactor won't pull in → burned coil or mechanically stuck. Replace contactor.",
    fail_no_output: "Contactor pulls in but no voltage on output → burned/pitted contacts. Replace contactor.",
    next_if_pass: null
  },
  cad_cell_test: {
    name: "Test CAD Cell (Flame Sensor)",
    when: "Burner fires then shuts off within seconds, or lockout on safety",
    safety: "⚠️ Fuel system. Ensure proper ventilation. No open flames nearby.",
    steps: [
      "Locate CAD cell (photoresistive sensor in burner housing, usually has two wires)",
      "Disconnect CAD cell leads",
      "Set meter to Resistance (Ω), 200kΩ range",
      "Measure resistance in LIGHT (room light or flashlight on cell)",
      "Cover cell completely (block all light) and read resistance in DARK"
    ],
    expected: "In light: 300-1,000Ω. In dark: 80,000-100,000Ω (80-100kΩ). Ratio of dark:light should be at least 50:1.",
    fail_always_low: "Low resistance in both conditions (< 1kΩ) → CAD cell cracked or contaminated. Replace.",
    fail_always_high: "High resistance in both conditions (> 10kΩ in light) → CAD cell dead. Replace.",
    fail_slow_response: "Takes > 5 seconds to change between light/dark readings → sluggish cell, replace.",
    next_if_pass: null
  },
  gfci_test: {
    name: "Diagnose GFCI Tripping",
    when: "Machine trips GFCI outlet or GFCI breaker",
    safety: "⚠️ Ground faults can be lethal. Do not bypass GFCI protection.",
    steps: [
      "UNPLUG machine. Reset GFCI.",
      "Plug in machine — if GFCI trips immediately with switch OFF, go to step 3",
      "Test power cord: set meter to Ω, test from ground pin to each prong. Should be OL (open)",
      "If cord is good, disconnect motor leads and plug in again",
      "If GFCI holds with motor disconnected → ground fault is in motor. Test motor lead to ground.",
      "If GFCI trips even with motor disconnected → fault is in wiring, switch, or control box"
    ],
    expected: "No leakage current from hot or neutral to ground. All lead-to-ground readings should be OL.",
    fail_cord: "Continuity from prong to ground pin → damaged cord, replace.",
    fail_motor: "Continuity from motor winding to ground → motor ground fault, replace motor.",
    fail_wiring: "Fault with motor disconnected → inspect all internal wiring for bare spots, water ingress, or damaged insulation.",
    next_if_pass: null
  }
};

function getMultimeterTest(testName) {
  if (!testName) {
    return JSON.stringify({
      available_tests: Object.entries(multimeterTests).map(([k, v]) => ({
        id: k,
        name: v.name,
        when_to_use: v.when
      })),
      instruction: "Choose a test based on the symptom. Start with 'voltage_at_outlet' for dead machines, 'cad_cell_test' for burner issues, 'gfci_test' for tripping."
    }, null, 2);
  }

  const test = multimeterTests[testName];
  if (!test) return JSON.stringify({ error: `Unknown test "${testName}". Available: ${Object.keys(multimeterTests).join(', ')}` });
  
  return JSON.stringify({
    test_id: testName,
    ...test,
    next_test: test.next_if_pass ? {
      id: test.next_if_pass,
      name: multimeterTests[test.next_if_pass]?.name
    } : null
  }, null, 2);
}

// ═══════════════════════════════════════════════════════
//  Anthropic API
// ═══════════════════════════════════════════════════════

const tools = [
  {
    name: "classify_symptoms",
    description: "ALWAYS call this FIRST when a user describes a problem or symptom. Analyzes the user's message and identifies which diagnostic categories match (flow, heat, electrical, leak, noise, engine, packing). Returns matched categories with confidence scores. Use the results to decide which diagnostic tree to follow.",
    input_schema: {
      type: "object",
      properties: {
        user_message: { type: "string", description: "The user's original message describing their problem" }
      },
      required: ["user_message"]
    }
  },
  {
    name: "get_diagnostic_tree",
    description: "Get the structured diagnostic decision tree for a specific problem category. Call this AFTER classify_symptoms to get the step-by-step diagnostic walkthrough. Use the tree to guide the user through yes/no questions to reach a diagnosis.",
    input_schema: {
      type: "object",
      properties: {
        category: { type: "string", description: "Diagnostic category: flow, heat, electrical, leak, noise, engine, or packing" },
        node_id: { type: "string", description: "Optional: specific node ID to jump to (e.g., 'Q2', 'D_AIR_SUPPLY')" }
      },
      required: ["category"]
    }
  },
  {
    name: "search_knowledge_base",
    description: "Search the equipment knowledge base (242 manuals, 13,000+ sections) for detailed specs, procedures, part numbers, and OEM data. Use this AFTER diagnostic classification to find specific details to support your diagnosis. Covers General Pump, AR Pumps, Kohler, Cat Pumps, Comet, Honda, Beckett, and more.",
    input_schema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search keywords" },
        brand: { type: "string", description: "Optional brand filter" }
      },
      required: ["query"]
    }
  },
  {
    name: "lookup_pump_model",
    description: "Look up a specific pump/engine model number for specs, breakdowns, and service info.",
    input_schema: {
      type: "object",
      properties: { model: { type: "string", description: "Model number" } },
      required: ["model"]
    }
  },
  {
    name: "calculate_nozzle",
    description: "Calculate spray nozzle sizing. Given GPM + PSI → recommends nozzle number and orifice size. Given nozzle number + PSI → calculates actual GPM output. Also provides color code for spray angle and warnings about over/under-sizing.",
    input_schema: {
      type: "object",
      properties: {
        gpm: { type: "number", description: "Desired or known flow rate in GPM" },
        psi: { type: "number", description: "Operating pressure in PSI" },
        spray_angle: { type: "number", description: "Spray angle in degrees: 0, 15, 25, 40, or 65" },
        nozzle_number: { type: "number", description: "Known nozzle number/size (e.g., 4.0, 5.5)" }
      },
      required: ["psi"]
    }
  },
  {
    name: "calculate_injector",
    description: "Size a chemical injector for a pressure washer system. Given water GPM and dilution ratio (or oz per gallon), calculates chemical draw rate and recommends injector model. Handles both downstream (low-pressure, soap tip) and upstream (high-pressure) injectors.",
    input_schema: {
      type: "object",
      properties: {
        water_gpm: { type: "number", description: "Water flow rate in GPM" },
        dilution_ratio: { type: "number", description: "Chemical dilution ratio (e.g., 10 for 10:1, 20 for 20:1)" },
        chemical_draw_oz_per_gal: { type: "number", description: "Alternative: ounces of chemical per gallon of water" },
        operating_psi: { type: "number", description: "System operating pressure in PSI" },
        injector_type: { type: "string", description: "downstream (after unloader, low pressure) or upstream (before unloader, high pressure)" }
      },
      required: ["water_gpm"]
    }
  },
  {
    name: "multimeter_test",
    description: "Get guided multimeter/electrical testing procedures. Call with no test_name to see all available tests. Each test includes: what meter settings to use, where to probe, expected readings, and what failures mean. Tests chain together: voltage_at_outlet → voltage_at_switch → motor_continuity → capacitor_test → contactor_test. Also: cad_cell_test (burner), gfci_test (tripping).",
    input_schema: {
      type: "object",
      properties: {
        test_name: { type: "string", description: "Test ID: voltage_at_outlet, voltage_at_switch, motor_continuity, capacitor_test, contactor_test, cad_cell_test, gfci_test. Omit to list all tests." }
      }
    }
  }
];

const SYSTEM_PROMPT = `You are P-Supp, a pressure washer diagnostic assistant. You talk like a skilled technician helping a colleague — direct, short, practical.

═══ CRITICAL: KEEP RESPONSES SHORT ═══
- Your responses must be 1-3 sentences when asking diagnostic questions
- NEVER list more than 3 items in a single response
- NEVER dump raw manual text or long lists of possible causes
- Ask ONE question, wait for the answer, then ask the next
- Think of yourself as having a conversation, not writing a textbook

═══ DIAGNOSTIC FLOW ═══
1. User describes a problem → call classify_symptoms
2. Call get_diagnostic_tree for the matched category
3. Ask the FIRST question from the tree in plain language (hide node IDs)
4. Wait for their answer → advance to the next node
5. Repeat until you reach a DIAGNOSIS node
6. At diagnosis: give 2-3 clear action steps, not a full repair manual

Example good response: "Sounds like a flow issue. Is the surging rhythmic (pulsing every few seconds) or random and intermittent?"
Example BAD response: listing 10 possible causes with explanations for each.

═══ PRO TOOLS ═══

NOZZLE CALCULATOR — call calculate_nozzle when user asks about:
- What nozzle size to use, nozzle selection, tip sizing
- Converting between GPM/PSI and nozzle numbers
- "What tip do I need for 4 GPM at 3000 PSI?"
Present the result as: recommended nozzle number, actual GPM it delivers, tip code, color, and any warnings. Keep it to 2-3 sentences.

INJECTOR SIZING — call calculate_injector when user asks about:
- Chemical injector sizing, draw rates, dilution ratios
- "How much soap will I use per hour?"
- Downstream vs upstream injector selection
Present: recommended injector, draw rate in practical units (oz/min and gal/hr), and 1-2 tips.

MULTIMETER ASSISTANT — call multimeter_test when user needs to:
- Test electrical components (voltage, continuity, capacitance, resistance)
- Diagnose dead machines, motor issues, GFCI tripping, CAD cell problems
- "How do I test the capacitor?" or "Walk me through checking voltage"
Present the test steps one at a time. Give the safety warning FIRST. After each test, tell them what the reading means and what to test next.
If you reach a diagnosis during electrical diagnostic tree, offer: "Want me to walk you through testing that with a meter?"

═══ KNOWLEDGE BASE ═══
You have 242 indexed manuals. Use search_knowledge_base ONLY after diagnosis to find specific part numbers, torque specs, or procedures. Summarize in 1-2 sentences — never paste raw results.

═══ WEB SEARCH ═══
You have web_search available. Use it when:
- The knowledge base doesn't have the answer
- User asks about something outside pressure washer equipment
- You need current pricing, availability, or specs not in the KB
- User asks about a brand or product you don't have data for
When using web results, summarize briefly — don't dump URLs.

═══ SAFETY (NON-NEGOTIABLE) ═══
Add a one-line warning BEFORE steps when the topic involves:
- Electrical → "⚠️ Live voltage — only if qualified."
- Fuel/burner → "⚠️ No open flames. Ventilate the area."
- High pressure → "⚠️ Release all pressure before disconnecting."

═══ RULES ═══
- NEVER show brand names (GP, General Pump, Alkota, Cat, AR, etc.) in your responses — keep advice brand-neutral
- NEVER share GP Companies or General Pump contact info (phone, fax, email, address, website)
- If the KB doesn't have the answer, use web search before saying you don't know
- If multiple issues detected, address the most critical one first
- For simple lookups (oil type, nozzle size), just search and answer briefly`;

async function callAnthropic(messages, useWebSearch = false) {
  const toolsToUse = [...tools];
  if (useWebSearch) {
    toolsToUse.push({ type: "web_search_20250305", name: "web_search", max_uses: 3 });
  }

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 45000);
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY, 'anthropic-version': '2023-06-01' },
      signal: ctrl.signal,
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 900, system: SYSTEM_PROMPT, messages, tools: toolsToUse })
    });
    clearTimeout(timer);
    return await resp.json();
  } catch (e) {
    return { error: { message: 'API failed: ' + e.message } };
  }
}

async function runAgent(userMessage, imageData, imageType, history) {
  if (!API_KEY) return { text: '⚠️ AI not configured. Set ANTHROPIC_API_KEY.', sources: [] };

  let userContent = imageData
    ? [{ type: 'image', source: { type: 'base64', media_type: imageType || 'image/jpeg', data: imageData } }, { type: 'text', text: userMessage }]
    : userMessage;

  // Build messages with conversation history so Claude can ask follow-ups
  let messages = [];
  if (history && Array.isArray(history) && history.length > 0) {
    // Keep last 20 turns to stay within context limits
    for (const msg of history.slice(-20)) {
      if (msg.role === 'user' || msg.role === 'assistant') {
        messages.push({ role: msg.role, content: msg.content });
      }
    }
  }
  messages.push({ role: 'user', content: userContent });
  let allSources = [];
  let usedWeb = false;
  let turns = 5;

  while (turns-- > 0) {
    const resp = await callAnthropic(messages, true);  // web search always available as fallback
    if (resp.error) return { text: 'API Error: ' + (resp.error.message || JSON.stringify(resp.error)), sources: [] };

    const toolCalls = (resp.content || []).filter(b => b.type === 'tool_use');
    if (!toolCalls.length) {
      return {
        text: (resp.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n'),
        sources: allSources,
        used_web_search: usedWeb
      };
    }

    messages.push({ role: 'assistant', content: resp.content });
    const results = [];

    for (const tc of toolCalls) {
      let result;
      const t0 = Date.now();
      switch (tc.name) {
        case 'classify_symptoms': {
          const matches = classifySymptoms(tc.input.user_message);
          if (matches.length === 0) {
            result = 'No diagnostic categories matched. This may be a general question — try search_knowledge_base instead.';
          } else {
            result = JSON.stringify({
              detected_categories: matches,
              recommendation: matches.length > 1
                ? `Multiple issues detected. Start with "${matches[0].label}" (highest match), then address "${matches[1].label}".`
                : `Detected: ${matches[0].label}. Use get_diagnostic_tree with category="${matches[0].category}" to start diagnosis.`,
              available_trees: Object.keys(diagnostics?.trees || {})
            }, null, 2);
          }
          break;
        }
        case 'get_diagnostic_tree': {
          result = getDiagnosticTree(tc.input.category, tc.input.node_id);
          break;
        }
        case 'search_knowledge_base': {
          const r = searchFTS(tc.input.query, { brand: tc.input.brand, limit: 5 });
          result = formatResults(r); allSources.push(...formatSources(r)); break;
        }
        case 'lookup_pump_model': {
          const r = lookupModel(tc.input.model);
          result = formatResults(r); allSources.push(...formatSources(r)); break;
        }
        case 'calculate_nozzle': {
          result = calculateNozzle(tc.input); break;
        }
        case 'calculate_injector': {
          result = calculateInjector(tc.input); break;
        }
        case 'multimeter_test': {
          result = getMultimeterTest(tc.input.test_name); break;
        }
        default: result = 'Unknown tool'; usedWeb = tc.name === 'web_search' || usedWeb;
      }
      console.log(`  [Tool] ${tc.name}(${JSON.stringify(tc.input).substring(0, 80)}) ${Date.now() - t0}ms`);
      results.push({ type: 'tool_result', tool_use_id: tc.id, content: (result || '').substring(0, 5000) });
    }
    messages.push({ role: 'user', content: results });
  }

  return { text: 'Could not compile a complete answer. Please rephrase.', sources: allSources };
}

// ═══════════════════════════════════════════════════════
//  HTTP Server
// ═══════════════════════════════════════════════════════

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  const url = new URL(req.url, `http://${req.headers.host}`);

  // ─── POST /api/chat ───
  if (req.method === 'POST' && url.pathname === '/api/chat') {
    let body = '', size = 0;
    req.on('data', c => { size += c.length; if (size > 25e6) { req.destroy(); return; } body += c; });
    req.on('end', async () => {
      try {
        const { message, image, image_type, history } = JSON.parse(body);
        if (!message && !image) { res.writeHead(400, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: 'Missing message' })); return; }
        console.log(`[Chat] ${image ? '📷 ' : ''}${(message || '').substring(0, 100)}${history?.length ? ` (${history.length} prev)` : ''}`);
        const t0 = Date.now();
        const result = await runAgent(message || 'Identify this equipment.', image, image_type, history);
        console.log(`[Chat] ${Date.now() - t0}ms, ${result.sources?.length || 0} sources`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ reply: result.text, sources: result.sources || [], used_web_search: result.used_web_search || false }));
      } catch (e) {
        console.error('Chat error:', e);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Server error' }));
      }
    });
    return;
  }

  // ─── GET /api/search ───
  if (url.pathname === '/api/search') {
    const results = searchFTS(url.searchParams.get('q') || '', { brand: url.searchParams.get('brand'), limit: 20 });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ query: url.searchParams.get('q'), count: results.length, results }));
    return;
  }

  // ─── GET /api/stats ───
  if (url.pathname === '/api/stats') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ai_enabled: !!API_KEY, database: db ? 'connected' : 'not found', ...dbStats }));
    return;
  }

  // ─── GET /api/brands ───
  if (url.pathname === '/api/brands') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(dbStats?.brands?.map(b => ({ brand: b.brand, doc_count: b.cnt })) || []));
    return;
  }

  // ─── GET /api/diagnose?q=... ───
  if (url.pathname === '/api/diagnose') {
    const q = url.searchParams.get('q') || '';
    const matches = classifySymptoms(q);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ query: q, categories: matches }));
    return;
  }

  // ─── GET /api/diagnostic-tree?category=...&node=... ───
  if (url.pathname === '/api/diagnostic-tree') {
    const category = url.searchParams.get('category');
    const node = url.searchParams.get('node');
    if (!category) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ available_trees: Object.keys(diagnostics?.trees || {}) }));
      return;
    }
    const result = node ? getDiagnosticNode(category, node) : getDiagnosticTree(category);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ category, node: node || 'full', result }));
    return;
  }

  // ═══════════════════════════════════════════════════════
  //  Saved Diagnostics API
  // ═══════════════════════════════════════════════════════

  // ─── POST /api/saved-diags ───
  if (req.method === 'POST' && url.pathname === '/api/saved-diags') {
    let body = '';
    req.on('data', c => { body += c; if (body.length > 1e6) req.destroy(); });
    req.on('end', () => {
      try {
        if (!userDb) { res.writeHead(500, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: 'Database not available' })); return; }
        const d = JSON.parse(body);
        if (!d.title) { res.writeHead(400, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: 'Title required' })); return; }

        const stmt = userDb.prepare(`INSERT INTO saved_diagnostics 
          (title, machine_name, machine_brand, machine_model, machine_serial, category, severity, diagnosis, steps, parts_used, notes, conversation)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

        const result = stmt.run(
          d.title || 'Untitled Diagnostic',
          d.machine_name || null,
          d.machine_brand || null,
          d.machine_model || null,
          d.machine_serial || null,
          d.category || null,
          d.severity || null,
          d.diagnosis || null,
          d.steps ? JSON.stringify(d.steps) : null,
          d.parts_used ? JSON.stringify(d.parts_used) : null,
          d.notes || null,
          d.conversation ? JSON.stringify(d.conversation) : null
        );

        console.log(`[Save] Diagnostic #${result.lastInsertRowid}: "${d.title}"`);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ id: result.lastInsertRowid, message: 'Saved' }));
      } catch (e) {
        console.error('Save error:', e);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Save failed' }));
      }
    });
    return;
  }

  // ─── GET /api/saved-diags ───
  if (req.method === 'GET' && url.pathname === '/api/saved-diags') {
    if (!userDb) { res.writeHead(200, { 'Content-Type': 'application/json' }); res.end('[]'); return; }
    const rows = userDb.prepare('SELECT id, title, machine_name, machine_brand, machine_model, category, severity, diagnosis, created_at FROM saved_diagnostics ORDER BY created_at DESC').all();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(rows));
    return;
  }

  // ─── GET /api/saved-diags/:id ───
  if (req.method === 'GET' && url.pathname.match(/^\/api\/saved-diags\/(\d+)$/)) {
    const id = url.pathname.match(/\/(\d+)$/)[1];
    if (!userDb) { res.writeHead(404, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: 'Not found' })); return; }
    const row = userDb.prepare('SELECT * FROM saved_diagnostics WHERE id = ?').get(id);
    if (!row) { res.writeHead(404, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: 'Not found' })); return; }
    // Parse JSON fields
    try { row.steps = JSON.parse(row.steps); } catch(e) {}
    try { row.parts_used = JSON.parse(row.parts_used); } catch(e) {}
    try { row.conversation = JSON.parse(row.conversation); } catch(e) {}
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(row));
    return;
  }

  // ─── DELETE /api/saved-diags/:id ───
  if (req.method === 'DELETE' && url.pathname.match(/^\/api\/saved-diags\/(\d+)$/)) {
    const id = url.pathname.match(/\/(\d+)$/)[1];
    if (!userDb) { res.writeHead(500, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: 'Database not available' })); return; }
    userDb.prepare('DELETE FROM saved_diagnostics WHERE id = ?').run(id);
    console.log(`[Delete] Diagnostic #${id}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ deleted: true }));
    return;
  }

  // ─── GET /api/saved-diags/:id/report ───
  if (req.method === 'GET' && url.pathname.match(/^\/api\/saved-diags\/(\d+)\/report$/)) {
    const id = url.pathname.match(/\/(\d+)/)[1];
    if (!userDb) { res.writeHead(404); res.end('Not found'); return; }
    const row = userDb.prepare('SELECT * FROM saved_diagnostics WHERE id = ?').get(id);
    if (!row) { res.writeHead(404); res.end('Not found'); return; }

    try { row.steps = JSON.parse(row.steps); } catch(e) {}
    try { row.parts_used = JSON.parse(row.parts_used); } catch(e) {}
    try { row.conversation = JSON.parse(row.conversation); } catch(e) {}

    const date = new Date(row.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const severityColors = { critical: '#dc2626', high: '#ea580c', medium: '#ca8a04', low: '#16a34a' };
    const sevColor = severityColors[row.severity] || '#6b7280';

    let stepsHtml = '';
    if (Array.isArray(row.steps)) {
      stepsHtml = row.steps.map((s, i) => `<tr><td style="width:32px;text-align:center;font-weight:700;color:#2563eb">${i + 1}</td><td>${esc(s)}</td></tr>`).join('');
    }

    let partsHtml = '';
    if (Array.isArray(row.parts_used) && row.parts_used.length) {
      partsHtml = `<h3 style="margin-top:24px">Parts Used / Needed</h3><ul>${row.parts_used.map(p => `<li>${esc(p)}</li>`).join('')}</ul>`;
    }

    let convoHtml = '';
    if (Array.isArray(row.conversation) && row.conversation.length) {
      convoHtml = `<h3 style="margin-top:24px;page-break-before:auto">Diagnostic Conversation</h3><div style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">`;
      row.conversation.forEach(m => {
        const isUser = m.role === 'user';
        convoHtml += `<div style="padding:12px 16px;border-bottom:1px solid #f3f4f6;background:${isUser ? '#f0f9ff' : '#ffffff'}">
          <div style="font-size:11px;font-weight:700;color:${isUser ? '#2563eb' : '#059669'};text-transform:uppercase;margin-bottom:4px">${isUser ? 'Technician' : 'P-Supp AI'}</div>
          <div style="font-size:13px;line-height:1.6;white-space:pre-wrap">${esc(m.content || '')}</div>
        </div>`;
      });
      convoHtml += `</div>`;
    }

    function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Diagnostic Report — ${esc(row.title)}</title>
<style>
  @media print { body { margin: 0; } .no-print { display: none !important; } }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937; line-height: 1.6; padding: 40px; max-width: 800px; margin: 0 auto; font-size: 14px; }
  h1 { font-size: 22px; margin-bottom: 4px; }
  h2 { font-size: 16px; color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px; margin: 24px 0 12px; }
  h3 { font-size: 14px; color: #374151; margin-bottom: 8px; }
  .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 3px solid #2563eb; }
  .header-right { text-align: right; font-size: 12px; color: #6b7280; }
  .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; margin-bottom: 24px; font-size: 13px; }
  .meta-label { font-weight: 700; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
  .severity { display: inline-block; padding: 2px 10px; border-radius: 12px; font-size: 12px; font-weight: 700; color: white; }
  .diagnosis-box { background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin: 12px 0; }
  table { width: 100%; border-collapse: collapse; }
  td { padding: 8px 12px; border-bottom: 1px solid #f3f4f6; vertical-align: top; font-size: 13px; }
  ul { padding-left: 20px; }
  li { margin-bottom: 4px; font-size: 13px; }
  .notes-box { background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; margin-top: 16px; font-size: 13px; }
  .footer { margin-top: 32px; padding-top: 12px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; display: flex; justify-content: space-between; }
  .actions { margin-bottom: 24px; display: flex; gap: 8px; }
  .btn { padding: 8px 16px; border-radius: 6px; border: 1px solid #d1d5db; background: white; cursor: pointer; font-size: 13px; font-family: inherit; }
  .btn:hover { background: #f9fafb; }
  .btn-primary { background: #2563eb; color: white; border-color: #2563eb; }
  .btn-primary:hover { background: #1d4ed8; }
</style>
</head>
<body>
<div class="actions no-print">
  <button class="btn btn-primary" onclick="window.print()">🖨️ Print / Save PDF</button>
  <button class="btn" onclick="window.close()">✕ Close</button>
</div>

<div class="header">
  <div>
    <h1>${esc(row.title)}</h1>
    <div style="color:#6b7280;font-size:13px">${date}</div>
  </div>
  <div class="header-right">
    <div style="font-weight:700;font-size:14px">P-Supp</div>
    <div>Diagnostic Report</div>
    <div>#${row.id}</div>
  </div>
</div>

<div class="meta-grid">
  ${row.machine_name ? `<div><div class="meta-label">Machine</div><div>${esc(row.machine_name)}</div></div>` : ''}
  ${row.machine_brand ? `<div><div class="meta-label">Brand</div><div>${esc(row.machine_brand)}</div></div>` : ''}
  ${row.machine_model ? `<div><div class="meta-label">Model</div><div>${esc(row.machine_model)}</div></div>` : ''}
  ${row.machine_serial ? `<div><div class="meta-label">Serial #</div><div>${esc(row.machine_serial)}</div></div>` : ''}
  ${row.category ? `<div><div class="meta-label">Category</div><div>${esc(row.category)}</div></div>` : ''}
  ${row.severity ? `<div><div class="meta-label">Severity</div><div><span class="severity" style="background:${sevColor}">${esc(row.severity).toUpperCase()}</span></div></div>` : ''}
</div>

${row.diagnosis ? `<h2>Diagnosis</h2><div class="diagnosis-box">${esc(row.diagnosis)}</div>` : ''}

${stepsHtml ? `<h2>Diagnostic Steps</h2><table>${stepsHtml}</table>` : ''}

${partsHtml}

${row.notes ? `<h2>Technician Notes</h2><div class="notes-box">${esc(row.notes)}</div>` : ''}

${convoHtml}

<div class="footer">
  <div>Generated by P-Supp Diagnostic AI</div>
  <div>Report #${row.id} — ${date}</div>
</div>
</body>
</html>`;

    res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Disposition': `inline; filename="diagnostic-${row.id}.html"` });
    res.end(html);
    return;
  }

  // ─── GET /api/nozzle?gpm=...&psi=... ───
  if (url.pathname === '/api/nozzle') {
    const input = {
      gpm: parseFloat(url.searchParams.get('gpm')) || undefined,
      psi: parseFloat(url.searchParams.get('psi')) || undefined,
      spray_angle: parseFloat(url.searchParams.get('angle')) || undefined,
      nozzle_number: parseFloat(url.searchParams.get('nozzle')) || undefined
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(calculateNozzle(input));
    return;
  }

  // ─── GET /api/injector?gpm=...&ratio=... ───
  if (url.pathname === '/api/injector') {
    const input = {
      water_gpm: parseFloat(url.searchParams.get('gpm')) || undefined,
      dilution_ratio: parseFloat(url.searchParams.get('ratio')) || undefined,
      chemical_draw_oz_per_gal: parseFloat(url.searchParams.get('oz_per_gal')) || undefined,
      operating_psi: parseFloat(url.searchParams.get('psi')) || undefined,
      injector_type: url.searchParams.get('type') || undefined
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(calculateInjector(input));
    return;
  }

  // ─── GET /api/multimeter?test=... ───
  if (url.pathname === '/api/multimeter') {
    const testName = url.searchParams.get('test') || undefined;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(getMultimeterTest(testName));
    return;
  }

  // ─── GET /api/health ───
  if (url.pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', ai: API_KEY ? 'configured' : 'not configured', database: db ? `${dbStats?.documents} docs` : 'missing' }));
    return;
  }

  // ─── Static Files ───
  let filePath = url.pathname === '/' ? '/index.html' : url.pathname;
  filePath = path.join(__dirname, filePath);
  if (!filePath.startsWith(__dirname)) { res.writeHead(403); res.end('Forbidden'); return; }

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain', 'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  const savedCount = userDb ? userDb.prepare('SELECT COUNT(*) as cnt FROM saved_diagnostics').get().cnt : 0;
  console.log('═══════════════════════════════════════════');
  console.log('  P-Supp Equipment Support AI');
  console.log('───────────────────────────────────────────');
  console.log(`  Port:        ${PORT}`);
  console.log(`  Database:    ${db ? `${dbStats.documents} docs, ${dbStats.chunks} chunks` : 'NOT FOUND'}`);
  console.log(`  Diagnostics: ${diagnostics ? `${Object.keys(diagnostics.trees).length} trees (${Object.keys(diagnostics.trees).join(', ')})` : 'NOT LOADED'}`);
  console.log(`  Pro tools:   ✅ Nozzle calc, Injector sizing, Multimeter (${Object.keys(multimeterTests).length} tests)`);
  console.log(`  Web search:  ✅ Always available as fallback`);
  console.log(`  User data:   ${userDb ? `✅ ${savedCount} saved diagnostics` : '❌ Not available'}`);
  console.log(`  AI:          ${API_KEY ? '✅ Enabled' : '❌ Set ANTHROPIC_API_KEY'}`);
  console.log('═══════════════════════════════════════════');
});
