const express = require('express');
const http = require('http');
const userCtrl = require('./controllers/userController');
const questionCtrl = require('./controllers/questionController');
const messageCtrl = require('./controllers/messageController');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const server = http.createServer(app);

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..'))); // serves the index.html

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
  // res.send('index.html');
});
app.get('/users', userCtrl.getUsers);
app.get('/questions', questionCtrl.getQuestions);
app.get('/messages', messageCtrl.getMessages);

app.post('/users', userCtrl.addUser);
app.post('/questions', questionCtrl.addQuestion);
app.post('/messages', messageCtrl.addMessage);

server.listen(8080, () => {
  process.stdout.write('listening at http://localhost:8080');
});
