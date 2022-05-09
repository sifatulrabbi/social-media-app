const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;
const {GroupMember} = require('./GroupMember');
const {Media} = require('./Media');

/* Define Profile model */
const Profile = db.define(
    'profile',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // Information about the education of the user
        education: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Profile bio (About me)
        bio: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // User profile types
        // 'General' for general profiles
        // 'Physician' for specialized profiles
        type: {
            type: DataTypes.STRING,
            default: 'General',
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

module.exports.Profile = Profile;
