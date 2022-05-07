const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Group model. */

module.exports.Group = db.define(
    'group',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        users: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
    },
    {timestamps: true},
);