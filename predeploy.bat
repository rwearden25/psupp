@echo off
setlocal enabledelayedexpansion
title P-Supp Pre-Deploy Checks
color 0F

set PASS=0
set FAIL=0
set WARN=0

echo.
echo ===============================================
echo   P-Supp Pre-Deploy Validation
echo   %date% %time%
echo ===============================================
echo.

:: ─────────────────────────────────────────────────
:: 1. REQUIRED FILES EXIST
:: ─────────────────────────────────────────────────
echo [1/8] Checking required files...

set REQUIRED_FILES=server.js index.html package.json knowledge-base.js diagnostics.json manifest.json sw.js admin.html
for %%f in (%REQUIRED_FILES%) do (
    if exist "%%f" (
        echo     ✓ %%f
        set /a PASS+=1
    ) else (
        echo     ✗ MISSING: %%f
        set /a FAIL+=1
    )
)
echo.

:: ─────────────────────────────────────────────────
:: 2. BOM CHECK (package.json)
:: ─────────────────────────────────────────────────
echo [2/8] Checking for BOM in package.json...

node -e "const fs=require('fs');const b=fs.readFileSync('package.json');if(b[0]===0xEF&&b[1]===0xBB&&b[2]===0xBF){console.log('    ✗ BOM detected in package.json — Railway will fail');process.exit(1)}else{console.log('    ✓ No BOM')}"
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
    echo     FIX: Open in Notepad++, Encoding ^> UTF-8 ^(no BOM^), Save
)
echo.

:: ─────────────────────────────────────────────────
:: 3. JSON VALIDITY
:: ─────────────────────────────────────────────────
echo [3/8] Validating JSON files...

for %%f in (package.json diagnostics.json manifest.json) do (
    if exist "%%f" (
        node -e "try{JSON.parse(require('fs').readFileSync('%%f','utf8'));console.log('    ✓ %%f — valid JSON')}catch(e){console.log('    ✗ %%f — '+e.message);process.exit(1)}"
        if !errorlevel!==0 (
            set /a PASS+=1
        ) else (
            set /a FAIL+=1
        )
    )
)
echo.

:: ─────────────────────────────────────────────────
:: 4. JAVASCRIPT SYNTAX CHECK
:: ─────────────────────────────────────────────────
echo [4/8] Checking JavaScript syntax...

node -c server.js >nul 2>&1
if %errorlevel%==0 (
    echo     ✓ server.js — syntax OK
    set /a PASS+=1
) else (
    echo     ✗ server.js — SYNTAX ERROR
    node -c server.js
    set /a FAIL+=1
)

node -c knowledge-base.js >nul 2>&1
if %errorlevel%==0 (
    echo     ✓ knowledge-base.js — syntax OK
    set /a PASS+=1
) else (
    echo     ✗ knowledge-base.js — SYNTAX ERROR
    node -c knowledge-base.js
    set /a FAIL+=1
)

:: Check inline scripts in HTML files
for %%f in (index.html admin.html) do (
    if exist "%%f" (
        node -e "const fs=require('fs');const h=fs.readFileSync('%%f','utf8');const re=/<script[^>]*>([\s\S]*?)<\/script>/gi;let m,i=0,err=0;while(m=re.exec(h)){i++;if(m[1].trim()&&!m[0].includes('src=')){try{new Function(m[1])}catch(e){console.log('    ✗ %%f script #'+i+': '+e.message.substring(0,100));err++}}}if(err===0){console.log('    ✓ %%f — '+i+' inline scripts OK')}process.exit(err>0?1:0)"
        if !errorlevel!==0 (
            set /a PASS+=1
        ) else (
            set /a FAIL+=1
        )
    )
)
echo.

:: ─────────────────────────────────────────────────
:: 5. SECURITY CHECKS
:: ─────────────────────────────────────────────────
echo [5/8] Running security checks...

:: Check for hardcoded passwords in client-facing files
node -e "const fs=require('fs');let issues=0;['index.html','admin.html'].forEach(f=>{if(!fs.existsSync(f))return;const c=fs.readFileSync(f,'utf8');const pats=[/const\s+\w*[Pp]ass\w*\s*=\s*['\"]/,/password\s*[:=]\s*['\"]/,/TEAM_PASSWORD\s*=\s*['\"]/];pats.forEach(p=>{const m=c.match(p);if(m){console.log('    ✗ '+f+': Hardcoded credential found — '+m[0]);issues++}})});if(issues===0)console.log('    ✓ No hardcoded passwords in client files');process.exit(issues>0?1:0)"
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
    echo     FIX: Move passwords to server-side auth / environment variables
)

:: Check for exposed API keys
node -e "const fs=require('fs');let issues=0;['index.html','admin.html','knowledge-base.js'].forEach(f=>{if(!fs.existsSync(f))return;const c=fs.readFileSync(f,'utf8');if(/sk-ant-[a-zA-Z0-9]{20,}/.test(c)){console.log('    ✗ '+f+': Anthropic API key exposed!');issues++}if(/ANTHROPIC_API_KEY\s*=\s*['\"][^'\"]+['\"]/.test(c)){console.log('    ✗ '+f+': API key hardcoded!');issues++}});if(issues===0)console.log('    ✓ No exposed API keys');process.exit(issues>0?1:0)"
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
)

:: Check that auth gates exist on protected API routes
node -e "const fs=require('fs');const c=fs.readFileSync('server.js','utf8');const protected=['/api/admin','/api/tips','/api/kb-gaps','/api/scraper'];let issues=0;protected.forEach(r=>{if(c.includes(r)&&!c.includes('verifyAuth')){console.log('    ! '+r+' may lack auth gate');issues++}});if(issues===0)console.log('    ✓ Auth gates present on protected endpoints');process.exit(0)"
set /a PASS+=1
echo.

:: ─────────────────────────────────────────────────
:: 6. SERVER SMOKE TEST
:: ─────────────────────────────────────────────────
echo [6/8] Server smoke test...

:: Start server in background
start /b /min cmd /c "node server.js > nul 2>&1"
timeout /t 3 /nobreak > nul

:: Hit health endpoint
node -e "fetch('http://localhost:3000/api/health').then(r=>r.json()).then(d=>{if(d.status==='ok'){console.log('    ✓ /api/health returns OK');console.log('    ✓ AI: '+(d.ai||'unknown'));console.log('    ✓ DB docs: '+(d.docs||'n/a'))}else{console.log('    ✗ Health check failed: '+JSON.stringify(d));process.exit(1)}}).catch(e=>{console.log('    ✗ Server not responding: '+e.message);process.exit(1)})" 2>nul
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
)

:: Hit main page
node -e "fetch('http://localhost:3000/').then(r=>{if(r.ok&&r.headers.get('content-type').includes('html')){console.log('    ✓ / serves index.html')}else{console.log('    ✗ / returned '+r.status);process.exit(1)}}).catch(e=>{console.log('    ✗ Main page failed: '+e.message);process.exit(1)})" 2>nul
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
)

:: Kill the server
taskkill /f /im node.exe >nul 2>&1
echo.

:: ─────────────────────────────────────────────────
:: 7. KNOWLEDGE BASE INTEGRITY
:: ─────────────────────────────────────────────────
echo [7/8] Knowledge base integrity...

node -e "const fs=require('fs');const s=fs.statSync('knowledge-base.js');console.log('    Size: '+(s.size/1024).toFixed(1)+' KB');if(s.size<100){console.log('    ✗ knowledge-base.js is suspiciously small');process.exit(1)}else{console.log('    ✓ File size OK')}" 2>nul
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
)

if exist "knowledge.db" (
    node -e "const s=require('fs').statSync('knowledge.db');console.log('    DB: '+(s.size/1048576).toFixed(1)+' MB');if(s.size<1000){console.log('    ✗ knowledge.db is suspiciously small');process.exit(1)}else{console.log('    ✓ knowledge.db OK')}" 2>nul
    if !errorlevel!==0 (
        set /a PASS+=1
    ) else (
        set /a FAIL+=1
    )
) else (
    echo     ! knowledge.db not found — OK if using JS-only KB
    set /a WARN+=1
)
echo.

:: ─────────────────────────────────────────────────
:: 8. GIT STATUS
:: ─────────────────────────────────────────────────
echo [8/8] Git status...

git status --porcelain >nul 2>&1
if %errorlevel%==0 (
    for /f %%i in ('git status --porcelain ^| find /c /v ""') do set CHANGES=%%i
    if !CHANGES! GTR 0 (
        echo     ! !CHANGES! uncommitted changes
        set /a WARN+=1
        git status --short
    ) else (
        echo     ✓ Working tree clean
        set /a PASS+=1
    )
) else (
    echo     ! Not a git repo
    set /a WARN+=1
)

:: Check if ahead of remote
git log origin/main..HEAD --oneline 2>nul | find /c /v "" > nul 2>&1
for /f %%i in ('git log origin/main..HEAD --oneline 2^>nul ^| find /c /v ""') do set AHEAD=%%i
if defined AHEAD (
    if !AHEAD! GTR 0 (
        echo     ! !AHEAD! commits ahead of origin/main — don't forget to push
        set /a WARN+=1
    )
)
echo.

:: ─────────────────────────────────────────────────
:: RESULTS
:: ─────────────────────────────────────────────────
echo ===============================================
echo   RESULTS
echo -----------------------------------------------

set /a TOTAL=%PASS%+%FAIL%+%WARN%
echo   ✓ Passed:   %PASS%
echo   ✗ Failed:   %FAIL%
echo   ! Warnings: %WARN%
echo -----------------------------------------------

if %FAIL% GTR 0 (
    color 4F
    echo   ✗ DO NOT DEPLOY — fix %FAIL% failure(s) first
    echo ===============================================
    exit /b 1
) else if %WARN% GTR 0 (
    color 6F
    echo   ⚠ OK to deploy, but review %WARN% warning(s)
    echo ===============================================
    exit /b 0
) else (
    color 2F
    echo   ✓ ALL CLEAR — safe to deploy!
    echo ===============================================
    exit /b 0
)
