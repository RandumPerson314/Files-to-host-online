set month=%date:~4,2%
set day=%date:~7,2%

if %month%==04 (
  if %day%==01 (
    goto video
  )
)
exit

:video
set downloadfolder="%appdata%\Extra Data\bin\lib\assets\files\unused\script\32\64\mem\unzip\123\124\data"
%downloadfolder%\video.mp4
