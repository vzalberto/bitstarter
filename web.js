
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
fs.
app.get('/', function(request, response) {
response.send(fs.readFileSync('index.html').toString()); 
console.log(fs.readFileSync('index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

