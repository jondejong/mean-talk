var express = require('express');
var router = require('./routes/index');
var bodyParser = require('body-parser');

require('./models/db');

var app = new express();

// Add CORS Filter
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  next();
});

app.use(bodyParser.json());

app.use('/', router);

var server = app.listen(4000, function(err) {
  console.log('server is listening on port ' + server.address().port);
});
