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
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
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
