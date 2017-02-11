const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const Message = connection.define('messages', {
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  user: {
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
);

module.exports = Message;
