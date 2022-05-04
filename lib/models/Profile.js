const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Profile model */
module.exports.Profile = define(
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
        colleagues: {
            type: DataTypes.ARRAY,
            allowNull: true,
        },
        attribute: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {timestamps: true},
);
