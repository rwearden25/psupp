@echo off
echo ==========================================
echo   P-SUPP PRE-DEPLOY CHECK
echo ==========================================
echo.

set FAIL=0

:: 1. Check required files exist
echo [1/6] Checking required files...
for %%f in (index.html server.js package.json knowledge.db knowledge-base.js diagnostics.json manifest.json sw.js icon-192x192.png icon-512x512.png) do (
    if not exist %%f (
        echo   FAIL: %%f is missing
        set FAIL=1
    ) else (
        echo   OK: %%f
    )
)
echo.

:: 2. Syntax check index.html scripts
echo [2/6] Checking JavaScript syntax in index.html...
node -e "const fs=require('fs');const html=fs.readFileSync('index.html','utf8');const re=/<script>([\\s\\S]*?)<\/script>/g;let m,i=0,ok=true;while(m=re.exec(html)){i++;try{new Function(m[1]);console.log('  OK: script block '+i)}catch(e){console.log('  FAIL: script block '+i+' -> '+e.message);ok=false}}if(!ok){process.exit(1)}"
if %ERRORLEVEL% neq 0 (
    echo   ^^^ SYNTAX ERROR FOUND - DO NOT DEPLOY
    set FAIL=1
)
echo.

:: 3. Syntax check server.js
echo [3/6] Checking server.js syntax...
node -c server.js
if %ERRORLEVEL% neq 0 (
    echo   FAIL: server.js has syntax errors
    set FAIL=1
) else (
    echo   OK: server.js
)
echo.

:: 4. Validate JSON files
echo [4/6] Checking JSON files...
node -e "try{JSON.parse(require('fs').readFileSync('package.json','utf8'));console.log('  OK: package.json')}catch(e){console.log('  FAIL: package.json -> '+e.message);process.exit(1)}"
if %ERRORLEVEL% neq 0 set FAIL=1
node -e "try{JSON.parse(require('fs').readFileSync('diagnostics.json','utf8'));console.log('  OK: diagnostics.json')}catch(e){console.log('  FAIL: diagnostics.json -> '+e.message);process.exit(1)}"
if %ERRORLEVEL% neq 0 set FAIL=1
node -e "try{JSON.parse(require('fs').readFileSync('manifest.json','utf8'));console.log('  OK: manifest.json')}catch(e){console.log('  FAIL: manifest.json -> '+e.message);process.exit(1)}"
if %ERRORLEVEL% neq 0 set FAIL=1
echo.

:: 5. Check for common mistakes
echo [5/6] Checking for common mistakes...
node -e "const s=require('fs').readFileSync('server.js','utf8');let ok=true;if(s.includes('sk-ant-')){console.log('  FAIL: API key hardcoded in server.js');ok=false}if(!s.includes('checkAuth')){console.log('  WARN: No auth check found in server.js')}if(ok)console.log('  OK: no hardcoded secrets in server.js');process.exit(ok?0:1)"
if %ERRORLEVEL% neq 0 set FAIL=1
node -e "const h=require('fs').readFileSync('index.html','utf8');let ok=true;if(h.includes('TEAM_PASSWORD')){console.log('  FAIL: hardcoded password in index.html');ok=false}if(h.includes('sk-ant-')){console.log('  FAIL: API key in index.html');ok=false}if(ok)console.log('  OK: no secrets in client code');process.exit(ok?0:1)"
if %ERRORLEVEL% neq 0 set FAIL=1
node -e "const s=require('fs').readFileSync('sw.js','utf8');const m=s.match(/psupp-v(\d+)/);if(m)console.log('  INFO: Service worker cache version: v'+m[1]);else console.log('  WARN: No cache version found in sw.js')"
echo.

:: 6. Start server and test health endpoint
echo [6/6] Starting server for smoke test...
start /b node server.js > nul 2>&1
timeout /t 3 /nobreak > nul
curl -s http://127.0.0.1:3000/api/health > nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo   FAIL: /api/health did not respond
    set FAIL=1
) else (
    echo   OK: server started and /api/health responded
)

:: Test that auth gate works (should get 401 without token)
curl -s -o nul -w "%%{http_code}" http://127.0.0.1:3000/api/analytics > %TEMP%\psupp_auth_check.txt 2>&1
set /p AUTH_CODE=<%TEMP%\psupp_auth_check.txt
if "%AUTH_CODE%"=="401" (
    echo   OK: auth gate working - unauthed request blocked
) else (
    echo   WARN: /api/analytics returned %AUTH_CODE% instead of 401
)

:: Kill the test server
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do taskkill /PID %%a /F > nul 2>&1
echo.

:: Final verdict
echo ==========================================
if %FAIL% equ 1 (
    echo   RESULT: FAILED - FIX ISSUES BEFORE DEPLOY
    echo ==========================================
    exit /b 1
) else (
    echo   RESULT: ALL CHECKS PASSED
    echo.
    echo   Safe to deploy:
    echo     git add -A
    echo     git commit -m "your message"
    echo     git push
    echo ==========================================
)
