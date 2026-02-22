@echo off
echo ================================================
echo  P-SUPP FOLDER REORGANIZATION
echo  This will move files into organized subfolders.
echo  Your app files stay in the root for Railway.
echo ================================================
echo.
pause

cd /d C:\Users\Ross.Wearden\Downloads\p_supp

:: ─── CREATE FOLDERS ───
echo Creating folders...
mkdir db 2>nul
mkdir scripts 2>nul
mkdir data 2>nul
mkdir data\alkota 2>nul
mkdir data\gpump 2>nul
mkdir data\installation_and_service 2>nul
mkdir data\resource_information 2>nul
mkdir data\technical_data 2>nul
mkdir data\files4 2>nul
mkdir docs 2>nul
mkdir docs\flowcharts 2>nul
mkdir .archive 2>nul

:: ─── MOVE DATABASES TO db/ ───
echo Moving databases...
if exist knowledge.db move knowledge.db db\knowledge.db
if exist knowledge.db-shm move knowledge.db-shm db\knowledge.db-shm
if exist knowledge.db-wal move knowledge.db-wal db\knowledge.db-wal
if exist userdata.db move userdata.db db\userdata.db
if exist userdata.db-shm move userdata.db-shm db\userdata.db-shm
if exist userdata.db-wal move userdata.db-wal db\userdata.db-wal

:: ─── MOVE SCRIPTS ───
echo Moving scripts...
if exist ingest_pdfs.py move ingest_pdfs.py scripts\ingest_pdfs.py
if exist ingest-alkota.js move ingest-alkota.js scripts\ingest-alkota.js
if exist patch_build_kb.py move patch_build_kb.py scripts\patch_build_kb.py
if exist fix_brands.py move fix_brands.py scripts\fix_brands.py
if exist search_api.py move search_api.py scripts\search_api.py
if exist show_unknown.py move show_unknown.py scripts\show_unknown.py
if exist knowledge-base.js move knowledge-base.js scripts\knowledge-base.js

:: ─── MOVE SOURCE DATA FOLDERS ───
echo Moving source data...
if exist Alkota\* (
    echo   Moving Alkota files...
    xcopy Alkota\* data\alkota\ /E /Y /Q >nul 2>nul
    rmdir /S /Q Alkota
)
if exist Gpump\* (
    echo   Moving Gpump files...
    xcopy Gpump\* data\gpump\ /E /Y /Q >nul 2>nul
    rmdir /S /Q Gpump
)
if exist Installation_and_Service\* (
    echo   Moving Installation_and_Service files...
    xcopy Installation_and_Service\* data\installation_and_service\ /E /Y /Q >nul 2>nul
    rmdir /S /Q Installation_and_Service
)
if exist Resource_Information\* (
    echo   Moving Resource_Information files...
    xcopy Resource_Information\* data\resource_information\ /E /Y /Q >nul 2>nul
    rmdir /S /Q Resource_Information
)
if exist Technical_Data\* (
    echo   Moving Technical_Data files...
    xcopy Technical_Data\* data\technical_data\ /E /Y /Q >nul 2>nul
    rmdir /S /Q Technical_Data
)
if exist files4\* (
    echo   Moving files4...
    xcopy files4\* data\files4\ /E /Y /Q >nul 2>nul
    rmdir /S /Q files4
)

:: ─── MOVE DOCS ───
echo Moving docs...
if exist diagnostics.json move diagnostics.json docs\diagnostics.json
if exist psupp_prompt.txt move psupp_prompt.txt docs\psupp_prompt.txt
if exist P-SUPP-PRODUCT-ROADMAP.md move P-SUPP-PRODUCT-ROADMAP.md docs\P-SUPP-PRODUCT-ROADMAP.md
if exist TASK_LIST.pdf move TASK_LIST.pdf docs\TASK_LIST.pdf
if exist pippie-preview.html move pippie-preview.html docs\pippie-preview.html
if exist server_admin_patch.js move server_admin_patch.js docs\server_admin_patch.js
if exist flowcharts\* (
    xcopy flowcharts\* docs\flowcharts\ /E /Y /Q >nul 2>nul
    rmdir /S /Q flowcharts
)

:: ─── MOVE ZIP ARCHIVES ───
echo Moving zip archives...
if exist "2018-Catalog-Online.zip" move "2018-Catalog-Online.zip" .archive\
if exist "47 Series Service Instructions.zip" move "47 Series Service Instructions.zip" .archive\
if exist "Alkota.zip" move "Alkota.zip" .archive\
if exist "files.zip" move "files.zip" .archive\
if exist "files4.zip" move "files4.zip" .archive\
if exist "Installation_and_Service.zip" move "Installation_and_Service.zip" .archive\
if exist "Resource_Information.zip" move "Resource_Information.zip" .archive\
if exist "Technical_Data.zip" move "Technical_Data.zip" .archive\
if exist "new_files.zip" move "new_files.zip" .archive\
if exist "updated_files.zip" move "updated_files.zip" .archive\

:: ─── MOVE MISC FILES ───
echo Moving misc...
if exist gitignore del gitignore
if exist predeploy.bat move predeploy.bat scripts\predeploy.bat

:: ─── UPDATE .gitignore ───
echo Updating .gitignore...
(
echo node_modules/
echo db/
echo .archive/
echo data/
echo *.db
echo *.db-shm
echo *.db-wal
echo .env
echo pump-agent/
echo generator/
) > .gitignore

:: ─── UPDATE server.js DB PATH ───
echo.
echo ================================================
echo  IMPORTANT: Update server.js DB_PATH manually!
echo  Change:  const DB_PATH = path.join(__dirname, 'knowledge.db');
echo  To:      const DB_PATH = path.join(__dirname, 'db', 'knowledge.db');
echo.
echo  Also change userdata.db path if similar.
echo ================================================
echo.

:: ─── SUMMARY ───
echo.
echo Done! New structure:
echo   db/          - databases
echo   scripts/     - python/node ingestion tools
echo   data/        - source PDFs and manuals
echo   docs/        - project docs, flowcharts
echo   .archive/    - zip files
echo   generator/   - (leave as-is, consider separate repo)
echo.
echo Root now has only app files for Railway.
echo.
echo NEXT STEPS:
echo   1. Update DB_PATH in server.js (see above)
echo   2. Test locally: node server.js
echo   3. git add . ^&^& git commit -m "Reorganize folder structure" ^&^& git push
echo.
pause
