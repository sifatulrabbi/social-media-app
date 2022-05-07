const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Like model */
const Like = db.define(
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

module.exports.Like = Like;
