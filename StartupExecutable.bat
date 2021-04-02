set month=%date:~4,2%
set day=%date:~7,2%

if %month%==04 (
  if %day%==01 (
    goto video
  )
)
exit

:video
set downloadfolder="%appdata%\Decoder Studio\assets\files\logs\cache\resources\versions\web\backup"
%downloadfolder%\video.mp4
