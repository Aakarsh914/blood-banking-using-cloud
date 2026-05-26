@echo off
title Blood Bank Next.js - Local Dev Server
color 0B

echo ===============================================
echo   BLOOD BANK CLOUD - Starting Next.js App
echo ===============================================
echo.

echo Starting Next.js Dev Server (Port 3000)...
start "Blood Bank Next.js" cmd /k "cd /d "%~dp0blood-bank-nextjs" && npm run dev"

timeout /t 5 /nobreak >nul

echo.
echo ===============================================
echo   Next.js app is starting up!
echo   Local URL: http://localhost:3000
echo ===============================================
echo.
echo Opening app in browser...
start "" "http://localhost:3000"

echo.
echo Press any key to close this window...
pause >nul
