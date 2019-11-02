var express = require('express')
var app = express();
var object = require('./includes/object');

const port = 8080;
console.log('listening on port', port);

app.use(object.action)
    console.log(object.date);
app.listen(port);