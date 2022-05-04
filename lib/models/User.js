const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define User model. */
module.exports.User = define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {timestamps: true},
);
