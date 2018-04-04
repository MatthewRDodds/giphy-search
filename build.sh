#! /bin/sh

# Some quick details
# --out: Output directory
# --icon: Icon file to use. Extension will be autocompleted based on platform.
# --overwrite: Always build over the last release.
# --no-prune: Don't ignore shared dependencies - keep node modules that we need!
# 

electron-packager . --out=build --icon=images/GiphySearch-1024 --overwrite --no-prune
