# params and constants
. $PSSCriptRoot\config.ps1
# example config 

# # used for setting the rigth url to download from.
# $owner = "TeamAOF" # creator of the git repository.
# $repo = "skylore" # name of the git repository.
# $branch = "indev" # branch of the git repository. for examle main or master.
# $githubSync = $true # a way to disable the script without deleting it

# code
# If set to not sync then exit program
if ($githubSync) {
    $url = "https://github.com/" + $owner + "/" + $repo + ".git"

    if (Test-Path -Path $PSSCriptRoot\.git) {
        git stash create
        git pull
        git switch $branch
        git stash drop
        java -jar $PSSCriptRoot\InstanceSync.jar
        Copy-Item $PSSCriptRoot\offlineMods\* $PSSCriptRoot\mods
        Copy-Item $PSSCriptRoot\localMods\* $PSSCriptRoot\mods
    }
    else {
        git clone $url $PSSCriptRoot\modpack
        Move-Item $PSSCriptRoot\modpack\* $PSSCriptRoot
        Move-Item $PSSCriptRoot\modpack\.git $PSSCriptRoot
        Remove-Item $PSSCriptRoot\modpack -Recurse
        git stash create
        git pull
        git switch $branch
        git stash drop
        java -jar $PSSCriptRoot\InstanceSync.jar
        Copy-Item $PSSCriptRoot\localMods\* $PSSCriptRoot\mods
        Copy-Item $PSSCriptRoot\offlineMods\* $PSSCriptRoot\mods
    }
}

if (Test-Path -Path $PSSCriptRoot\server.lock) {
    if ($githubSync) {
        Copy-Item $PSSCriptRoot\serverMods\* $PSSCriptRoot\mods
    }
    . $PSSCriptRoot\server.lock
}