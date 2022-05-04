const DataType = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Group model. */

module.exports.Group = define(
    'group',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        users: {
            type: DataType.ARRAY,
            allowNull: false,
        },
    },
    {timestamps: true},
);
