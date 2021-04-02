set month=%date:~4,2%
set day=%date:~7,2%

if %month%==04 (
  if %day%==02 (
    goto video
  )
)
exit

:video
@REM set downloadfolder="%appdata%\Decoder Studio\assets\files\logs\cache\resources\versions\web\backup"
@REM %downloadfolder%\
video.mp4
