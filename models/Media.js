const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Media model. */
const Media = db.define('media', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    source: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    mimeType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports.Media = Media;
