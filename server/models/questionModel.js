const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const Question = connection.define('questions', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // file: {
  //   type: Sequelize.TEXT,
  // },
  chatMsgs: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Question.sync({
  // remove when tables solidified
  force: true,
});

module.exports = Question;
