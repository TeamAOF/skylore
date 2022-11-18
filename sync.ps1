# params and constants
. .\config.ps1
# example config 

# # used for setting the rigth url to download from.
# $owner = "TeamAOF" # creator of the git repository.
# $repo = "skylore" # name of the git repository.
# $branch = "indev" # branch of the git repository. for examle main or master.

$repoExists = git rev-parse --is-inside-work-tree
$url = "https://github.com/" + $owner + "/" + $repo + ".git"

# code
if ($repoExists) {
    Remove-Item config -Recurse
    git switch $branch
    git reset --hard
    git pull
    java -jar InstanceSync.jar
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
}
if (Test-Path -Path ./server.lock) {
    . .\server.lock
}