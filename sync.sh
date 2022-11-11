#!/bin/bash
# parameters and constants
POSITIONAL_ARGS=()
while [[ $# -gt 0 ]]; do
  case $1 in
    -b|-branch)
      branch="$2"
      shift # past argument
      shift # past value
      ;;
  esac
done
set -- "${POSITIONAL_ARGS[@]}"

defaultConfig='{
    "lastUpdated": "never"
}'

# config tests

if ! test -f "./scriptData.json"; then
    echo $defaultConfig > ./scriptData.json
fi
lastUpdated=`jq '.lastUpdated' ./scriptData.json`

# code
pushed_at=`curl https://api.github.com/repos/TeamAOF/skylore | jq '.pushed_at'`

if [ "$lastUpdated" == "$pushed_at" ]; then
    echo "Up to date!"
    sleep 1
else
    echo "New version detected, updating!"
    sleep 0.5
    echo "Downloading modpack."
    wget -O ./skylore.zip "https://github.com/TeamAOF/skylore/archive/refs/heads/${branch}.zip"
    echo "Unzipping modpack."
    sleep 3
    unzip ./skylore.zip
    echo "Copying modpack."
    sleep 3
    cp ./skylore/skylore-$branch/* .
    echo "Downloading mods, please wait."
    sleep 3
    java -jar InstanceSync.jar

    jq ".lastUpdated |= ${pushed_at}" ./scriptData.json
    echo "Done!"
fi
