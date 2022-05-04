const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Profile model */
module.exports.Profile = db.define(
    'profile',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        media: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING, // Regular, Physician
            allowNull: false,
        },
        specialization: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        attribute: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {timestamps: true},
);
