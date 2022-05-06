const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define share model */
module.exports.Share = db.define(
    'share',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {timestamps: true},
);
