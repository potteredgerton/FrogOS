var express = require('express');
var app = express();
var config = require("./config.json");

app.use(express.static(__dirname + '/client'));

app.listen(config.port);

console.log('Server running on port ' + config.port);