@echo off
echo ================================================
echo  P-SUPP REORGANIZATION — DRY RUN
echo  Nothing will be moved. This just shows the plan.
echo ================================================
echo.

cd /d C:\Users\Ross.Wearden\Downloads\p_supp

echo FILES THAT WOULD MOVE:
echo.

echo --- TO db\ ---
if exist knowledge.db echo   knowledge.db
if exist knowledge.db-shm echo   knowledge.db-shm
if exist knowledge.db-wal echo   knowledge.db-wal
if exist userdata.db echo   userdata.db
if exist userdata.db-shm echo   userdata.db-shm
if exist userdata.db-wal echo   userdata.db-wal
echo.

echo --- TO scripts\ ---
if exist ingest_pdfs.py echo   ingest_pdfs.py
if exist ingest-alkota.js echo   ingest-alkota.js
if exist patch_build_kb.py echo   patch_build_kb.py
if exist fix_brands.py echo   fix_brands.py
if exist search_api.py echo   search_api.py
if exist show_unknown.py echo   show_unknown.py
if exist knowledge-base.js echo   knowledge-base.js
if exist predeploy.bat echo   predeploy.bat
echo.

echo --- TO data\ ---
if exist Alkota echo   Alkota\ folder -^> data\alkota\
if exist Gpump echo   Gpump\ folder -^> data\gpump\
if exist Installation_and_Service echo   Installation_and_Service\ -^> data\installation_and_service\
if exist Resource_Information echo   Resource_Information\ -^> data\resource_information\
if exist Technical_Data echo   Technical_Data\ -^> data\technical_data\
if exist files4 echo   files4\ -^> data\files4\
echo.

echo --- TO docs\ ---
if exist diagnostics.json echo   diagnostics.json
if exist psupp_prompt.txt echo   psupp_prompt.txt
if exist P-SUPP-PRODUCT-ROADMAP.md echo   P-SUPP-PRODUCT-ROADMAP.md
if exist TASK_LIST.pdf echo   TASK_LIST.pdf
if exist pippie-preview.html echo   pippie-preview.html
if exist server_admin_patch.js echo   server_admin_patch.js
if exist flowcharts echo   flowcharts\ folder -^> docs\flowcharts\
echo.

echo --- TO .archive\ ---
if exist "2018-Catalog-Online.zip" echo   2018-Catalog-Online.zip
if exist "47 Series Service Instructions.zip" echo   47 Series Service Instructions.zip
if exist "Alkota.zip" echo   Alkota.zip
if exist "files.zip" echo   files.zip
if exist "files4.zip" echo   files4.zip
if exist "Installation_and_Service.zip" echo   Installation_and_Service.zip
if exist "Resource_Information.zip" echo   Resource_Information.zip
if exist "Technical_Data.zip" echo   Technical_Data.zip
if exist "new_files.zip" echo   new_files.zip
if exist "updated_files.zip" echo   updated_files.zip
echo.

echo --- STAYING IN ROOT (app files) ---
if exist server.js echo   server.js
if exist index.html echo   index.html
if exist admin.html echo   admin.html
if exist package.json echo   package.json
if exist package-lock.json echo   package-lock.json
if exist manifest.json echo   manifest.json
if exist sw.js echo   sw.js
if exist Dockerfile echo   Dockerfile
if exist .gitignore echo   .gitignore
if exist README.md echo   README.md
if exist DEPLOY-GUIDE.md echo   DEPLOY-GUIDE.md
for %%f in (icon-*.png) do echo   %%f
echo.

echo --- NOT TOUCHED (consider separate repo) ---
if exist generator echo   generator\ folder (stays as-is)
if exist pump-agent echo   pump-agent\ folder (stays as-is)
echo.

echo --- .gitignore WOULD BECOME ---
echo   node_modules/
echo   db/
echo   .archive/
echo   data/
echo   *.db
echo   *.db-shm
echo   *.db-wal
echo   .env
echo   pump-agent/
echo   generator/
echo.

echo ================================================
echo  This was a DRY RUN. Nothing was changed.
echo  If this looks right, run reorganize.bat
echo ================================================
pause
