const dotenv = require("dotenv");

// Load the local ENV configs.
dotenv.config({ path: ".env" });

module.exports = {
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    PORT: process.env.NODE_DOCKER_PORT || 8080,
};
