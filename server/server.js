
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

var app = express();

app.use(express.static(path.join(__dirname, '..')));

app.use(bodyParser.json());

app.get('/users', userController.getUsers);

app.listen(3000);

module.exports = app;
