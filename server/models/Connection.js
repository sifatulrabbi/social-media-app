const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Connection model */
const Connection = db.define(
  'connection',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // ID of the connected user
    // This field contains the profileId
    connectedWith: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {timestamps: false},
);

module.exports.Connection = Connection;
