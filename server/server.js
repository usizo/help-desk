const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();

app.use(express.static(path.join(__dirname, '..')));

app.use(bodyParser.json());

app.get('/users', userController.getUsers);

app.listen(3000);

module.exports = app;
