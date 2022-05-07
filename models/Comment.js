const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Comment model */
module.exports.Comment = db.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});