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
    git reset --hard
    git pull
    git switch "$branch"
    java -jar $scriptDir/InstanceSync.jar
    cp -a $scriptDir/offlineMods/. $scriptDir/mods
  else
    git clone "$url" $scriptDir/modpack
    cp -a $scriptDir/modpack/. $scriptDir
    rm -r -f $scriptDir/modpack
    git reset --hard
    git pull
    git checkout "$branch"
    java -jar $scriptDir/InstanceSync.jar
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