const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;
const {Profile} = require('./Profile');

/* Define Organization model. */
const Organization = db.define(
  'organization',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Name of the organization
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Type of the organization
    // e.g. 'Physician'
    // Only profiles with the sam type can join the organization
    allowedProfiles: {
      type: DataTypes.STRING,
      // Adding Physician as the default type
      // because we don't need an organization with general users
      defaultValue: 'Physician',
    },
    // Owner of the organization ID
    // This means organizations will have an owner/founder
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {timestamps: true},
);

// Associations
// Organization 1-n Profile
Organization.hasMany(Profile, {
  foreignKey: {
    name: 'orgId',
    allowNull: true,
  },
});

module.exports.Organization = Organization;
