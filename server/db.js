const {Sequelize} = require('sequelize');
const config = require('./config');

// Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USERNAME,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST, // localhost as host server
    port: config.DB_PORT,
    dialect: 'mysql', // database dialect name
    logging: console.log, // using the console for logging
  },
);

module.exports.db = sequelize;
