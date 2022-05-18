const {Sequelize} = require('sequelize');
const config = require('./config');

// Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USERNAME,
  config.DB_PASSWORD,
  {
    host: 'localhost', // localhost as host server
    dialect: 'mysql', // database dialect name
    logging: console.log, // using the console for logging
  },
);

module.exports.db = sequelize;
