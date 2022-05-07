const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;

/* Define Media model. */
const Media = db.define('media', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    source: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    mimeType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Associations
Media.associations = function (models) {
    // Media 1-1 Post
    models.Post.hasOne(Model, {
        foreignKey: {
            name: 'postId',
            allowNull: true,
        },
    });

    // Media 1-1 Profile
    models.Profile.hasOne(tables.Media, {
        foreignKey: {
            name: 'profileId',
            allowNull: true,
        },
    });
};

module.exports.Media = Media;
