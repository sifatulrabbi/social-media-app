const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Connection model */
module.exports.Connection = db.define(
    'connection',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        connectedWith: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {timestamps: false},
);
