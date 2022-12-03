#!/bin/bash
source ./config.sh
# example config
# #!/bin/bash
# owner="TeamAOF" # creator of the git repository.
# repo="skylore" # name of the git repository.
# branch="indev" # branch of the git repository. for examle main or master.

url="https://github.com/${owner}/${repo}.git"

# code
git config pull.rebase false
if [ -d .git ]
then
  git reset --hard
  git pull
  git switch "$branch"
  java -jar InstanceSync.jar
  cp -a offlineMods/. mods
else
  git clone "$url" modpack
  cp -a modpack/. .
  rm -r -f modpack
  git reset --hard
  git pull
  git checkout "$branch"
  java -jar InstanceSync.jar
  cp -a offlineMods/. mods
fi
if [ -f "server.lock" ]
then
  cp -a serverMods/. mods
  bash server.lock
fi