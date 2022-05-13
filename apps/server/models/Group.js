const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;
const {GroupMember} = require('./GroupMember');

/* Define Group model. */
const Group = db.define(
  'group',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Group owner/admin/founder/creator
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {timestamps: true},
);

// Associations
// Group 1-n GroupMember
Group.hasMany(GroupMember, {
  foreignKey: {
    name: 'groupId',
    allowNull: false,
  },
});

module.exports.Group = Group;
