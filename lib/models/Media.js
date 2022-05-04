const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Media model */
module.exports.Media = define(
    'media',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        source: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },

    {timestamps: true},
);
