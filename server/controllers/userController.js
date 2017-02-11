const User = require('../models/userModel');

function getUsers(req, res) {
  console.log('gU', req);
  console.log('gU', res);

  User.findAll().then((questions) => {
    console.log('qFromDB', questions);

    res.send(questions);
  });

  // return next();
}

function addUser(req, res) {
  console.log('aU', req.body);
  console.log('aU', res.body);

  User.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.send('User added');

  // return next();
}

module.exports = { getUsers, addUser };
