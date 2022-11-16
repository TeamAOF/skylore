#!/bin/bash
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
if [ -z $branch ]; then branch="main"; fi
if [ -z $repo ]; then branch="skylore"; fi
if [ -z $owner ]; then branch="TeamAOF"; fi


repoExists=$(git rev-parse --is-inside-work-tree > /dev/null 2>&1)
url="https://github.com/${owner}/${repo}.git"

# code

if [ "$repoExists" = "true" ]
then
    git switch "$branch"
    git pull
    java -jar InstanceSync.jar
else
    rm -R ./* > /dev/null 2>&1
    git clone "$url" .
    git switch "$branch"
    java -jar InstanceSync.jar
fi