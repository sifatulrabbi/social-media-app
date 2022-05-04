const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Media model */
module.exports.Media = db.define(
    'media',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        source: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },

    {timestamps: true},
);
