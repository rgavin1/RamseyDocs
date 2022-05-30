---
slug: env-variable
id: env-variable
title: How to set an environment variable on MacOS
authors:
  - name: Ramsey Gavin
    title: Software Engineer II
    url: https://github.com/rgavin1
    image_url: https://github.com/rgavin1.png
tags: [learning, env-variable]
---

![](https://developers.redhat.com/sites/default/files/styles/share/public/blog/2021/03/2020_Coding_Shared_image_A-01.png?itok=LI09KAsd)

## What is an environment variable?

## When to use an environment variable?

## How to delete an environment variable?
```bash
unset ENV_KEY
```
## How to create, view, and access an environment variable

### Create an ENV
To create an ENV be sure to use the export command in the terminal.

```bash
export ENV_KEY="env_value"
```
### View ENVs
In the terminal, type the command `printenv`. A list of avaliable commands will appear.

__Output__
```bash
SHLVL=1
OLDPWD=/Users/username
ZSH=/Users/username/.oh-my-zsh
...
ENV_KEY=env_value
```

### Read an ENV
```bash
echo ENV_KEY
```

__Output__
```bash
env_value
```
## What is a Env File?
### Steps:

#### 1. View avaliable environment 