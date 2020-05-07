# Web API Deployment Challenge

Guided project for **Web API IV** module.

In this project we will learn how to deploy a Web API to `heroku`.

## Prerequisites

- Sign up for a [heroku](https://www.heroku.com/) free account.

## Instructions

Please fork this repository and follow along **using your fork** as the instructor deploys the API to `heroku`.


## Deployment Instructions!
<!-- in order to deploy we need to do a few things: -->
1. make the port dynamic, and readable from the Environment.
    - The environment is the computer your code is running on
    - ## const port = process.env.PORT || PUT LOCAL HOST SERVER ISL ISTENING TO HERE;
    
2. provide start script in package.json that uses node to run the application. Heroku will run the application using npm start
    - create a new application in heroku
    -connect it to the branch to be deployed from the respository with Github
