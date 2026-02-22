// _predeploy_checks.js — called by predeploy.bat
// Usage: node _predeploy_checks.js <check_name>

var fs = require('fs');
var check = process.argv[2];

if (check === 'bom') {
  // Check for ANY non-ASCII bytes in first 3 bytes of specified files
  var files = ['package.json', 'knowledge-base.js'];
  var fail = 0;
  files.forEach(function(f) {
    if (!fs.existsSync(f)) return;
    var b = fs.readFileSync(f);
    // Standard UTF-8 BOM
    if (b[0] === 0xEF && b[1] === 0xBB && b[2] === 0xBF) {
      console.log('    [FAIL] UTF-8 BOM in ' + f);
      fail++;
      return;
    }
    // UTF-16 LE BOM
    if (b[0] === 0xFF && b[1] === 0xFE) {
      console.log('    [FAIL] UTF-16 LE BOM in ' + f);
      fail++;
      return;
    }
    // UTF-16 BE BOM
    if (b[0] === 0xFE && b[1] === 0xFF) {
      console.log('    [FAIL] UTF-16 BE BOM in ' + f);
      fail++;
      return;
    }
    // Check first byte specifically — JS files should start with ASCII
    // (letter, slash, semicolon, etc.) not a high byte
    if (b[0] > 127) {
      console.log('    [FAIL] Non-ASCII byte 0x' + b[0].toString(16).toUpperCase() + ' at position 0 in ' + f + ' (bad encoding)');
      fail++;
      return;
    }
    console.log('    [OK] ' + f + ' clean');
  });
  process.exit(fail > 0 ? 1 : 0);
}

if (check === 'inline-scripts') {
  var htmlFiles = ['index.html', 'admin.html'];
  var totalErr = 0;
  htmlFiles.forEach(function(f) {
    if (!fs.existsSync(f)) return;
    var h = fs.readFileSync(f, 'utf8');
    var re = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    var m, i = 0, err = 0;
    while (m = re.exec(h)) {
      i++;
      if (m[1].trim() && !m[0].includes('src=')) {
        try {
          new Function(m[1]);
        } catch(e) {
          console.log('    [FAIL] ' + f + ' script #' + i + ': ' + e.message.substring(0, 80));
          err++;
          totalErr++;
        }
      }
    }
    if (err === 0) console.log('    [OK] ' + f + ' - ' + i + ' inline scripts OK');
  });
  process.exit(totalErr > 0 ? 1 : 0);
}

if (check === 'security') {
  var issues = 0;
  var clientFiles = ['index.html', 'admin.html'];
  clientFiles.forEach(function(f) {
    if (!fs.existsSync(f)) return;
    var c = fs.readFileSync(f, 'utf8');
    // Hardcoded passwords
    if (/const\s+\w*[Pp]ass\w*\s*=\s*['"]/.test(c)) {
      console.log('    [FAIL] ' + f + ': Hardcoded credential found');
      issues++;
    }
    // Exposed API keys
    if (/sk-ant-[a-zA-Z0-9]{20,}/.test(c)) {
      console.log('    [FAIL] ' + f + ': Anthropic API key exposed');
      issues++;
    }
  });
  // Also check knowledge-base.js for API keys
  if (fs.existsSync('knowledge-base.js')) {
    var kb = fs.readFileSync('knowledge-base.js', 'utf8');
    if (/sk-ant-[a-zA-Z0-9]{20,}/.test(kb)) {
      console.log('    [FAIL] knowledge-base.js: API key exposed');
      issues++;
    }
  }
  if (issues === 0) console.log('    [OK] No hardcoded credentials in client files');
  process.exit(issues > 0 ? 1 : 0);
}

if (check === 'auth-gates') {
  var c = fs.readFileSync('server.js', 'utf8');
  var routes = ['/api/admin', '/api/tips', '/api/kb-gaps', '/api/scraper'];
  var issues = 0;
  routes.forEach(function(r) {
    if (c.includes(r) && !c.includes('verifyAuth')) {
      console.log('    [WARN] ' + r + ' may lack auth gate');
      issues++;
    }
  });
  if (issues === 0) console.log('    [OK] Auth gates on protected endpoints');
  process.exit(0);
}

if (check === 'health') {
  fetch('http://localhost:3000/api/health')
    .then(function(r) { return r.json(); })
    .then(function(d) {
      if (d.status === 'ok') {
        console.log('    [OK] /api/health returns OK');
        console.log('    [OK] AI: ' + (d.ai || 'unknown'));
        console.log('    [OK] DB docs: ' + (d.docs || 'n/a'));
      } else {
        console.log('    [FAIL] Health check failed');
        process.exit(1);
      }
    })
    .catch(function(e) {
      console.log('    [FAIL] Server not responding: ' + e.message);
      process.exit(1);
    });
}

if (check === 'mainpage') {
  fetch('http://localhost:3000/')
    .then(function(r) {
      if (r.ok && r.headers.get('content-type').includes('html')) {
        console.log('    [OK] / serves index.html');
      } else {
        console.log('    [FAIL] / returned ' + r.status);
        process.exit(1);
      }
    })
    .catch(function(e) {
      console.log('    [FAIL] Main page: ' + e.message);
      process.exit(1);
    });
}

if (check === 'kb-size') {
  var s = fs.statSync('knowledge-base.js');
  console.log('    Size: ' + (s.size / 1024).toFixed(1) + ' KB');
  if (s.size < 100) {
    console.log('    [FAIL] suspiciously small');
    process.exit(1);
  } else {
    console.log('    [OK] File size OK');
  }
}

if (check === 'db-size') {
  if (!fs.existsSync('knowledge.db')) {
    console.log('    [WARN] knowledge.db not found - OK if using JS-only KB');
    process.exit(2);
  }
  var s = fs.statSync('knowledge.db');
  console.log('    DB: ' + (s.size / 1048576).toFixed(1) + ' MB');
  if (s.size < 1000) {
    console.log('    [FAIL] suspiciously small');
    process.exit(1);
  } else {
    console.log('    [OK] knowledge.db OK');
  }
}
