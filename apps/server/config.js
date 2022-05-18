const dotenv = require('dotenv');

// Load the local ENV configs.
dotenv.config({path: '.env'});

module.exports = {
  PORT: process.env.NODE_DOCKER_PORT || '8080',
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
};
