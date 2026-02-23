// ═══════════════════════════════════════════════════════════════════════════
//  auth.js v2 — Three-Tier RBAC for raw http.createServer()
// ═══════════════════════════════════════════════════════════════════════════
//
//  Matches existing server.js patterns: token Maps, manual body parsing,
//  if/else routing. Drop-in replacement for the old password auth.
//
//  Roles (least → most privileged):
//    tech   — Standard technician. Own data only. 5 queries/day.
//    techp  — Power technician. Sees supervised techs' data. 15 queries/day.
//    admin  — Full access. Unlimited everything.
//
//  Usage in server.js:
//    const auth = require('./auth');
//    auth.init(userDb);   // pass your existing userdata DB
//
//    // In request handler:
//    const user = auth.getUser(req);     // null if not logged in
//    if (!user) { auth.deny(res); return; }
//    if (!auth.hasRole(user, 'techp')) { auth.denyRole(res); return; }
//    const scope = auth.getDataScope(user);
// ═══════════════════════════════════════════════════════════════════════════

const bcrypt = require('bcrypt');
const crypto = require('crypto');

const SALT_ROUNDS = 12;
const TOKEN_TTL = 24 * 60 * 60 * 1000; // 24 hours
const TECH_DAILY_LIMIT = 5;
const TECHP_DAILY_LIMIT = 15;

// ═══════════════════════════════════════════════
//  TOKEN STORE — same pattern as existing server.js
// ═══════════════════════════════════════════════
//  token → { userId, username, role, permissions, createdAt }
const tokens = new Map();

function generateToken(user) {
  const token = crypto.randomBytes(32).toString('hex');
  tokens.set(token, {
    userId: user.id,
    username: user.username,
    role: user.role,
    full_name: user.full_name,
    must_change_pw: !!user.must_change_pw,
    permissions: PERMISSIONS[user.role] || [],
    createdAt: Date.now()
  });
  // Cleanup expired tokens when map gets large
  if (tokens.size > 500) {
    const now = Date.now();
    for (const [t, v] of tokens) {
      if (now - v.createdAt > TOKEN_TTL) tokens.delete(t);
    }
  }
  return token;
}

// Extract user from request (returns null if not authenticated)
function getUser(req) {
  const auth = req.headers['authorization'] || '';
  const token = auth.replace('Bearer ', '');
  if (!token || !tokens.has(token)) return null;
  const entry = tokens.get(token);
  if (Date.now() - entry.createdAt > TOKEN_TTL) {
    tokens.delete(token);
    return null;
  }
  return entry;
}

// ═══════════════════════════════════════════════
//  PERMISSION MATRIX
// ═══════════════════════════════════════════════
const PERMISSIONS = {
  tech: [
    'search', 'chat', 'view_docs', 'view_repair_details',
    'submit_tips', 'view_own_history', 'view_own_service'
  ],
  techp: [
    'search', 'chat', 'view_docs', 'view_repair_details',
    'submit_tips', 'manage_team_tips',
    'view_own_history', 'view_team_history',
    'view_own_service', 'view_team_service',
    'flag_content'
  ],
  admin: [
    'search', 'chat', 'view_docs', 'view_repair_details',
    'submit_tips', 'manage_tips', 'manage_team_tips', 'delete_tips',
    'view_own_history', 'view_team_history', 'view_all_history',
    'view_own_service', 'view_team_service', 'view_all_service',
    'flag_content', 'manage_users', 'upload_pdfs', 'edit_kb',
    'view_analytics', 'manage_settings', 'delete_content'
  ]
};

const ROLE_LEVEL = { tech: 1, techp: 2, admin: 3 };

// ═══════════════════════════════════════════════
//  ROLE & PERMISSION CHECKS
// ═══════════════════════════════════════════════

function hasRole(user, minRole) {
  if (!user) return false;
  return (ROLE_LEVEL[user.role] || 0) >= (ROLE_LEVEL[minRole] || 99);
}

function hasPermission(user, permission) {
  if (!user) return false;
  return (PERMISSIONS[user.role] || []).includes(permission);
}

// ═══════════════════════════════════════════════
//  RESPONSE HELPERS — match existing server.js style
// ═══════════════════════════════════════════════

function deny(res) {
  res.writeHead(401, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not authenticated. Please log in.' }));
}

function denyRole(res, required) {
  res.writeHead(403, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Insufficient permissions', required: required || 'higher role' }));
}

function jsonResponse(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

// ═══════════════════════════════════════════════
//  DATA ISOLATION — scope what each user can see
// ═══════════════════════════════════════════════

function getDataScope(user) {
  if (!user) return null;

  const scope = {
    userId: user.userId,
    role: user.role,
    canSeeAll: false,
    visibleUserIds: [user.userId],
    ownOnly: false
  };

  if (user.role === 'admin') {
    scope.canSeeAll = true;
    try {
      scope.visibleUserIds = authDb.prepare('SELECT id FROM users WHERE active = 1').all().map(r => r.id);
    } catch (e) {
      scope.visibleUserIds = [user.userId];
    }
  } else if (user.role === 'techp') {
    try {
      const supervised = authDb.prepare(
        'SELECT id FROM users WHERE supervised_by = ? AND active = 1'
      ).all(user.userId).map(r => r.id);
      scope.visibleUserIds = [user.userId, ...supervised];
    } catch (e) {
      scope.visibleUserIds = [user.userId];
    }
  } else {
    scope.ownOnly = true;
  }

  return scope;
}

// Build SQL WHERE clause fragment for data isolation
function scopeWhere(scope, userIdColumn) {
  if (!scope) return '1=0';
  if (scope.canSeeAll) return '1=1';
  const ids = scope.visibleUserIds.join(',');
  return `${userIdColumn} IN (${ids})`;
}

// ═══════════════════════════════════════════════
//  QUERY RATE LIMITING
// ═══════════════════════════════════════════════

function checkQueryLimit(user) {
  if (!user) return { allowed: false, error: 'Not authenticated' };
  if (user.role === 'admin') return { allowed: true, remaining: null, unlimited: true };

  const limit = user.role === 'techp' ? TECHP_DAILY_LIMIT : TECH_DAILY_LIMIT;
  const today = new Date().toISOString().split('T')[0];

  try {
    let usage = authDb.prepare(
      'SELECT count FROM query_usage WHERE user_id = ? AND date = ?'
    ).get(user.userId, today);

    if (!usage) {
      authDb.prepare(
        'INSERT INTO query_usage (user_id, date, count) VALUES (?, ?, 0)'
      ).run(user.userId, today);
      usage = { count: 0 };
    }

    if (usage.count >= limit) {
      return {
        allowed: false,
        limit, used: usage.count, remaining: 0,
        error: `Daily query limit reached (${limit}). ${user.role === 'tech' ? 'Contact your supervisor or t' : 'T'}ry again tomorrow.`
      };
    }

    // Increment
    authDb.prepare(
      'UPDATE query_usage SET count = count + 1 WHERE user_id = ? AND date = ?'
    ).run(user.userId, today);

    return { allowed: true, limit, used: usage.count + 1, remaining: limit - usage.count - 1 };
  } catch (e) {
    console.error('[Auth] Query limit error:', e.message);
    return { allowed: true, remaining: null }; // fail open
  }
}

function getQueryUsage(userId) {
  const today = new Date().toISOString().split('T')[0];
  try {
    const user = authDb.prepare('SELECT role FROM users WHERE id = ?').get(userId);
    const usage = authDb.prepare(
      'SELECT count FROM query_usage WHERE user_id = ? AND date = ?'
    ).get(userId, today);

    if (user && user.role === 'admin') {
      return { used: usage ? usage.count : 0, limit: null, remaining: null, unlimited: true };
    }
    const limit = (user && user.role === 'techp') ? TECHP_DAILY_LIMIT : TECH_DAILY_LIMIT;
    return { used: usage ? usage.count : 0, limit, remaining: limit - (usage ? usage.count : 0) };
  } catch (e) {
    return { used: 0, limit: TECH_DAILY_LIMIT, remaining: TECH_DAILY_LIMIT };
  }
}

// ═══════════════════════════════════════════════
//  DATABASE SETUP
// ═══════════════════════════════════════════════

let authDb = null;

function init(existingUserDb) {
  // Use the same userdata DB so everything is in one place
  authDb = existingUserDb;
  if (!authDb) {
    console.error('[Auth] No database provided!');
    return;
  }

  authDb.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      username      TEXT    UNIQUE NOT NULL COLLATE NOCASE,
      password      TEXT    NOT NULL,
      role          TEXT    NOT NULL DEFAULT 'tech'
                    CHECK(role IN ('tech', 'techp', 'admin')),
      full_name     TEXT    DEFAULT '',
      email         TEXT    DEFAULT '',
      active        INTEGER DEFAULT 1,
      must_change_pw INTEGER DEFAULT 0,
      supervised_by INTEGER REFERENCES users(id),
      created_at    TEXT    DEFAULT (datetime('now')),
      last_login    TEXT,
      created_by    INTEGER REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS login_log (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id    INTEGER REFERENCES users(id),
      username   TEXT    NOT NULL,
      success    INTEGER NOT NULL,
      ip         TEXT,
      user_agent TEXT,
      timestamp  TEXT    DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS query_usage (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id    INTEGER NOT NULL REFERENCES users(id),
      date       TEXT    NOT NULL,
      count      INTEGER DEFAULT 0,
      UNIQUE(user_id, date)
    );

    CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
    CREATE INDEX IF NOT EXISTS idx_users_supervised_by ON users(supervised_by);
    CREATE INDEX IF NOT EXISTS idx_query_usage_user_date ON query_usage(user_id, date);
  `);

  // Migration: add must_change_pw if upgrading from older schema
  try { authDb.exec('ALTER TABLE users ADD COLUMN must_change_pw INTEGER DEFAULT 0'); } catch(e) { /* already exists */ }

  // ─── Seed Default Accounts ───
  const count = authDb.prepare('SELECT COUNT(*) as c FROM users').get();
  if (count.c === 0) {
    console.log('');
    console.log('╔═══════════════════════════════════════════════════════╗');
    console.log('║  🔐 Seeding 6 default accounts                      ║');
    console.log('╠═══════════════════════════════════════════════════════╣');

    const seedUsers = [
      { username: 'admin',  password: 'psuppadmin',  role: 'admin', full_name: 'System Administrator' },
      { username: 'techp1', password: 'psupptechp1',   role: 'techp', full_name: 'Power Tech 1' },
      { username: 'techp2', password: 'psupptechp2',   role: 'techp', full_name: 'Power Tech 2' },
      { username: 'tech1',  password: 'psupptech1',    role: 'tech',  full_name: 'Technician 1' },
      { username: 'tech2',  password: 'psupptech2',    role: 'tech',  full_name: 'Technician 2' },
      { username: 'tech3',  password: 'psupptech3',    role: 'tech',  full_name: 'Technician 3' },
    ];

    const insertUser = authDb.prepare(`
      INSERT INTO users (username, password, role, full_name, must_change_pw)
      VALUES (?, ?, ?, ?, 0)
    `);

    const userIds = {};
    for (const u of seedUsers) {
      const hash = bcrypt.hashSync(u.password, SALT_ROUNDS);
      const info = insertUser.run(u.username, hash, u.role, u.full_name);
      userIds[u.username] = info.lastInsertRowid;
      const mask = u.password.slice(0, 3) + '***';
      console.log(`║  ${u.role.padEnd(5)} │ ${u.username.padEnd(8)} │ ${mask.padEnd(12)} ║`);
    }

    // Default supervision
    const assignSupervisor = authDb.prepare('UPDATE users SET supervised_by = ? WHERE id = ?');
    assignSupervisor.run(userIds['techp1'], userIds['tech1']);
    assignSupervisor.run(userIds['techp1'], userIds['tech2']);
    assignSupervisor.run(userIds['techp2'], userIds['tech3']);

    console.log('╠═══════════════════════════════════════════════════════╣');
    console.log('║  Supervision: techp1 → tech1, tech2                  ║');
    console.log('║               techp2 → tech3                         ║');
    console.log('╠═══════════════════════════════════════════════════════╣');
    console.log('║  ⚠  CHANGE ALL PASSWORDS ON FIRST LOGIN              ║');
    console.log('╚═══════════════════════════════════════════════════════╝');
    console.log('');
  }

  const userCount = authDb.prepare('SELECT COUNT(*) as c FROM users').get().c;
  console.log(`🔐 Auth initialized — ${userCount} users | Limits: tech=${TECH_DAILY_LIMIT}/day, techp=${TECHP_DAILY_LIMIT}/day, admin=∞`);
}

// ═══════════════════════════════════════════════
//  ROUTE HANDLERS — called from server.js if/else
// ═══════════════════════════════════════════════
//  Each returns true if it handled the request,
//  false if server.js should continue routing.

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '', size = 0;
    req.on('data', c => {
      size += c.length;
      if (size > 1e6) { req.destroy(); reject(new Error('Body too large')); return; }
      body += c;
    });
    req.on('end', () => {
      try { resolve(JSON.parse(body)); }
      catch (e) { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}

async function handleAuthRoutes(req, res, url) {
  const method = req.method;
  const path = url.pathname;
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || '';
  const ua = req.headers['user-agent'] || '';

  // ─── POST /api/auth/login ───
  if (method === 'POST' && path === '/api/auth/login') {
    try {
      const { username, password } = await readBody(req);
      if (!username || !password) {
        jsonResponse(res, 400, { error: 'Username and password required' });
        return true;
      }

      const user = authDb.prepare(
        'SELECT * FROM users WHERE username = ? COLLATE NOCASE'
      ).get(username.trim());

      // No such user
      if (!user) {
        authDb.prepare(
          'INSERT INTO login_log (username, success, ip, user_agent) VALUES (?, 0, ?, ?)'
        ).run(username.trim(), ip, ua);
        console.log(`[Auth] Failed login: "${username}" (unknown user) from ${ip}`);
        jsonResponse(res, 401, { error: 'Invalid credentials' });
        return true;
      }

      // Deactivated
      if (!user.active) {
        authDb.prepare(
          'INSERT INTO login_log (user_id, username, success, ip, user_agent) VALUES (?, ?, 0, ?, ?)'
        ).run(user.id, user.username, ip, ua);
        console.log(`[Auth] Blocked login: "${username}" (deactivated) from ${ip}`);
        jsonResponse(res, 403, { error: 'Account deactivated. Contact your administrator.' });
        return true;
      }

      // Wrong password
      if (!bcrypt.compareSync(password, user.password)) {
        authDb.prepare(
          'INSERT INTO login_log (user_id, username, success, ip, user_agent) VALUES (?, ?, 0, ?, ?)'
        ).run(user.id, user.username, ip, ua);
        console.log(`[Auth] Failed login: "${username}" (bad password) from ${ip}`);
        jsonResponse(res, 401, { error: 'Invalid credentials' });
        return true;
      }

      // Success!
      authDb.prepare("UPDATE users SET last_login = datetime('now') WHERE id = ?").run(user.id);
      authDb.prepare(
        'INSERT INTO login_log (user_id, username, success, ip, user_agent) VALUES (?, ?, 1, ?, ?)'
      ).run(user.id, user.username, ip, ua);

      const token = generateToken(user);
      console.log(`[Auth] ✓ Login: ${user.username} (${user.role}) from ${ip}`);

      const response = {
        ok: true,
        token,
        user: {
          id: user.id,
          username: user.username,
          role: user.role,
          full_name: user.full_name,
          permissions: PERMISSIONS[user.role],
          must_change_pw: !!user.must_change_pw
        }
      };

      // Include query usage for tech and techp
      if (user.role !== 'admin') {
        response.queryUsage = getQueryUsage(user.id);
      }

      // Include supervised techs for techp
      if (user.role === 'techp') {
        response.supervisedTechs = authDb.prepare(
          'SELECT id, username, full_name FROM users WHERE supervised_by = ? AND active = 1'
        ).all(user.id);
      }

      jsonResponse(res, 200, response);
    } catch (e) {
      console.error('[Auth] Login error:', e.message);
      jsonResponse(res, 400, { error: 'Bad request' });
    }
    return true;
  }

  // ─── POST /api/auth/logout ───
  if (method === 'POST' && path === '/api/auth/logout') {
    const auth = req.headers['authorization'] || '';
    const token = auth.replace('Bearer ', '');
    if (token) tokens.delete(token);
    jsonResponse(res, 200, { ok: true });
    return true;
  }

  // ─── GET /api/auth/me ───
  if (method === 'GET' && path === '/api/auth/me') {
    const user = getUser(req);
    if (!user) {
      jsonResponse(res, 200, { authenticated: false });
      return true;
    }

    const response = {
      authenticated: true,
      user: {
        id: user.userId,
        username: user.username,
        role: user.role,
        full_name: user.full_name,
        permissions: user.permissions,
        must_change_pw: !!user.must_change_pw
      }
    };

    if (user.role !== 'admin') {
      response.queryUsage = getQueryUsage(user.userId);
    }

    if (user.role === 'techp') {
      response.supervisedTechs = authDb.prepare(
        'SELECT id, username, full_name, last_login FROM users WHERE supervised_by = ? AND active = 1'
      ).all(user.userId);
    }

    jsonResponse(res, 200, response);
    return true;
  }

  // ─── POST /api/auth/change-password ───
  if (method === 'POST' && path === '/api/auth/change-password') {
    const user = getUser(req);
    if (!user) { deny(res); return true; }

    try {
      const { currentPassword, newPassword } = await readBody(req);
      if (!currentPassword || !newPassword) {
        jsonResponse(res, 400, { error: 'Both current and new password required' });
        return true;
      }
      if (!newPassword) {
        jsonResponse(res, 400, { error: 'New password is required' });
        return true;
      }

      const dbUser = authDb.prepare('SELECT password FROM users WHERE id = ?').get(user.userId);
      if (!bcrypt.compareSync(currentPassword, dbUser.password)) {
        jsonResponse(res, 401, { error: 'Current password is incorrect' });
        return true;
      }

      const hash = bcrypt.hashSync(newPassword, SALT_ROUNDS);
      authDb.prepare('UPDATE users SET password = ?, must_change_pw = 0 WHERE id = ?').run(hash, user.userId);

      // Update token so must_change_pw clears immediately
      const auth = req.headers['authorization'] || '';
      const tokenStr = auth.replace('Bearer ', '');
      if (tokenStr && tokens.has(tokenStr)) {
        tokens.get(tokenStr).must_change_pw = false;
      }

      console.log(`[Auth] Password changed: ${user.username}`);
      jsonResponse(res, 200, { ok: true, message: 'Password changed' });
    } catch (e) {
      jsonResponse(res, 400, { error: 'Bad request' });
    }
    return true;
  }

  // ─── GET /api/team/techs (techp+) ───
  if (method === 'GET' && path === '/api/team/techs') {
    const user = getUser(req);
    if (!user) { deny(res); return true; }
    if (!hasRole(user, 'techp')) { denyRole(res, 'techp'); return true; }

    try {
      let techs;
      if (user.role === 'admin') {
        techs = authDb.prepare(`
          SELECT u.id, u.username, u.full_name, u.last_login, u.active,
                 s.username as supervisor_name
          FROM users u
          LEFT JOIN users s ON u.supervised_by = s.id
          WHERE u.role = 'tech'
          ORDER BY u.username
        `).all();
      } else {
        techs = authDb.prepare(`
          SELECT id, username, full_name, last_login, active
          FROM users WHERE supervised_by = ? AND active = 1
          ORDER BY username
        `).all(user.userId);
      }

      const today = new Date().toISOString().split('T')[0];
      for (const t of techs) {
        const usage = authDb.prepare(
          'SELECT count FROM query_usage WHERE user_id = ? AND date = ?'
        ).get(t.id, today);
        t.queriesUsed = usage ? usage.count : 0;
        t.queryLimit = TECH_DAILY_LIMIT;
      }

      jsonResponse(res, 200, techs);
    } catch (e) {
      jsonResponse(res, 500, { error: e.message });
    }
    return true;
  }

  // ═════════════════════════════════
  //  ADMIN USER MANAGEMENT ROUTES
  // ═════════════════════════════════

  // ─── GET /api/admin/users ───
  if (method === 'GET' && path === '/api/admin/users') {
    const user = getUser(req);
    if (!user) { deny(res); return true; }
    if (!hasRole(user, 'admin')) { denyRole(res, 'admin'); return true; }

    try {
      const users = authDb.prepare(`
        SELECT u.id, u.username, u.role, u.full_name, u.email,
               u.active, u.created_at, u.last_login, u.supervised_by,
               s.username as supervisor_name
        FROM users u
        LEFT JOIN users s ON u.supervised_by = s.id
        ORDER BY
          CASE u.role WHEN 'admin' THEN 1 WHEN 'techp' THEN 2 WHEN 'tech' THEN 3 END,
          u.username
      `).all();

      // Attach today's query usage
      const today = new Date().toISOString().split('T')[0];
      for (const u of users) {
        const usage = authDb.prepare(
          'SELECT count FROM query_usage WHERE user_id = ? AND date = ?'
        ).get(u.id, today);
        u.queriesUsed = usage ? usage.count : 0;
      }

      jsonResponse(res, 200, users);
    } catch (e) {
      jsonResponse(res, 500, { error: e.message });
    }
    return true;
  }

  // ─── POST /api/admin/users (create) ───
  if (method === 'POST' && path === '/api/admin/users') {
    const user = getUser(req);
    if (!user) { deny(res); return true; }
    if (!hasRole(user, 'admin')) { denyRole(res, 'admin'); return true; }

    try {
      const { username, password, role, full_name, email, supervised_by } = await readBody(req);
      if (!username || !password) {
        jsonResponse(res, 400, { error: 'Username and password required' });
        return true;
      }
      if (!['tech', 'techp', 'admin'].includes(role)) {
        jsonResponse(res, 400, { error: 'Invalid role. Must be tech, techp, or admin' });
        return true;
      }
      if (!password) {
        jsonResponse(res, 400, { error: 'Password is required' });
        return true;
      }

      const existing = authDb.prepare('SELECT id FROM users WHERE username = ?').get(username.trim());
      if (existing) {
        jsonResponse(res, 409, { error: 'Username already exists' });
        return true;
      }

      if (supervised_by && role === 'tech') {
        const supervisor = authDb.prepare('SELECT id, role FROM users WHERE id = ?').get(supervised_by);
        if (!supervisor || supervisor.role !== 'techp') {
          jsonResponse(res, 400, { error: 'Supervisor must be a techp user' });
          return true;
        }
      }

      const hash = bcrypt.hashSync(password, SALT_ROUNDS);
      const result = authDb.prepare(`
        INSERT INTO users (username, password, role, full_name, email, supervised_by, created_by, must_change_pw)
        VALUES (?, ?, ?, ?, ?, ?, ?, 0)
      `).run(
        username.trim(), hash, role,
        full_name || '', email || '',
        (role === 'tech' && supervised_by) ? supervised_by : null,
        user.userId
      );

      console.log(`[Admin] User created: ${username} (${role}) by ${user.username}`);
      jsonResponse(res, 200, { ok: true, id: result.lastInsertRowid, message: `User '${username}' created as ${role}` });
    } catch (e) {
      jsonResponse(res, 500, { error: e.message });
    }
    return true;
  }

  // ─── PUT /api/admin/users/:id (update) ───
  const updateMatch = path.match(/^\/api\/admin\/users\/(\d+)$/);
  if (method === 'PUT' && updateMatch) {
    const user = getUser(req);
    if (!user) { deny(res); return true; }
    if (!hasRole(user, 'admin')) { denyRole(res, 'admin'); return true; }

    try {
      const targetId = parseInt(updateMatch[1]);
      const body = await readBody(req);
      const { role, full_name, email, active, supervised_by } = body;

      if (targetId === user.userId && active === false) {
        jsonResponse(res, 400, { error: 'Cannot deactivate your own account' });
        return true;
      }

      const updates = [];
      const params = [];

      if (role && ['tech', 'techp', 'admin'].includes(role)) { updates.push('role = ?'); params.push(role); }
      if (full_name !== undefined) { updates.push('full_name = ?'); params.push(full_name); }
      if (email !== undefined) { updates.push('email = ?'); params.push(email); }
      if (active !== undefined) { updates.push('active = ?'); params.push(active ? 1 : 0); }
      if (supervised_by !== undefined) { updates.push('supervised_by = ?'); params.push(supervised_by || null); }

      if (updates.length === 0) {
        jsonResponse(res, 400, { error: 'No fields to update' });
        return true;
      }

      params.push(targetId);
      authDb.prepare(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`).run(...params);

      // If deactivated, kill their tokens
      if (active === false) {
        for (const [t, v] of tokens) {
          if (v.userId === targetId) tokens.delete(t);
        }
      }

      console.log(`[Admin] User #${targetId} updated by ${user.username}`);
      jsonResponse(res, 200, { ok: true, message: 'User updated' });
    } catch (e) {
      jsonResponse(res, 500, { error: e.message });
    }
    return true;
  }

  // ─── POST /api/admin/users/:id/reset-password ───
  const resetMatch = path.match(/^\/api\/admin\/users\/(\d+)\/reset-password$/);
  if (method === 'POST' && resetMatch) {
    const user = getUser(req);
    if (!user) { deny(res); return true; }
    if (!hasRole(user, 'admin')) { denyRole(res, 'admin'); return true; }

    try {
      const { newPassword } = await readBody(req);
      if (!newPassword) {
        jsonResponse(res, 400, { error: 'New password is required' });
        return true;
      }
      const hash = bcrypt.hashSync(newPassword, SALT_ROUNDS);
      authDb.prepare('UPDATE users SET password = ?, must_change_pw = 1 WHERE id = ?').run(hash, parseInt(resetMatch[1]));
      console.log(`[Admin] Password reset for user #${resetMatch[1]} by ${user.username}`);
      jsonResponse(res, 200, { ok: true, message: 'Password reset' });
    } catch (e) {
      jsonResponse(res, 500, { error: e.message });
    }
    return true;
  }

  // ─── POST /api/admin/users/:id/assign-supervisor ───
  const supervisorMatch = path.match(/^\/api\/admin\/users\/(\d+)\/assign-supervisor$/);
  if (method === 'POST' && supervisorMatch) {
    const user = getUser(req);
    if (!user) { deny(res); return true; }
    if (!hasRole(user, 'admin')) { denyRole(res, 'admin'); return true; }

    try {
      const { supervisorId } = await readBody(req);
      const techId = parseInt(supervisorMatch[1]);

      const tech = authDb.prepare('SELECT id, role FROM users WHERE id = ?').get(techId);
      if (!tech || tech.role !== 'tech') {
        jsonResponse(res, 400, { error: 'Target must be a tech user' });
        return true;
      }

      if (supervisorId) {
        const supervisor = authDb.prepare('SELECT id, role FROM users WHERE id = ?').get(supervisorId);
        if (!supervisor || supervisor.role !== 'techp') {
          jsonResponse(res, 400, { error: 'Supervisor must be a techp user' });
          return true;
        }
      }

      authDb.prepare('UPDATE users SET supervised_by = ? WHERE id = ?').run(supervisorId || null, techId);
      console.log(`[Admin] Supervisor assignment: tech #${techId} → ${supervisorId || 'none'}`);
      jsonResponse(res, 200, { ok: true, message: 'Supervisor updated' });
    } catch (e) {
      jsonResponse(res, 500, { error: e.message });
    }
    return true;
  }

  // ─── GET /api/admin/login-log ───
  if (method === 'GET' && path === '/api/admin/login-log') {
    const user = getUser(req);
    if (!user) { deny(res); return true; }
    if (!hasRole(user, 'admin')) { denyRole(res, 'admin'); return true; }

    try {
      const limit = Math.min(parseInt(url.searchParams.get('limit')) || 50, 200);
      const logs = authDb.prepare(`
        SELECT l.*, u.full_name, u.role
        FROM login_log l
        LEFT JOIN users u ON l.user_id = u.id
        ORDER BY l.timestamp DESC
        LIMIT ?
      `).all(limit);
      jsonResponse(res, 200, logs);
    } catch (e) {
      jsonResponse(res, 500, { error: e.message });
    }
    return true;
  }

  // ─── GET /api/admin/query-usage ───
  if (method === 'GET' && path === '/api/admin/query-usage') {
    const user = getUser(req);
    if (!user) { deny(res); return true; }
    if (!hasRole(user, 'admin')) { denyRole(res, 'admin'); return true; }

    try {
      const days = Math.min(parseInt(url.searchParams.get('days')) || 7, 30);
      const stats = authDb.prepare(`
        SELECT q.user_id, u.username, u.role, q.date, q.count
        FROM query_usage q
        JOIN users u ON q.user_id = u.id
        WHERE q.date >= date('now', '-' || ? || ' days')
        ORDER BY q.date DESC, u.username
      `).all(days);
      jsonResponse(res, 200, stats);
    } catch (e) {
      jsonResponse(res, 500, { error: e.message });
    }
    return true;
  }

  // Not an auth route
  return false;
}

// ═══════════════════════════════════════════════
//  EXPORTS
// ═══════════════════════════════════════════════

module.exports = {
  init,
  handleAuthRoutes,
  getUser,
  hasRole,
  hasPermission,
  deny,
  denyRole,
  jsonResponse,
  getDataScope,
  scopeWhere,
  checkQueryLimit,
  getQueryUsage,
  PERMISSIONS,
  ROLE_LEVEL,
  TECH_DAILY_LIMIT,
  TECHP_DAILY_LIMIT,
  get db() { return authDb; }
};
