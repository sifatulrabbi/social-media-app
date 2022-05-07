const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

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
Organization.associations = (models) => {
    // Organization 1-n Profiles
    Organization.hasMany(models.profiles, {
        foreignKey: {
            name: 'orgId',
            allowNull: true,
        },
    });
};

module.exports.Organization = Organization;
