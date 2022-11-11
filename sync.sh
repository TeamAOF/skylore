#!/bin/bash
# parameters and constants
POSITIONAL_ARGS=()
while [[ $# -gt 0 ]]; do
  case $1 in
    -b|-branch|--branch)
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
    echo true
    echo "\n\nNew version detected, updating!\n\n"
    sleep 0.5
    echo "\n\nDownloading modpack.\n\n"
    curl "https://github.com/TeamAOF/skylore/archive/refs/heads/${branch}.zip" --output ./skylore.zip
    echo "\n\nUnzipping modpack.\n\n"
    sleep 3
    unzip ./skylore.zip
    echo "\n\nCopying modpack.\n\n"
    sleep 3
    cp ./skylore/skylore-$branch/* .
    echo "\n\nDownloading mods, please wait.\n\n"
    sleep 3
    java -jar InstanceSync.jar

    jq ".lastUpdated |= ${pushed_at}" ./scriptData.json
    echo "\n\nDone!\n\n"
else
    echo false
    echo "\n\nUp to date!\n\n"
    sleep 1
fi
