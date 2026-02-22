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

:: Check helper exists
if not exist "_predeploy_checks.js" (
    echo [FAIL] _predeploy_checks.js not found - place it next to predeploy.bat
    exit /b 1
)

:: -------------------------------------------------
:: 1. REQUIRED FILES EXIST
:: -------------------------------------------------
echo [1/8] Checking required files...

for %%f in (server.js index.html package.json knowledge-base.js diagnostics.json manifest.json sw.js admin.html) do (
    if exist "%%f" (
        echo     [OK] %%f
        set /a PASS+=1
    ) else (
        echo     [FAIL] MISSING: %%f
        set /a FAIL+=1
    )
)
echo.

:: -------------------------------------------------
:: 2. BOM / ENCODING CHECK
:: -------------------------------------------------
echo [2/8] Checking for BOM and encoding issues...

node _predeploy_checks.js bom
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
    echo     FIX: Open in Notepad++, Encoding ^> UTF-8 ^(no BOM^), Save
)
echo.

:: -------------------------------------------------
:: 3. JSON VALIDITY
:: -------------------------------------------------
echo [3/8] Validating JSON files...

for %%f in (package.json diagnostics.json manifest.json) do (
    if exist "%%f" (
        node -e "try{JSON.parse(require('fs').readFileSync('%%f','utf8'));console.log('    [OK] %%f valid JSON')}catch(e){console.log('    [FAIL] %%f '+e.message);process.exit(1)}"
        if !errorlevel!==0 (
            set /a PASS+=1
        ) else (
            set /a FAIL+=1
        )
    )
)
echo.

:: -------------------------------------------------
:: 4. JAVASCRIPT SYNTAX CHECK
:: -------------------------------------------------
echo [4/8] Checking JavaScript syntax...

node -c server.js >nul 2>&1
if %errorlevel%==0 (
    echo     [OK] server.js syntax OK
    set /a PASS+=1
) else (
    echo     [FAIL] server.js SYNTAX ERROR
    node -c server.js
    set /a FAIL+=1
)

node -c knowledge-base.js >nul 2>&1
if %errorlevel%==0 (
    echo     [OK] knowledge-base.js syntax OK
    set /a PASS+=1
) else (
    echo     [FAIL] knowledge-base.js SYNTAX ERROR
    node -c knowledge-base.js
    set /a FAIL+=1
)

:: Inline scripts in HTML
node _predeploy_checks.js inline-scripts
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
)
echo.

:: -------------------------------------------------
:: 5. SECURITY CHECKS
:: -------------------------------------------------
echo [5/8] Running security checks...

node _predeploy_checks.js security
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
    echo     FIX: Move passwords to server-side auth / environment variables
)

node _predeploy_checks.js auth-gates
set /a PASS+=1
echo.

:: -------------------------------------------------
:: 6. SERVER SMOKE TEST
:: -------------------------------------------------
echo [6/8] Server smoke test...

start /b /min cmd /c "node server.js > nul 2>&1"
timeout /t 3 /nobreak > nul

node _predeploy_checks.js health
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
)

node _predeploy_checks.js mainpage
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
)

taskkill /f /im node.exe >nul 2>&1
echo.

:: -------------------------------------------------
:: 7. KNOWLEDGE BASE INTEGRITY
:: -------------------------------------------------
echo [7/8] Knowledge base integrity...

node _predeploy_checks.js kb-size
if %errorlevel%==0 (
    set /a PASS+=1
) else (
    set /a FAIL+=1
)

node _predeploy_checks.js db-size
if %errorlevel%==0 (
    set /a PASS+=1
) else if %errorlevel%==2 (
    set /a WARN+=1
) else (
    set /a FAIL+=1
)
echo.

:: -------------------------------------------------
:: 8. GIT STATUS
:: -------------------------------------------------
echo [8/8] Git status...

git status --porcelain >nul 2>&1
if %errorlevel%==0 (
    for /f %%i in ('git status --porcelain ^| find /c /v ""') do set CHANGES=%%i
    if !CHANGES! GTR 0 (
        echo     [WARN] !CHANGES! uncommitted changes
        set /a WARN+=1
        git status --short
    ) else (
        echo     [OK] Working tree clean
        set /a PASS+=1
    )
) else (
    echo     [WARN] Not a git repo
    set /a WARN+=1
)

for /f %%i in ('git log origin/main..HEAD --oneline 2^>nul ^| find /c /v ""') do set AHEAD=%%i
if defined AHEAD (
    if !AHEAD! GTR 0 (
        echo     [WARN] !AHEAD! commits ahead of origin/main - push when ready
        set /a WARN+=1
    )
)
echo.

:: -------------------------------------------------
:: RESULTS
:: -------------------------------------------------
echo ===============================================
echo   RESULTS
echo -----------------------------------------------

echo   Passed:   %PASS%
echo   Failed:   %FAIL%
echo   Warnings: %WARN%
echo -----------------------------------------------

if %FAIL% GTR 0 (
    color 4F
    echo   DO NOT DEPLOY - fix %FAIL% failure^(s^) first
    echo ===============================================
    exit /b 1
) else if %WARN% GTR 0 (
    color 6F
    echo   OK to deploy, but review %WARN% warning^(s^)
    echo ===============================================
    exit /b 0
) else (
    color 2F
    echo   ALL CLEAR - safe to deploy!
    echo ===============================================
    exit /b 0
)
