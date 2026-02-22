// ═══════════════════════════════════════════════════════════════════
// ADMIN PATCH — Add all of this to server.js
// ═══════════════════════════════════════════════════════════════════
//
// STEP 1: After line 8 (APP_PASSWORD line), add:
//   const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'psupp-admin-2025';
//
// STEP 2: After the checkAuth / denyAuth functions (around line 41), add
//         the admin token block (Section A below).
//
// STEP 3: Inside initUserData(), after the tips table creation
//         (after line 124), add the migration block (Section B below).
//
// STEP 4: Before the static file serving block at the bottom (~line 1860),
//         add all the admin API routes (Section C below).
//
// STEP 5: Set env vars in Railway:
//   ADMIN_PASSWORD=<your-chosen-password>
// ═══════════════════════════════════════════════════════════════════


// ───────────────────────────────────────────────────────────────────
// SECTION A — Admin auth (paste after denyAuth function, ~line 41)
// ───────────────────────────────────────────────────────────────────

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'psupp-admin-2025';
const adminTokens = new Map();

function generateAdminToken() {
  const token = 'adm_' + crypto.randomBytes(32).toString('hex');
  adminTokens.set(token, { createdAt: Date.now() });
  if (adminTokens.size > 50) {
    const now = Date.now();
    for (const [t, v] of adminTokens) {
      if (now - v.createdAt > TOKEN_TTL) adminTokens.delete(t);
    }
  }
  return token;
}

function checkAdminAuth(req) {
  const auth = req.headers['authorization'] || '';
  const token = auth.replace('Bearer ', '');
  if (!token || !adminTokens.has(token)) return false;
  const entry = adminTokens.get(token);
  if (Date.now() - entry.createdAt > TOKEN_TTL) { adminTokens.delete(token); return false; }
  return true;
}


// ───────────────────────────────────────────────────────────────────
// SECTION B — Tips table migration (paste inside initUserData(),
//             right after the tips table CREATE TABLE block)
// ───────────────────────────────────────────────────────────────────

// Migrate tips table: add status + approved_at if not present
try { userDb.exec("ALTER TABLE tips ADD COLUMN status TEXT DEFAULT 'pending'"); } catch(e) {}
try { userDb.exec("ALTER TABLE tips ADD COLUMN approved_at DATETIME"); } catch(e) {}
try { userDb.exec("ALTER TABLE tips ADD COLUMN rejected_reason TEXT"); } catch(e) {}
// Backfill: existing tips without a status get 'pending'
try { userDb.exec("UPDATE tips SET status = 'pending' WHERE status IS NULL"); } catch(e) {}

// Scrape history table
userDb.exec(`
  CREATE TABLE IF NOT EXISTS scrape_runs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    category TEXT,
    url TEXT,
    threshold INTEGER DEFAULT 7,
    status TEXT DEFAULT 'queued',
    chunks_added INTEGER DEFAULT 0,
    error TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);


// ───────────────────────────────────────────────────────────────────
// SECTION C — Admin API routes (paste before static file serving)
// ───────────────────────────────────────────────────────────────────

// ─── POST /api/admin/login ───
if (req.method === 'POST' && url.pathname === '/api/admin/login') {
  let body = '';
  req.on('data', c => body += c);
  req.on('end', () => {
    try {
      const { password } = JSON.parse(body);
      if (password === ADMIN_PASSWORD) {
        const token = generateAdminToken();
        console.log(`[Admin] Login from ${req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress}`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, token }));
      } else {
        console.log(`[Admin] Failed login attempt`);
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid admin password' }));
      }
    } catch(e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Bad request' }));
    }
  });
  return;
}

// ─── Admin auth gate: all /api/admin/* except login ───
if (url.pathname.startsWith('/api/admin/') && url.pathname !== '/api/admin/login') {
  if (!checkAdminAuth(req)) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Admin auth required' }));
    return;
  }
}

// ─── GET /api/admin/counts ───
if (url.pathname === '/api/admin/counts') {
  try {
    const pending_tips = userDb ? userDb.prepare("SELECT COUNT(*) as cnt FROM tips WHERE status = 'pending'").get().cnt : 0;
    const kb_gaps = userDb ? userDb.prepare('SELECT COUNT(*) as cnt FROM kb_gaps').get().cnt : 0;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ pending_tips, kb_gaps }));
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
  return;
}

// ─── GET /api/admin/tips?status=pending&limit=50 ───
if (url.pathname === '/api/admin/tips' && req.method === 'GET') {
  try {
    const status = url.searchParams.get('status');
    const limit = parseInt(url.searchParams.get('limit')) || 50;
    let tips;
    if (status) {
      tips = userDb.prepare("SELECT * FROM tips WHERE status = ? ORDER BY created_at DESC LIMIT ?").all(status, limit);
    } else {
      tips = userDb.prepare("SELECT * FROM tips ORDER BY created_at DESC LIMIT ?").all(limit);
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ tips }));
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
  return;
}

// ─── POST /api/admin/tips/:id/approve ───
const approveMatch = url.pathname.match(/^\/api\/admin\/tips\/(\d+)\/approve$/);
if (req.method === 'POST' && approveMatch) {
  try {
    const id = parseInt(approveMatch[1]);
    userDb.prepare("UPDATE tips SET status = 'approved', approved_at = CURRENT_TIMESTAMP WHERE id = ?").run(id);
    console.log(`[Admin] Tip #${id} approved`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
  return;
}

// ─── POST /api/admin/tips/:id/reject ───
const rejectMatch = url.pathname.match(/^\/api\/admin\/tips\/(\d+)\/reject$/);
if (req.method === 'POST' && rejectMatch) {
  try {
    const id = parseInt(rejectMatch[1]);
    let reason = '';
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      try { reason = JSON.parse(body).reason || ''; } catch(e) {}
      userDb.prepare("UPDATE tips SET status = 'rejected', rejected_reason = ? WHERE id = ?").run(reason, id);
      console.log(`[Admin] Tip #${id} rejected`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    });
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
  return;
}

// ─── GET /api/admin/logs?limit=30&offset=0&q=search ───
if (url.pathname === '/api/admin/logs') {
  try {
    const limit = parseInt(url.searchParams.get('limit')) || 30;
    const offset = parseInt(url.searchParams.get('offset')) || 0;
    const q = url.searchParams.get('q') || '';
    let logs, total;
    if (q) {
      logs = userDb.prepare(
        "SELECT * FROM chat_logs WHERE user_message LIKE ? ORDER BY created_at DESC LIMIT ? OFFSET ?"
      ).all(`%${q}%`, limit, offset);
      total = userDb.prepare("SELECT COUNT(*) as cnt FROM chat_logs WHERE user_message LIKE ?").get(`%${q}%`).cnt;
    } else {
      logs = userDb.prepare("SELECT * FROM chat_logs ORDER BY created_at DESC LIMIT ? OFFSET ?").all(limit, offset);
      total = userDb.prepare("SELECT COUNT(*) as cnt FROM chat_logs").get().cnt;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ logs, total }));
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
  return;
}

// ─── GET /api/admin/gaps?limit=100 ───
if (url.pathname === '/api/admin/gaps') {
  try {
    const limit = parseInt(url.searchParams.get('limit')) || 100;
    const gaps = userDb.prepare("SELECT * FROM kb_gaps ORDER BY created_at DESC LIMIT ?").all(limit);
    const total = userDb.prepare("SELECT COUNT(*) as cnt FROM kb_gaps").get().cnt;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ gaps, total }));
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
  return;
}

// ─── POST /api/admin/scrape ───
if (req.method === 'POST' && url.pathname === '/api/admin/scrape') {
  let body = '';
  req.on('data', c => body += c);
  req.on('end', () => {
    try {
      const { brand, category, url: scrapeUrl, threshold } = JSON.parse(body);
      if (userDb) {
        userDb.prepare(
          "INSERT INTO scrape_runs (brand, category, url, threshold, status) VALUES (?, ?, ?, ?, 'queued')"
        ).run(brand || null, category || null, scrapeUrl || null, threshold || 7);
        console.log(`[Admin] Scrape job queued: brand=${brand} category=${category}`);
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, message: 'Scrape job queued. Run ingest pipeline to process.' }));
    } catch(e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
  });
  return;
}

// ─── GET /api/admin/scrape-history ───
if (url.pathname === '/api/admin/scrape-history') {
  try {
    const runs = userDb
      ? userDb.prepare("SELECT * FROM scrape_runs ORDER BY created_at DESC LIMIT 50").all()
      : [];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ runs }));
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
  return;
}

// ─── Serve /admin → admin.html ───
// This goes in the STATIC FILE SERVING block. Replace:
//   let filePath = url.pathname === '/' ? '/index.html' : url.pathname;
// With:
//   let filePath = url.pathname === '/' ? '/index.html' : url.pathname === '/admin' ? '/admin.html' : url.pathname;
