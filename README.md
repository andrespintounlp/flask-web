# flask-web

## Installation guide

### Install Python

First, check if you have already installed Python running the following command:

`python`

or

`python3`

I strongly recommend python 3 over python 2, since its more updated version.

If you don't have python installed:

[on Mac](https://docs.python-guide.org/starting/install3/osx/)

[on Windows](https://www.python.org/downloads/)

[on Linux](https://docs.python-guide.org/starting/install3/linux/)

### Install Pipenv

Pip its a package manager and Pipenv it's a boosted version that includes virtual environments.

First install pip go to [this link](https://pip.pypa.io/en/stable/installation/)

Then install pipenv:

`pip install pipenv`

### Install dependencies

In order to install all the required dependencies, run the following command inside of the project folder:

`pipenv install`

### Set the environment

We'll run the app in development mode doing the following:

`export FLASK_ENV=development`

## Run the project

Type and run the following command:

`flask run`

Enjoy!
