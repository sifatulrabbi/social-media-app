const {Sequelize} = require('sequelize');
const config = require('../config');

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

/**
 * Test the database connection
 */
(async function () {
    try {
        await sequelize.authenticate();
        console.info('Connected to the database.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
        process.exit(1);
    }
})();

module.exports.db = sequelize;
