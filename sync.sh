#!/bin/bash
source ./config.sh
# example config
# #!/bin/bash
# owner="TeamAOF" # creator of the git repository.
# repo="skylore" # name of the git repository.
# branch="indev" # branch of the git repository. for examle main or master.

repoExists=$(git rev-parse --is-inside-work-tree)
url="https://github.com/${owner}/${repo}.git"

# code
git config pull.rebase false
if [ "$repoExists" ]
then
  git reset --hard
  git switch "$branch"
  git pull
  java -jar InstanceSync.jar
else
  git clone "$url" modpack
  cp -a modpack/. .
  rm -r -f modpack
  git reset --hard
  git pull
  git checkout "$branch"
  java -jar InstanceSync.jar
fi
if [ -f "server.lock" ]
then
bash server.lock
fi