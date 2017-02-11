const Question = require('../models/questionModel');

function getQuestions(req, res) {
  Question.findAll({
    order: '"createdAt" DESC',
  }).then(questions => res.send(questions));
}

function addQuestion(req, res) {
  Question.create({
    question: req.body.question,
    asker: req.body.asker,
  })
  .then(() => res.send('Question added'))
  .catch(err => res.send(err));
}

module.exports = { getQuestions, addQuestion };
