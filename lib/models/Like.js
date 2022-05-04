const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Like model */
module.exports.Like = define(
    'like',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {timestamps: true},
);
