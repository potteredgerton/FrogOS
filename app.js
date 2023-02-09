var express = require('express');
var app = express();
var config = require("./config.json");

app.use(express.static(__dirname + '/client'));

app.get("/a/", (req, res) => {
  var val = "";
  fetch("https://" + req.query.url)
    .then(value => {
      val = value;
    });
  res.send(val);
})

app.listen(config.port);

console.log('Server running on port ' + config.port);