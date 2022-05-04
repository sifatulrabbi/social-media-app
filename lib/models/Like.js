const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Like model */
const Like = define('like', {
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
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id',
        },
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
});

// Synchronize the table
(async function () {
    await Like.sync();
});

module.exports.Lik = Like;
