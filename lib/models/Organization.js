const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Organization model. */
module.exports.Organization = db.define(
    'organization',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {timestamps: true},
);
