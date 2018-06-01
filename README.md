# Eat-da-Burger!

## What the project does
This is an implementation of the Eat-da-Burger app, done as homework for the February 2018 UNC Coding Boot Camp.

## How to get started with the app
You can use the application online at Heroku at https://arcane-bastion-71946.herokuapp.com/ . You will probably have to wait a little while once you reach that URL until Heroku spins up a virtual machine to start hosting the project.

If you want to install the app locally, you will need MySQL and Node.js installed. On Windows, you will need Git Bash. Once you have them on your machine, download the project.

In the project's root directory, install the database from the command line by by entering ($ is the prompt):

    $ bash ./setupDB.sh (Windows)

    $ ./setupDB.sh (Mac/Linux)

Note this script has only been tested on Windows.

Next, while still in the root directory, enter

    $ npm install

This will install all the project dependencies.

Start the server with:

    $ node server.js

Open a browser and in the address line, type:git 

    http://localhost:8080/

Hit enter, and start adding your burger fantasies!

## Authors
This app was built and will be maintained by Mark Hainline. Help should not be needed, and will not be available.
