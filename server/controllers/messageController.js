const Message = require('../models/messageModel');

function getMessages(req, res) {
  // console.log('gM', req);
  // console.log('gM', res);

  Message.findAll().then((messages) => {
    // console.log('mFromDB', messages);
    return res.send(messages);
  });

  // return next();
}

function addMessage(req, res) {
  console.log('aM', req.body);
  // console.log('aM', res);

  Message.create({
    questionId: req.body.questionId,
    user: req.body.user,
    message: req.body.message,
  })
  .then(() => res.send('Message added'))
  .catch(err => res.send(err));

  // return next();
}

module.exports = { getMessages, addMessage };
