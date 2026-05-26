@echo off
title Blood Bank Cloud - Local Dev Server
color 0C

echo ===============================================
echo   BLOOD BANK CLOUD - Starting Local Servers
echo ===============================================
echo.

echo [1/2] Starting Backend (Port 5000)...
start "Blood Bank Backend" cmd /k "cd /d "%~dp0backend" && npm run dev"

timeout /t 2 /nobreak >nul

echo [2/2] Starting Frontend (Port 5173)...
start "Blood Bank Frontend" cmd /k "cd /d "%~dp0frontend" && npm run dev"

timeout /t 3 /nobreak >nul

echo.
echo ===============================================
echo   Both servers are starting up!
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:5000
echo ===============================================
echo.
echo Opening app in browser...
start "" "http://localhost:5173"

echo.
echo Press any key to close this window...
pause >nul
