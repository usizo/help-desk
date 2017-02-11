const Message = require('../models/messageModel');

function getMessages(req, res) {
  Message.findAll({
    order: '"createdAt" DESC',
  }).then(messages => res.send(messages));
}

function addMessage(req, res) {
  Message.create({
    questionid: req.body.questionid,
    username: req.body.username,
    message: req.body.message,
  })
  .then(() => res.send('Message added'))
  .catch(err => res.send(err));
}

module.exports = { getMessages, addMessage };
