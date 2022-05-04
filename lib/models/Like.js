const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Like model */
module.exports.Like = db.define(
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
