var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forward-proto'] === 'http') {
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Port ' + PORT + ' be runnin real smooth');
});
