const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Comment model */
const Comment = db.define('comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // Comment's text/body
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports.Comment = Comment;
