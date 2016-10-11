var express = require('express');

var app = express();

app.use('/', express.static('public'));
app.use('/dist', express.static('dist'));

var port = env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});