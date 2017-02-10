const express = require('express');
const http = require('http');
const userCtrl = require('./controllers/userController');
const questionCtrl = require('./controllers/questionController');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/users', userCtrl.getUsers);
app.get('/questions', questionCtrl.getQuestions);

app.post('/users', userCtrl.addUser);
app.post('/questions', questionCtrl.addQuestion);

server.listen(8080, () => {
  process.stdout.write('listening at http://localhost:8080');
});
