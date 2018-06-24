# React, MaterialUi, WebPack, and Babel Configurations

<!-- > Titles: *React, MaterialUi, WebPack, and Babel Configurations*, *React App Configurations*. -->

<!-- > 2018-05-04T01:10:32+0800 -->

All the files here in the `template` folder should be synchronized to all React app projects.

Files in the `package` folder, like `devDependencies.json` and `scripts.json`, are the components templates of the `package.json` file, and projects can have their own different ones.

## Installation and Usage

```bash
# Clone the repository as a git submodule into .configs folder.
git submodule add https://github.com/zhanbei/react-materialui-webpack-babel-configs.git .configs

# Commit your
git add .configs .gitmodules
git commit -m "Added templates/configs as git submodule into .configs folder."

# Run `diff-project.sh` script in the `.configs` folder
# to state differences between the templates and your project.
./.configs/diff-project.sh

# Run script to initialize an empty project or update the current project.
# New files will be created or existed files may be updated with your confirmation.
./.configs/init-or-update-project.sh

# Add the files created or changed to git repository of your project.
git status
...

# Run script to check potential differences of `package.json#scripts`.
./.configs/diff-project.sh

# Run script to install node modules required.
./npm-install-newest-modules.sh

# Run script to check potential differences of `package.json#devDpendencies`.
./.configs/diff-project.sh
```
