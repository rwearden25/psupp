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

═══ KNOWLEDGE BASE ═══
You have 242 indexed manuals. Use search_knowledge_base ONLY after diagnosis to find specific part numbers, torque specs, or procedures. Summarize in 1-2 sentences — never paste raw results.

═══ SAFETY (NON-NEGOTIABLE) ═══
Add a one-line warning BEFORE steps when the topic involves:
- Electrical → "⚠️ Live voltage — only if qualified."
- Fuel/burner → "⚠️ No open flames. Ventilate the area."
- High pressure → "⚠️ Release all pressure before disconnecting."

═══ RULES ═══
- NEVER show brand names (GP, General Pump, Alkota, Cat, AR, etc.) in your responses — keep advice brand-neutral
- NEVER share GP Companies or General Pump contact info (phone, fax, email, address, website)
- If the KB doesn't have the answer, say so — don't guess on specs or part numbers
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
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 600, system: SYSTEM_PROMPT, messages, tools: toolsToUse })
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
          const r = searchFTS(tc.input.query, { brand: tc.input.brand, limit: 5 });
          result = formatResults(r); allSources.push(...formatSources(r)); break;
        }
        case 'lookup_pump_model': {
          const r = lookupModel(tc.input.model);
          result = formatResults(r); allSources.push(...formatSources(r)); break;
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
  console.log(`  User data:   ${userDb ? `✅ ${savedCount} saved diagnostics` : '❌ Not available'}`);
  console.log(`  AI:          ${API_KEY ? '✅ Enabled' : '❌ Set ANTHROPIC_API_KEY'}`);
  console.log('═══════════════════════════════════════════');
});
