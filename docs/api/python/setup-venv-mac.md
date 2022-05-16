---
slug: api
title: How to setup a Virtual Environment on a Mac
authors:
  - name: Ramsey Gavin
    title: Software Engineer II
    url: https://github.com/rgavin1
    image_url: https://github.com/rgavin1.png
tags: [python, venv]
---

# How to setup a Virtual Environment on a Mac

### Step 1: Run the command to create venv 

```bash
python3 -m venv <name_of_environment>
```

:::tip Virual Environment naming convention
K.I.S.S - Use `venv`
:::

The directory `venv` should now appear in the main directory.

![](./assets/images/venv-dir.png)

### Step 2: Redirect the python interpreter from global venv to the local venv

![](./assets/images/global-env-to-venv.png)

### Step 3: Enable virtual environment

To do this, confirm the path of the activate file in the newly created venv. Next, in the terminal, type in the following command.

```bash
source venv/bin/activate
```

The terminal should now show the virtual environment.

```bash
(venv) ➜  exercises git:(main) ✗ 
```
