const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());
// app.use(cookieParser());

app.get('/', (request, response) => {
  response.sendFile(path.resolve('client/index.html'));
});

app.get('/users', userController.getUsers);

// app.post('/add', userController.addUser);

// app.use(express.static(path.join(__dirname, './../'))); // serves the index.html
app.use(express.static(path.join(__dirname, './../client'))); // serves the index.html
app.listen(3000); // listens on port 3000 -> http://localhost:3000/

module.exports = app;

// app.get('/users', (request, response) => {
//   response.send([
//     { user_id: 3,
//       date_added: '2017-02-08 00:23:16.337339',
//       first_name: 'Curt',
//       last_name: 'Toppel',
//       password: '123456',
//       wins: 0,
//       losses: 0,
//       rating: 1000,
//     },
//     { user_id: 4,
//       date_added: '2017-02-08 00:23:32.97295',
//       first_name: 'Joseph',
//       last_name: 'Roberts',
//       password: '123456',
//       wins: 0,
//       losses: 0,
//       rating: 1000,
//     },
//     { user_id: 5,
//       date_added: '2017-02-08 16:48:19.595428',
//       first_name: 'Michael',
//       last_name: 'Johnson',
//       password: '123456',
//       wins: 0,
//       losses: 0,
//       rating: 1000,
//     },
//   ]);
// });
