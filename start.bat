del skylore-main.zip

rmdir /s /q skylore-main

curl -LJO https://github.com/TeamAOF/skylore/archive/refs/heads/main.zip 

powershell Expand-Archive skylore-main.zip

xcopy /s /y skylore-main\skylore-main\*.* .

java -jar InstanceSync.jar