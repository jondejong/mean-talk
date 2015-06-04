# Getting MEAN
## Introduction to the MEAN stack

### Code and slides from my introduction to the MEAN stack talk

This project depends on MongoDB, NodeJS, NPM, bower and Gulp.

The finished folder contains the finished code for the application. The start folder contains the starting point. During the talk, I start at the starting point and work towards the finished product. 

###Webservices

    cd finished/backend
    npm install
    npm start

###UI

    cd finished/ui
    npm install
    bower install
    gulp serve

###MongoDB

The app depends on a MongodB intsance running on port 27017. This app has only been tested with version 3.0.1. For the purpose of this project, no configuration is necessary. You can simply:
* download and extract the archive to a known locations (mongo_home)
* create a folder to store data (ie, <project_root>/datastore)
* run <mongo_home>/bin/mongod --dbpath=path/to/datastore



###Slides
The slides depend on NPM, Bower and GruntJS.

To run the slides:

    cd slides
    npm install
    bower install
    grunt serve
