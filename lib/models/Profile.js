const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Profile model */
const Profile = define('profile', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    media: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

// Synchronize table
(async function () {
    await Profile.sync();
})();

module.exports.Profile = Profile;
