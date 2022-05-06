const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Post model. */
module.exports.Post = db.define(
    'post',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {timestamps: true},
);
