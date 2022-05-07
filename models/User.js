const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {timestamps: true},
);

// Associations
User.associations = function (models) {
    // User 1-1 Profile
    User.hasOne(models.Profile, {
        foreignKey: {
            name: 'userId',
            allowNull: false,
        },
    });

    // User 1-n Like
    User.hasMany(models.Like, {
        foreignKey: {
            name: 'userId',
            allowNull: false,
        },
    });

    // User 1-n Comment
    User.hasMany(models.Comment, {
        foreignKey: {
            name: 'userId',
            allowNull: false,
        },
    });

    // User 1-n Post
    User.hasMany(models.Post, {
        foreignKey: {
            name: 'userId',
            allowNull: false,
        },
    });

    // User 1-1 Share
    User.hasMany(models.Share, {
        foreignKey: {
            name: 'userId',
            allowNull: false,
        },
    });

    // User 1-n Connection
    User.hasMany(models.Connection, {
        foreignKey: {
            name: 'userId',
            allowNull: false,
        },
    });
};

module.exports.User = User;
