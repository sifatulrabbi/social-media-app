const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define User model. */
const User = define('user', {
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
    colleagues: {
        type: DataTypes.ARRAY,
        allowNull: false,
    },
});

// synchronize the table
(async function () {
    await User.sync();
})();

module.exports.User = User;
