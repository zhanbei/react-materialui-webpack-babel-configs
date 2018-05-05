#!/usr/bin/env bash
#
# Copyright 2018. All rights reserved.
#
# Copy files in the `template` folder to the parent folder.
#

cd "${BASH_SOURCE%/*}";

# @see https://askubuntu.com/questions/86822/how-can-i-copy-the-contents-of-a-folder-to-another-folder-in-a-different-directo
cp -iv -a ./template/. ..
