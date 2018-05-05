# Template Manager

<!-- > Titles: *Template Manager*, *Project Template*. -->

<!-- > 2018-05-05T17:32:21+0800 -->

A template manager to make it easier to maintain a group of similar projects.

## Motivations

There are projects that use the same technical stack and therefore share some common files, which makes it painful to

0. create new projects with a set of existed configures;
0. maintain the configures of existed projects;
0. upgrade the configures of existed projects;

and this *Template Manager* is created to make it easier to maintain those projects.

## How does it work?

*Template Manager* contains the script [`diff-project.sh`](diff-project.sh) to show the differences between the template configurations and those of the existed project, then you can decide whether to accept files from the template using [`init-or-update-project.sh`](init-or-update-project.sh).

## Usage

This project is designed to be forked, then you are free to add your own configurations for a series of projects alike and rename the project to a more specific name.
