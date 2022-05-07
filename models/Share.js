const DataTypes = require('sequelize').DataTypes;
const db = require('../db').db;
// const {Post} = require('./Post');

/* Define share model */
const Share = db.define(
    'share',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {timestamps: true},
);

// Associations
// Post 1-n share
// Share.belongsTo(Post, {
//     foreignKey: {
//         name: 'postId',
//         allowNull: false,
//     },
// });

module.exports.Share = Share;
