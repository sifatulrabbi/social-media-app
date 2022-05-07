const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;
const {Comment} = require('./Comment');
const {Like} = require('./Like');
const {Profile} = require('./Profile');
const {Post} = require('./Post');
const {Connection} = require('./Connection');
const {Share} = require('./Share');

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
// User 1-1 Profile
User.hasOne(Profile, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

// User 1-n Like
User.hasMany(Like, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

// User 1-n Comment
User.hasMany(Comment, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

// User 1-n Post
User.hasMany(Post, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

// User 1-1 Share
User.hasMany(Share, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

// User 1-n Connection
User.hasMany(Connection, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

module.exports.User = User;
