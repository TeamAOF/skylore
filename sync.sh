#!/bin/bash
# parameters and constants
while [ $# -gt 0 ]; do
  case "$1" in
    --branch*|-branch*|-b*)
      if [[ "$1" != *=* ]]; then shift; fi # Value is next arg if no `=`
      branch="${1#*=}"
      ;;
    *)
      >&2 printf "Error: Invalid argument\n"
      exit 1
      ;;
    --repo*|-repo*|-r*)
      if [[ "$1" != *=* ]]; then shift; fi # Value is next arg if no `=`
      repo="${1#*=}"
      ;;
    --owner*|-owner*|-o*)
      if [[ "$1" != *=* ]]; then shift; fi # Value is next arg if no `=`
      owner="${1#*=}"
      ;;
    *)
      >&2 printf "Error: Invalid argument\n"
      exit 1
      ;;
  esac
  shift
done
# defaults
if [ -z $branch ]; then branch="main"; fi
if [ -z $repo ]; then branch="skylore"; fi
if [ -z $owner ]; then branch="TeamAOF"; fi




echo $branch
defaultConfig='{
    "lastUpdated": "never"
}'

# config tests
if ! [ -f "./scriptData.json" ]
then
    echo $defaultConfig > ./scriptData.json
fi
lastUpdated=`jq '.lastUpdated' ./scriptData.json`

# code
pushed_at=`curl https://api.github.com/repos/TeamAOF/skylore | jq '.pushed_at'`

if [ "$lastUpdated" == "$pushed_at" ]
then
    echo "Up to date!"
    sleep 1
else
    echo "New version detected, updating!"
    sleep 0.5
    echo "Downloading modpack."
    wget -q --show-progress -O ./modpack.zip "https://github.com/${owner}/${repo}/archive/refs/heads/${branch}.zip"
    echo "Unzipping modpack."
    sleep 3
    unzip -qq -o ./modpack.zip
    rm ./modpack.zip
    echo "Copying modpack."
    sleep 3
    cp -r ./$repo-$branch/* .
    rm -r ./$repo-$branch
    echo "Downloading mods, please wait."
    sleep 3
    java -jar InstanceSync.jar

    jq ".lastUpdated |= ${pushed_at}" ./scriptData.json
    echo "Done!"
fi
