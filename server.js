const http = require('http');
const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.ANTHROPIC_API_KEY;
const DB_PATH = path.join(__dirname, 'knowledge.db');

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

  // Otherwise return the full guided path starting from entry
  let output = `# ${tree.name || tree.title || category}\n${tree.description || ''}\n`;
  if (tree.safety_warning) output += `\n${tree.safety_warning}\n`;
  output += `\n## Diagnostic Steps\n\n`;

  // Walk the tree from entry, showing the full decision path
  const visited = new Set();
  const queue = [tree.entry];

  while (queue.length > 0 && visited.size < 30) {
    const id = queue.shift();
    if (visited.has(id) || !nodes[id]) continue;
    visited.add(id);

    const node = nodes[id];
    output += formatNode(id, node, tree) + '\n\n';

    // Add child nodes to queue
    if (node.yes && !visited.has(node.yes)) queue.push(node.yes);
    if (node.no && !visited.has(node.no)) queue.push(node.no);
    if (node.next && !visited.has(node.next)) queue.push(node.next);
    if (node.options) {
      for (const target of Object.values(node.options)) {
        if (!visited.has(target)) queue.push(target);
      }
    }
    // Handle custom branching keywords
    for (const key of ['sudden', 'gradual', 'pulsating', 'low_steady', 'black', 'white_blue']) {
      if (node[key] && !visited.has(node[key])) queue.push(node[key]);
    }
  }

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
    `--- Result ${i + 1} [${r.brand || '?'} / ${r.filename || '?'} / p.${r.page_num || '?'}] ---\n${r.content}`
  ).join('\n\n');
}

function formatSources(results) {
  const seen = new Set();
  return results.filter(r => {
    const k = `${r.brand}|${r.filename}|${r.page_num}`;
    if (seen.has(k)) return false;
    seen.add(k); return true;
  }).map(r => `${r.brand}: ${r.title || r.filename} (p.${r.page_num || '?'})`).slice(0, 8);
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
  }
];

const SYSTEM_PROMPT = `You are P-Supp, a digital mechanic AI for pressure washer equipment. You guide technicians through structured diagnostics, look up specs, and find service procedures.

═══ YOUR 3-LAYER KNOWLEDGE SYSTEM ═══

LAYER 1 — DIAGNOSTIC LOGIC (Primary Brain):
You have structured decision trees for: Flow/Pressure, Heat/Burner, Electrical, Leak, Noise/Vibration, Engine, and Packing failures.
→ When a user describes a problem, ALWAYS call classify_symptoms FIRST
→ Then call get_diagnostic_tree to get the step-by-step diagnostic path
→ Walk the user through the tree one question at a time
→ Ask ONE diagnostic question, wait for their answer, then advance to the next node

LAYER 2 — OEM KNOWLEDGE (Reference Brain):
You have 242 indexed manuals with specs, part numbers, procedures, torque values.
→ Use search_knowledge_base to find specific details AFTER you know what to look for
→ Summarize the info — do NOT dump raw manual text
→ Include part numbers and specs when relevant

LAYER 3 — SAFETY RULES (Guardrail Brain):
When the diagnosis involves ANY of these, shift your tone and add safety warnings:
→ Electrical/wiring/voltage → "⚠️ This involves live voltage. Continue only if qualified."
→ Fuel/gas/burner → "⚠️ Fuel system work — ensure no open flames. Ventilate area."
→ High pressure → "⚠️ Never disconnect fittings under pressure. Release all pressure first."
→ Chemical → "⚠️ Review SDS for the chemical. Use appropriate PPE."
Safety warnings should appear BEFORE the diagnostic steps, not buried at the end.

═══ HOW TO DIAGNOSE ═══

1. User describes symptoms → you call classify_symptoms
2. You identify the category (or multiple) → call get_diagnostic_tree
3. Present the FIRST question from the tree naturally (don't show node IDs)
4. User answers → you advance to the next node
5. Continue until you reach a DIAGNOSIS node
6. At diagnosis: give the checks as a clear action plan
7. If needed, call search_knowledge_base for specific part numbers, torque specs, procedures

═══ CONVERSATION STYLE ═══
- Talk like a skilled technician helping a colleague — direct, clear, practical
- Ask ONE question at a time during diagnosis (don't dump the whole tree)
- Use the decision tree logic but present it conversationally, not robotically
- When you reach a diagnosis, present it as a clear action plan with numbered steps
- If multiple categories detected (e.g., flow + heat), address the most critical first
- For simple lookups (oil type, nozzle size, specs), just search and answer — no tree needed

═══ RULES ═══
- NEVER share GP Companies or General Pump contact info (phone, fax, email, address, website)
- When user uploads a photo: identify equipment, read model numbers, note damage, search KB
- If the KB doesn't have the answer, say so — don't guess on specs or part numbers
- Safety warnings are NON-NEGOTIABLE — always include them for electrical, fuel, and pressure work`;

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
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 2048, system: SYSTEM_PROMPT, messages, tools: toolsToUse })
    });
    clearTimeout(timer);
    return await resp.json();
  } catch (e) {
    return { error: { message: 'API failed: ' + e.message } };
  }
}

async function runAgent(userMessage, imageData, imageType) {
  if (!API_KEY) return { text: '⚠️ AI not configured. Set ANTHROPIC_API_KEY.', sources: [] };

  let userContent = imageData
    ? [{ type: 'image', source: { type: 'base64', media_type: imageType || 'image/jpeg', data: imageData } }, { type: 'text', text: userMessage }]
    : userMessage;

  let messages = [{ role: 'user', content: userContent }];
  let allSources = [];
  let usedWeb = false;
  let turns = 5;

  while (turns-- > 0) {
    const resp = await callAnthropic(messages, allSources.length < 3 && turns < 3);
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
          const r = searchFTS(tc.input.query, { brand: tc.input.brand, limit: 10 });
          result = formatResults(r); allSources.push(...formatSources(r)); break;
        }
        case 'lookup_pump_model': {
          const r = lookupModel(tc.input.model);
          result = formatResults(r); allSources.push(...formatSources(r)); break;
        }
        default: result = 'Unknown tool'; usedWeb = tc.name === 'web_search' || usedWeb;
      }
      console.log(`  [Tool] ${tc.name}(${JSON.stringify(tc.input).substring(0, 80)}) ${Date.now() - t0}ms`);
      results.push({ type: 'tool_result', tool_use_id: tc.id, content: (result || '').substring(0, 20000) });
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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  const url = new URL(req.url, `http://${req.headers.host}`);

  // ─── POST /api/chat ───
  if (req.method === 'POST' && url.pathname === '/api/chat') {
    let body = '', size = 0;
    req.on('data', c => { size += c.length; if (size > 25e6) { req.destroy(); return; } body += c; });
    req.on('end', async () => {
      try {
        const { message, image, image_type } = JSON.parse(body);
        if (!message && !image) { res.writeHead(400, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: 'Missing message' })); return; }
        console.log(`[Chat] ${image ? '📷 ' : ''}${(message || '').substring(0, 100)}`);
        const t0 = Date.now();
        const result = await runAgent(message || 'Identify this equipment.', image, image_type);
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
  console.log('═══════════════════════════════════════════');
  console.log('  P-Supp Equipment Support AI');
  console.log('───────────────────────────────────────────');
  console.log(`  Port:        ${PORT}`);
  console.log(`  Database:    ${db ? `${dbStats.documents} docs, ${dbStats.chunks} chunks` : 'NOT FOUND'}`);
  console.log(`  Diagnostics: ${diagnostics ? `${Object.keys(diagnostics.trees).length} trees (${Object.keys(diagnostics.trees).join(', ')})` : 'NOT LOADED'}`);
  console.log(`  AI:          ${API_KEY ? '✅ Enabled' : '❌ Set ANTHROPIC_API_KEY'}`);
  console.log('═══════════════════════════════════════════');
});
