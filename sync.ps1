# params and constants
param (
    $branch = "main",
    $repo = "skylore",
    $owner = "TeamAOF"
)
$defaultConfig = ConvertFrom-Json -InputObject '{
    "lastUpdated": "never"
}'


# config tests
if (!(Test-Path -Path ./scriptData.json -PathType Leaf)) {
    ConvertTo-Json -InputObject $defaultConfig -depth 5 | Out-File "./scriptData.json"
}
$data = Get-Content -raw ./scriptData.json | ConvertFrom-Json

# code
$res = Invoke-RestMethod -Uri https://api.github.com/repos/TeamAOF/skylore

# for some reason if they match it outputs false, its so ass backwards
if (Compare-Object $res.pushed_at $data.lastUpdated) {
    "`n`nNew version detected, updating!`n`n"
    Start-Sleep 0.5
    "`n`nDownloading modpack.`n`n"
    $uri = "https://github.com/" + $owner + "/" + $repo + "/archive/refs/heads/" + $branch + ".zip"
    Invoke-WebRequest -Uri $uri -OutFile "./modpack.zip" 
    "`n`nUnzipping modpack.`n`n"
    Start-Sleep 3
    Expand-Archive modpack.zip
    Remove-Item -Force "./modpack.zip"

    "`n`nCopying modpack.`n`n"
    Start-Sleep 3
    xcopy /s /y modpack\$repo-$branch\*.* .
    Remove-Item -Force -Recurse modpack

    "`n`nDownloading mods, please wait.`n`n"
    Start-Sleep 1
    java -jar InstanceSync.jar

    $data.lastUpdated = $res.pushed_at
    $data | ConvertTo-Json -depth 5 | Out-File "./scriptData.json"
    "`n`nDone!`n`n"
}
else {
    "`n`nUp to date!`n`n"
    Start-Sleep 1
}
