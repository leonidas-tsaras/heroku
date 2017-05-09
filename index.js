var express = require('express');
var app = express();

//responds to http://localhost:3000/ request
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
