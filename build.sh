#! /bin/sh

# Some quick details
# --out: Output directory
# --overwrite: Always build over the last release.
# --no-prune: Don't ignore shared dependencies - keep node modules that we need!

electron-packager . --out=build --overwrite --no-prune
