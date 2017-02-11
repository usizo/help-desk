const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const Question = connection.define('questions', {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  asker: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  file: {
    type: Sequelize.TEXT,
  },
  answered: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

Question.sync(
  // {
  //   // remove when tables solidified
  //   force: true,
  // }
);

module.exports = Question;
