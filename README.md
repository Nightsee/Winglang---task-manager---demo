
# Task manager app using Winglang - Demo


This is a simple demo app, where you can add by writting the task and clicking on save, or delete the task by clicking on it.

![Capture](https://github.com/Nightsee/Winglang---task-manager---demo/assets/88140911/93673c17-5d12-4d3d-bb62-8065b2902483)


## Ressources

- Api
- Website
- Counter
- @winglibs/dynamodb



## Install winglang

First make sure you have Nodejs installed, if not you can download and install the version corresponding to your operating system

```
https://nodejs.org/en/download/package-manager
```

Install winglang globaly

```bash
  npm install -g winglang@latest
```

Install docker on your machine
```
https://docs.docker.com/engine/install/
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Nightsee/Winglang---task-manager---demo.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Make sure that the docker engine is running then you can deploy localy

```bash
  wing it
```

Update the PORT constant in the ``index.js`` file to match the port of running API.
Then, either open the ``index.html`` file in the browser, or open it using the local URL provided in the wing console. 

