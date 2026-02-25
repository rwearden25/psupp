#!/usr/bin/env node
// P-Supp Pre-Deploy Validation
// Run: node predeploy.js  (or .\predeploy.bat)

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let pass = 0, fail = 0, warn = 0;
const ok   = (msg) => { console.log('    [OK] ' + msg); pass++; };
const bad  = (msg) => { console.log('    [FAIL] ' + msg); fail++; };
const hint = (msg) => { console.log('    [WARN] ' + msg); warn++; };

console.log('===============================================');
console.log('  P-Supp Pre-Deploy Validation');
console.log('  ' + new Date().toLocaleString());
console.log('===============================================\n');

// ─── 1. Required Files ───
console.log('[1/8] Checking required files...');
const required = [
  'server.js', 'auth.js', 'package.json', 'knowledge-base.js', 'diagnostics.json',
  'public/index.html', 'public/login.html', 'public/admin.html'
];
for (const f of required) {
  fs.existsSync(f) ? ok(f) : bad('MISSING: ' + f);
}
console.log();

// ─── 2. BOM Check ───
console.log('[2/8] Checking for BOM and encoding issues...');
for (const f of ['package.json', 'knowledge-base.js', 'auth.js']) {
  if (!fs.existsSync(f)) continue;
  const buf = fs.readFileSync(f);
  (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF)
    ? bad(f + ' has BOM') : ok(f + ' clean');
}
console.log();

// ─── 3. JSON Validation ───
console.log('[3/8] Validating JSON files...');
for (const f of ['package.json', 'diagnostics.json']) {
  if (!fs.existsSync(f)) continue;
  try {
    JSON.parse(fs.readFileSync(f, 'utf8'));
    ok(f + ' valid JSON');
  } catch (e) {
    bad(f + ': ' + e.message);
  }
}
console.log();

// ─── 4. JavaScript Syntax ───
console.log('[4/8] Checking JavaScript syntax...');
for (const f of ['server.js', 'auth.js', 'knowledge-base.js']) {
  if (!fs.existsSync(f)) continue;
  try {
    execSync('node -c "' + f + '"', { stdio: 'pipe' });
    ok(f + ' syntax OK');
  } catch (e) {
    bad(f + ' syntax error');
    console.log(e.stderr?.toString() || '');
  }
}

// Check inline scripts in HTML files
for (const f of ['public/index.html', 'public/login.html', 'public/admin.html']) {
  if (!fs.existsSync(f)) continue;
  const html = fs.readFileSync(f, 'utf8');
  const re = /<script[^>]*>([\s\S]*?)<\/script>/g;
  let m, i = 0, hasBad = false;
  while ((m = re.exec(html))) {
    i++;
    const code = m[1].trim();
    if (!code) continue;
    try {
      new Function(code);
    } catch (e) {
      bad(f + ' script block ' + i + ': ' + e.message);
      hasBad = true;
    }
  }
  if (!hasBad && i > 0) ok(f + ' (' + i + ' script blocks)');
}
console.log();

// ─── 5. Security Checks ───
console.log('[5/8] Running security checks...');
let secOk = true;
for (const f of ['public/index.html', 'public/login.html']) {
  if (!fs.existsSync(f)) continue;
  const c = fs.readFileSync(f, 'utf8');
  if (/sk-ant-/i.test(c)) { bad('API key found in ' + f); secOk = false; }
}
if (secOk) ok('No hardcoded credentials in client files');

if (fs.existsSync('server.js')) {
  const s = fs.readFileSync('server.js', 'utf8');
  (s.includes('auth.getUser') && s.includes('auth.deny'))
    ? ok('Auth gate present') : hint('Auth gate may be missing');
}
console.log();

// ─── 6. Server Smoke Test ───
console.log('[6/8] Server smoke test...');
let serverPid = null;
try {
  // Kill any existing server on port 3000
  try { execSync('npx kill-port 3000', { stdio: 'pipe', timeout: 5000 }); } catch(e) {}

  // Start server in background
  const { spawn } = require('child_process');
  const srv = spawn('node', ['server.js'], { detached: true, stdio: 'ignore' });
  serverPid = srv.pid;
  srv.unref();

  // Wait for startup
  execSync('node -e "setTimeout(()=>{},4000)"', { stdio: 'pipe' });

  // Test /api/health
  try {
    const health = execSync('curl -s http://127.0.0.1:3000/api/health', { stdio: 'pipe', timeout: 10000 }).toString();
    const hData = JSON.parse(health);
    ok('/api/health returns OK');
    if (hData.ai) ok('AI: ' + hData.ai);
    if (hData.docs !== undefined) ok('DB docs: ' + (hData.docs || 'n/a'));
    if (hData.users !== undefined) ok('Users: ' + hData.users);
  } catch (e) {
    bad('Server did not start or /api/health failed');
  }

  // Test / returns something
  try {
    const devnull = process.platform === 'win32' ? 'nul' : '/dev/null';
    const code = execSync(`curl -s -o ${devnull} -w "%{http_code}" http://127.0.0.1:3000/`, { stdio: 'pipe', timeout: 5000 }).toString().trim();
    if (code === '302') ok('/ redirects to login (auth working)');
    else if (code === '200') ok('/ serves index.html');
    else hint('/ returned ' + code);
  } catch (e) { hint('Could not test /'); }

  // Test auth gate
  try {
    const code = execSync(`curl -s -o ${devnull} -w "%{http_code}" http://127.0.0.1:3000/api/stats`, { stdio: 'pipe', timeout: 5000 }).toString().trim();
    code === '401' ? ok('Auth gate working (401 without token)') : hint('/api/stats returned ' + code + ' instead of 401');
  } catch (e) { hint('Could not test auth gate'); }

} catch (e) {
  bad('Smoke test error: ' + e.message);
} finally {
  // Kill server
  try {
    if (process.platform === 'win32') {
      execSync('for /f "tokens=5" %a in (\'netstat -ano ^| findstr :3000 ^| findstr LISTENING\') do taskkill /PID %a /F', { stdio: 'pipe', shell: 'cmd.exe' });
    } else {
      execSync('kill ' + serverPid, { stdio: 'pipe' });
    }
  } catch (e) {}
}
console.log();

// ─── 7. Knowledge Base ───
console.log('[7/8] Knowledge base integrity...');
if (fs.existsSync('knowledge.db')) {
  const size = fs.statSync('knowledge.db').size;
  ok('knowledge.db (' + (size / 1024 / 1024).toFixed(1) + ' MB)');
} else {
  hint('knowledge.db not found (KB will be empty)');
}
console.log();

// ─── 8. Git Status ───
console.log('[8/8] Git status...');
try {
  const changes = execSync('git diff --name-only', { stdio: 'pipe' }).toString().trim();
  if (changes) {
    const lines = changes.split('\n');
    hint(lines.length + ' uncommitted changes');
    console.log(changes);
  } else {
    ok('Working tree clean');
  }
  const untracked = execSync('git ls-files --others --exclude-standard', { stdio: 'pipe' }).toString().trim();
  if (untracked) {
    hint('Untracked files: ' + untracked.split('\n').length);
  }
} catch (e) {
  hint('Git not available');
}
console.log();

// ─── Results ───
console.log('===============================================');
console.log('  RESULTS');
console.log('-----------------------------------------------');
console.log('  Passed:   ' + pass);
console.log('  Failed:   ' + fail);
console.log('  Warnings: ' + warn);
console.log('-----------------------------------------------');
if (fail > 0) {
  console.log('  DO NOT DEPLOY - fix ' + fail + ' failure(s) first');
  process.exit(1);
} else {
  console.log('  ALL CHECKS PASSED - safe to deploy');
  console.log();
  console.log('  git add -A');
  console.log('  git commit -m "your message"');
  console.log('  git push origin main');
}
console.log('===============================================');
