# params and constants
param (
    [Parameter(Mandatory=$true)]
    $owner,
    [Parameter(Mandatory=$true)]
    $repo,
    [Parameter(Mandatory=$true)]
    $branch
)



$repoExists = git rev-parse --is-inside-work-tree
$url = "https://github.com/" + $owner + "/" + $repo + ".git"

# code

if ($repoExists) {
    git switch $branch
    git pull
    java -jar InstanceSync.jar
}
else {
Remove-Item ./*
git clone $url .
git switch $branch
java -jar InstanceSync.jar
}