const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;
const {GroupMember} = require('./GroupMember');
const {Media} = require('./Media');
const {Comment} = require('./Comment');
const {Like} = require('./Like');
const {Share} = require('./Share');
const {Post} = require('./Post');
const {Connection} = require('./Connection');

/* Define Profile model */
const Profile = db.define(
  'profile',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Full name of the user
    // Unlike usernames this name can have spaces and other characters
    // e.g. John Doe (Mike)
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Information about the education
    // e.g. B.Sc in Psychology, University of Cambridge, United Kingdom
    education: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Profile bio (About me)
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Specialization
    // If no specialization is given
    // then the the profile will have a 'Physician' specialization
    specialization: {
      type: DataTypes.STRING,
      default: 'Physician',
    },
    // Contains the address of the user
    // the format will be State, Country
    // e.g. London, United Kingdom
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {timestamps: true},
);

// Associations
// Profile 1-1 media
Profile.hasOne(Media, {
  foreignKey: 'profileId',
});

// Profile 1-n Group
Profile.hasMany(GroupMember, {
  foreignKey: 'profileId',
  allowNull: false,
});

// Profile 1-n Like
Profile.hasMany(Like, {
  foreignKey: {
    name: 'profileId',
    allowNull: false,
  },
});

// Profile 1-n Comment
Profile.hasMany(Comment, {
  foreignKey: {
    name: 'profileId',
    allowNull: false,
  },
});

// Profile 1-n Post
Profile.hasMany(Post, {
  foreignKey: {
    name: 'profileId',
    allowNull: false,
  },
});

// Profile 1-1 Share
Profile.hasMany(Share, {
  foreignKey: {
    name: 'profileId',
    allowNull: false,
  },
});

// Profile 1-n Connection
Profile.hasMany(Connection, {
  foreignKey: {
    name: 'profileId',
    allowNull: false,
  },
});

module.exports.Profile = Profile;
