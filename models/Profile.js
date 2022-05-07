const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;
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
        education: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: {
            type: DataTypes.TEXT,
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

module.exports.Profile = Profile;
