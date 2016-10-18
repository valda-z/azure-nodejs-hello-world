var express = require('express');
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
  });

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
  });
