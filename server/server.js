
var express = require('express');
var path = require('path');
var $ = require('jquery');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

var app = express();

app.use(express.static(path.join(__dirname, '..')));

app.use(bodyParser.json());

app.get('/users', userController.getUsers);

app.get('/auth/github', (req, res) => {
    res.status(200).json({login:'jin'});    
})

app.listen(3000);

module.exports = app;
