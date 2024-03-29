const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;
// const {Post} = require('./Post');

/* Define share model */
const Share = db.define(
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

module.exports.Share = Share;
