const Sequelize = require('sequelize');

const sequelize = new Sequelize('helpdesk', 'usizo', '123456', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  created: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports =

// Or you can simply use a connection uri
// var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// what does the sync method do?
sequelize.sync({ logging: console.log }).then(() => {
  id: Sequelize.STRING,
  summary: Sequelize.STRING,
  htmlLink: Sequelize.STRING,
  sequence: Sequelize.INTEGER,
  created: Sequelize.DATE,
  updated: Sequelize.DATE,
  start: Sequelize.DATE,
  end: Sequelize.DATE,
});
