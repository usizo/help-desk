const Question = require('../models/questionModel');

function getQuestions(req, res) {
  console.log('gQ', req);
  console.log('gQ', res);

  Question.findAll().then((questions) => {
    console.log('qFromDB', questions);

    res.send(questions);
  });

  // return next();
}

function addQuestion(req, res) {
  console.log('aQ', req);
  console.log('aQ', res);

  Question.create({
    username: req.body.username,
    title: req.body.title,
    chatMsgs: req.body.chatMsgs,
  });

  res.send('Question added')

  // return next();
}

module.exports = { getQuestions, addQuestion };
