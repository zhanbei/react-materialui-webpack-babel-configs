#!/usr/bin/env bash
#
# Copyright 2018. All rights reserved.
#
# One-way diff files from the `template` folder to those in the parent folder.
#
# - Output the names of files in the `template` folder that are different from those in the parent folder.
# - Output the names of new files in the `template` folder comparing to the parent folder.
# - New files in the parent folder are ignored.
#

cd "${BASH_SOURCE%/*}";

# @see https://stackoverflow.com/questions/16787916/difference-between-two-directories-in-linux
diff -qr ./template .. | grep './template'

# Show the differences of package.json
node ./diff-package.js
