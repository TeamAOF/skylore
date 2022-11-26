# params and constants
. .\config.ps1
# example config 

# # used for setting the rigth url to download from.
# $owner = "TeamAOF" # creator of the git repository.
# $repo = "skylore" # name of the git repository.
# $branch = "indev" # branch of the git repository. for examle main or master.

$url = "https://github.com/" + $owner + "/" + $repo + ".git"

# code
if (Test-Path -Path .git) {
    git reset --hard
    git pull
    git switch $branch
    java -jar InstanceSync.jar
    Copy-Item .\offlineMods\* .\mods
}
else {
    git clone $url modpack
    Move-Item modpack\* .
    Move-Item modpack\.git .
    Remove-Item modpack -Recurse
    git reset --hard
    git pull
    git switch $branch
    java -jar InstanceSync.jar
    Copy-Item .\offlineMods\* .\mods
}
if (Test-Path -Path ./server.lock) {
    Copy-Item .\serverMods\* .\mods
    . .\server.lock
}