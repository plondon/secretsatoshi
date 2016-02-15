var express = require('express');
var app = express();

app.use("/", express.static(__dirname));

app.get('/', function(req, res) {
  response.sendFile('index.html')
})

app.listen('8000', '10.0.0.185', function() { console.log('listening on 8000') })