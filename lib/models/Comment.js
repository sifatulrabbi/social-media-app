const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Comment model */
module.exports.Comment = define('comment', {
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
