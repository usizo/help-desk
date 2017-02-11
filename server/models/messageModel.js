const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const Message = connection.define('messages', {
  questionid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Message.sync(
  // {
  //   // remove when tables solidified
  //   force: true,
  // }
).then(() => {
  Message.create({
    questionid: 2,
    username: 'ctoppel',
    message: 'this is a message',
  });
});

module.exports = Message;
