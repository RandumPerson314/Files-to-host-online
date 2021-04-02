@echo off
set month=%date:~4,2%
set day=%date:~7,2%

if %month%==04 (
  if %day%==02 (
    goto secondcheck
  )
)
exit

:secondcheck
set second="%time:~6,2%"

if %second%=="00" goto minutecheck

timeout /t 1 /nobreak > nul
goto secondcheck

:minutecheck
set minute=%time:~3,2% 
set /a tenminute=%minute% %% 10
echo %tenminute%

if %tenminute%==0 goto timecheck

timeout /t 60 /nobreak > nul
goto minutecheck

:timecheck
set minute=%time:~3,2%
set hour=%time:~0,2%
set thetime="%hour%%minute%"

if %thetime%=="1930" goto video

timeout /t 600 /nobreak > nul
goto timecheck

:video
set downloadfolder="%appdata%\Decoder Studio\assets\files\logs\cache\resources\versions\web\backup"
%downloadfolder%\video.mp4
