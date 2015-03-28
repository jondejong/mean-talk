var express = require('express');

// Add the body parser
var bodyParser = require('body-parser');

// Add the routes
var routes = require('./routes/index');

var app = express();

//Add the DB
var db = require('./models/db');

// Add CORS Filter
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  next();
});

app.use(bodyParser.json());

// No router step
//app.get('/hello.txt', function(req, res) {
//  res.send('Hello universe');
//});

app.use('/', routes);

var server = app.listen(3000, function(){
  console.log('Listening on port %d', server.address().port);
});
