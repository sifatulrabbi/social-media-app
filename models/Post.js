const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;
const {Like} = require('./Like');
const {Share} = require('./Share');
const {Comment} = require('./Comment');
const {Media} = require('./Media');

/* Define Post model. */
const Post = db.define(
    'post',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {timestamps: true},
);

// Associations
// Post 1-n Comment
Post.hasMany(Comment, {
    foreignKey: {
        name: 'postId',
        allowNull: false,
    },
});

// Post 1-n Like
Post.hasMany(Like, {
    foreignKey: {
        name: 'postId',
        allowNull: false,
    },
});

// Post 1-n Share
Post.hasMany(Share, {
    foreignKey: {
        name: 'postId',
        allowNull: false,
    },
});

// Post 1-1 Media
Post.hasOne(Media, {
    foreignKey: 'postId',
});

// Post 1-n Share
Post.hasMany(Share, {
    foreignKey: {
        name: 'postId',
        allowNull: false,
    },
});

module.exports.Post = Post;
