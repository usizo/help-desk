const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

function getUsers(req, res) {
  User.findAll({
    order: '"username" DESC',
  }).then(questions => res.send(questions));
}

function addUser(req, res) {
  console.log('aU', req.body);
  User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.cookie('user', req.body.username) //need to make this more secure, also add maxAge;
  res.redirect('/');

  // return next();
}
function verifyUser(req, res) {
  console.log('vU', req);
  //const username = req.body.username;
  //const password = req.body.password;
  User.findOne({ where: {username: req.body.username}}).then((result) => {
    console.log('result is ', result)
    if(result !== null && bcrypt.compareSync(req.body.password, result.password)) {
        //sessionController.startSession(result);
        //cookieController.setSSIDCookie(req, res, result);
        res.cookie('user', req.body.username) //need to make this more secure;
        res.redirect('/');
        //res.redirect('/secret');
    } else {
      res.redirect('/login');
      //res.redirect('/signup');
    }
  });
}

module.exports = {addUser, verifyUser, getUsers};
