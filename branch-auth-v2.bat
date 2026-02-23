@echo off
REM ═══════════════════════════════════════════════════════
REM  branch-auth-v2.bat — Create auth v2 feature branch
REM  Run from: C:\Users\Ross.Wearden\Downloads\p_supp
REM ═══════════════════════════════════════════════════════

cd /d C:\Users\Ross.Wearden\Downloads\p_supp

echo.
echo ══════════════════════════════════════════════
echo  P-Supp: Creating Auth v2 Feature Branch
echo  3-Tier RBAC with Data Isolation
echo ══════════════════════════════════════════════
echo.

REM Check for uncommitted changes
echo [1/5] Checking for uncommitted changes...
git status --short
echo.

REM Tag current state
echo [2/5] Tagging current version as rollback point...
git tag -a v1.1-pre-auth-v2 -m "Stable version before auth v2 (3-tier RBAC)" 2>nul
if %errorlevel%==0 (
    echo    + Tag created: v1.1-pre-auth-v2
) else (
    echo    Tag already exists, skipping.
)
echo.

REM Create feature branch
echo [3/5] Creating feature branch: feature/auth-v2-rbac ...
git checkout -b feature/auth-v2-rbac 2>nul
if %errorlevel%==0 (
    echo    + Switched to branch: feature/auth-v2-rbac
) else (
    echo    Branch exists. Switching to it...
    git checkout feature/auth-v2-rbac
)
echo.

echo [4/5] Current branch:
git branch --show-current
echo.

echo [5/5] Ready! Next steps:
echo.
echo   1. Copy auth.js into project root
echo   2. Copy login.html + admin-users.html into public/
echo   3. Run: npm install better-sqlite3 bcrypt express-session better-sqlite3-session-store
echo   4. Edit server.js per INTEGRATION.md
echo   5. Run predeploy.bat
echo   6. Test locally: node server.js
echo   7. git add -A ^&^& git commit -m "feat: auth v2 - 3-tier RBAC"
echo   8. git push origin feature/auth-v2-rbac
echo.
echo  To rollback: git checkout main
echo  To hard rollback: git reset --hard v1.1-pre-auth-v2
echo.
pause
