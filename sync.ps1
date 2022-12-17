# params and constants
. $PSSCriptRoot\config.ps1
# example config 

# # used for setting the rigth url to download from.
# $owner = "TeamAOF" # creator of the git repository.
# $repo = "skylore" # name of the git repository.
# $branch = "indev" # branch of the git repository. for examle main or master.
# $githubSync = "true" # a way to disable the script without deleting it

# code
# If set to not sync then exit program
if ($githubSync) {
    $url = "https://github.com/" + $owner + "/" + $repo + ".git"

    if (Test-Path -Path .git) {
        git reset --hard
        git pull
        git switch $branch
        java -jar InstanceSync.jar
        Copy-Item $PSSCriptRoot\offlineMods\* $PSSCriptRoot\mods
    }
    else {
        git clone $url modpack
        Move-Item modpack\* $PSSCriptRoot
        Move-Item modpack\.git $PSSCriptRoot
        Remove-Item modpack -Recurse
        git reset --hard
        git pull
        git switch $branch
        java -jar InstanceSync.jar
        Copy-Item $PSSCriptRoot\offlineMods\* $PSSCriptRoot\mods
    }
}

if (Test-Path -Path ./server.lock) {
    if ($githubSync) {
        Copy-Item $PSSCriptRoot\serverMods\* $PSSCriptRoot\mods
    }
    . $PSSCriptRoot\server.lock
}