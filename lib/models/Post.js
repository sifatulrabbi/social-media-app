const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Post model. */
module.exports.Post = define(
    'post',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        totalLikes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        totalComments: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {timestamps: true},
);
