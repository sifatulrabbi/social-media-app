const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Post model. */
const Post = define('post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comments: {
        type: DataTypes.ARRAY,
        allowNull: true,
    },
    likes: {
        type: DataTypes.ARRAY,
        allowNull: true,
    },
});

// synchronize the table
(async function () {
    await Post.sync();
})();

module.exports.Post = Post;
