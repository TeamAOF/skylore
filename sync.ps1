$res = Invoke-RestMethod -Uri https://api.github.com/repos/TeamAOF/skylore

if(Test-Path -Path ../scriptData.json -PathType Leaf) {
}
else {
    New-Item "../scriptData.json"
    '{
        "lastUpdated": "never"
    }' | Out-File "../scriptData.json"
}
$data = Get-Content -raw ../scriptData.json | ConvertFrom-Json

# for some reason if they match it outputs false, its so ass backwards
if(Compare-Object $res.pushed_at $data.lastUpdated) {
    Write-Output "`n`nNew version detected, updating!`n`n"

    Invoke-WebRequest -Uri "https://github.com/TeamAOF/skylore/archive/refs/heads/main.zip " -OutFile "./skylore-main.zip" 
    Expand-Archive skylore-main.zip
    xcopy /s /y skylore-main\skylore-main\*.* .
    Remove-Item -Force -Recurse skylore-main
    Remove-Item -Force "./skylore-main.zip"
    java -jar InstanceSync.jar

    $data.lastUpdated = $res.pushed_at
    $data | ConvertTo-Json -depth 5 | Out-File "../scriptData.json"
}
else {
    Write-Output "`n`nUp to date!`n`n"
}



