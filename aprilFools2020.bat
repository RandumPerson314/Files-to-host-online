@echo off
goto testday
:pre
::play soviet anthem
powershell -c (New-Object Media.SoundPlayer "%USERPROFILE%\Pictures\admin\TDSB\admin-photos\folder\content\main\sub\special\library\files\sovietanthem.wav").PlaySync();

::set the wallpaper
REM reg add "HKEY_CURRENT_USER\Control Panel\Desktop" /v Wallpaper /t REG_SZ /d %USERPROFILE%\Downloads\grumpycatbg.bmp /f

::make the shortcut
set SCRIPT="%TEMP%\%RANDOM%-%RANDOM%-%RANDOM%-%RANDOM%.vbs"

echo Set oWS = WScript.CreateObject("WScript.Shell") >> %SCRIPT%
echo sLinkFile = "%USERPROFILE%\Desktop\Google Chrome.lnk" >> %SCRIPT%
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> %SCRIPT%
echo oLink.TargetPath = "C:\Program Files\Internet Explorer\iexplorer.exe" >> %SCRIPT%
echo oLink.WindowStyle = 7  &&Minimized 0=Maximized  4=Normal >> %SCRIPT%
echo oLink.IconLocation = "%USERPROFILE%\Pictures\admin\TDSB\admin-photos\folder\content\main\sub\special\library\files\chrome-logo.ico" >> %SCRIPT%
echo oLink.Save >> %SCRIPT%

cscript /nologo %SCRIPT%
del %SCRIPT%

::run clippy
clippy.exe 1

pause
exit

:testday
for /f "tokens=1-4 delims=/-. " %%i in ('date /t') do (call :set_date %%i %%j %%k %%l)
goto :end_set_date

:set_date
if "%1:~0,1%" gtr "9" shift
for /f "skip=1 tokens=2-4 delims=(-)" %%m in ('echo,^|date') do (set %%m=%1&set %%n=%2&set %%o=%3)
goto :eof

:end_set_date
::: End set date
if %mm% == 04 if %dd% == 01 goto main