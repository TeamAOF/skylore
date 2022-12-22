#!/bin/bash
scriptDir=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")
source $scriptDir/config.sh
# example config
# #!/bin/bash
# owner="TeamAOF" # creator of the git repository.
# repo="skylore" # name of the git repository.
# branch="indev" # branch of the git repository. for examle main or master.
# githubSync=true # a way to disable the script without deleting it

# code
if $githubSync
then
  url="https://github.com/${owner}/${repo}.git"
  git config pull.rebase false

  if [ -d $scriptDir/.git ]
  then
    git stash create
    git pull
    git switch "$branch"
    git stash drop
    java -jar $scriptDir/InstanceSync.jar
    cp -a $scriptDir/offlineMods/. $scriptDir/mods
    cp -a $scriptDir/localMods/. $scriptDir/mods
  else
    git clone "$url" $scriptDir/modpack
    cp -a $scriptDir/modpack/. $scriptDir
    rm -r -f $scriptDir/modpack
    git stash create
    git pull
    git checkout "$branch"
    git stash drop
    java -jar $scriptDir/InstanceSync.jar
    cp -a $scriptDir/localMods/. $scriptDir/mods
    cp -a $scriptDir/offlineMods/. $scriptDir/mods
  fi
fi

if [ -f $scriptDir/server.lock ]
then
  if $githubSync
  then
    cp -a $scriptDir/serverMods/. $scriptDir/mods
  fi
  bash $scriptDir/server.lock
fi