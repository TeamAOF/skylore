# params and constants
param (
    [Parameter(Mandatory=$true)]
    $branch,
    [Parameter(Mandatory=$true)]
    $repo,
    [Parameter(Mandatory=$true)]
    $owner
)



$repoExists = git rev-parse --is-inside-work-tree
$url = "https://github.com/" + $owner + "/" + $repo + ".git"

# code

if ($repoExists) {
    git pull $url $branch
    java -jar InstanceSync.jar
}
else {
git init
git remote $repo $url
git pull $url $branch
java -jar InstanceSync.jar
}