# Getting MEAN
## Introduction to the MEAN stack

### Code and slides from my introduction to the MEAN stack talk on 3/27/2014

This project depends on NPM and GruntJS.

To run the slides:

    cd slides
    npm install
    bower install
    grunt serve

The app depends on MongodB intsance running on port 27017. During the talk, we used MongoDB version 3.0.1. There are two steps to run the final app. To launch the webservices:

    cd code/hello-universe-things
    npm install
    npm start

To run the UI:

    cd code/ui
    npm install
    bower install
    grunt serve
