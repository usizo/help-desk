const Sequelize = require('sequelize');

const connection = new Sequelize('postgres://usizo:123456@localhost:5432/helpdesk');

module.exports = connection;
