#!/bin/bash
# functions

# params and constants
while [ $# -gt 0 ]; do
  case "$1" in
    --branch*|-branch*|-b*)
      if [[ "$1" != *=* ]]; then shift; fi # Value is next arg if no `=`
      branch="${1#*=}"
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
if [ -z "$branch" ]; then branch="indev"; fi
if [ -z "$repo" ]; then repo="skylore"; fi
if [ -z "$owner" ]; then owner="TeamAOF"; fi


repoExists=$(git rev-parse --is-inside-work-tree)
url="https://github.com/${owner}/${repo}.git"

# code
git config pull.rebase false
if [ "$repoExists" ]
then
  git switch "$branch"
  git pull
  java -jar InstanceSync.jar
else
  git clone "$url" modpack
  cp -a modpack/. .
  rm -r -f modpack
  rm sync.sh
  git checkout "$branch"
  java -jar InstanceSync.jar
fi