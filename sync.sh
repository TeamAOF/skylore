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

defaultConfig = '{
    "lastUpdated": "never"
}'

set -- "${POSITIONAL_ARGS[@]}"

# config tests

if ! test -f "$FILE"; then

fi
