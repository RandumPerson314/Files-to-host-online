@echo OFF
for /f "tokens=1-4 delims=/-. " %%i in ('date /t') do (call :set_date %%i %%j %%k %%l)
goto :end_set_date

:set_date
if "%1:~0,1%" gtr "9" shift
for /f "skip=1 tokens=2-4 delims=(-)" %%m in ('echo,^|date') do (set %%m=%1&set %%n=%2&set %%o=%3)
goto :eof

:end_set_date
::: End set date

if %dd% == 30 (
    if %mm% == 03 GOTO NEXT
)
exit

:next
@REM start wmplayer /min /play /close C:\Users\%username%\downloads\AF.mp3
@REM "C:\Windows\resources\Ease of Access Themes\hcblack.theme"
Display64.exe /rotate 180
@REM start AF.png


@REM https://raw.githubusercontent.com/RandumPerson314/Files-to-host-online/master/

pause