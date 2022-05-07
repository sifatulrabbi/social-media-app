const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

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

module.exports.Profile = Profile;
