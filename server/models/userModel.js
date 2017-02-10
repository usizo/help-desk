const Sequelize = require('sequelize');
const connection = require('../pgConnection');
const bcrypt = require('bcryptjs');
// use in case bcryptjs is too slow
// const bcrypt = require('bcrypt');

const User = connection.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  hooks: {
    afterValidate: (user) => {
      user.password = bcrypt.hashSync(user.password, 8);
    },
  },
});

User.sync({
  // remove when tables solidified
  force: true,
});

module.exports = User;
