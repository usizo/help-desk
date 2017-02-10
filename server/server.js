
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

var app = express();

app.use(express.static(path.join(__dirname, '..')));

app.use(bodyParser.json());

app.get('/users', userController.getUsers);

app.get('/auth/github', (req, res) => {
    //check for cookie
    //if cookie send login info
    res.status(200).json({login:'jin'});
    //otherwise oauth authorization
    //then send login info
})

app.listen(3000);

module.exports = app;
