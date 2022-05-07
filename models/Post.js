const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

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
Post.associations = function (models) {
    // Post 1-n Comment
    Post.hasMany(models.Comment, {
        foreignKey: {
            name: 'postId',
            allowNull: false,
        },
    });

    // Post 1-n Like
    Post.hasMany(models.Like, {
        foreignKey: {
            name: 'postId',
            allowNull: false,
        },
    });

    // Post 1-1 Share
    Post.hasMany(models.Share, {
        foreignKey: {
            name: 'postId',
            allowNull: false,
        },
    });
};

module.exports.Post = Post;
