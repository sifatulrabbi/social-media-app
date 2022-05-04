const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Comment model */
const Comment = define('comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    post: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id',
        },
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

// Synchronize table
(async function () {
    await Comment.sync();
})();

module.exports.Comment = Comment;
