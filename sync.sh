#!/bin/bash
source ./config.sh
# example config
# #!/bin/bash
# owner="TeamAOF" # creator of the git repository.
# repo="skylore" # name of the git repository.
# branch="indev" # branch of the git repository. for examle main or master.
# githubSync="true" # a way to disable the script without deleting it

# code
if $githubSync
then
  url="https://github.com/${owner}/${repo}.git"
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
fi

if [ -f "server.lock" ]
then
  if $githubSync
  then
    cp -a serverMods/. mods
  fi
  bash server.lock
fi