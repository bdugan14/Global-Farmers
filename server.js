var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname, 'cow-client/www')));

const serverPort = 80;
app.listen(serverPort, function() {});
console.log("Server is listening port: ", serverPort);
