# params and constants
param (
    $owner = "TeamAOF",
    $repo = "skylore",
    $branch = "indev"
)



$repoExists = git rev-parse --is-inside-work-tree
$url = "https://github.com/" + $owner + "/" + $repo + ".git"

# code

if ($repoExists) {
    git switch $branch
    git reset --hard
    git pull
    java -jar InstanceSync.jar
}
else {
Remove-Item ./*
git clone $url .
git switch $branch
java -jar InstanceSync.jar
}