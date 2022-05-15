const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;
const {Profile} = require('./Profile');

/* Define User model. */
const User = db.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // username if the unique name for the users
    // there can be no spaces in username e.g. john_doe
    // this user name will let the users have their unique profile URL
    // e.g. https://prometheus.com/profile/john_doe
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // This is auto generated by bcrypt
    // this field is mandatory for verifying user's password
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Generated hash/digest
    // generated by bcrypt using the users's password and the salt
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {timestamps: true},
);

// Associations
// User 1-1 Profile
User.hasOne(Profile, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});

module.exports.User = User;