const DataTypes = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Organization model. */
const Organization = define('organization', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    members: {
        type: DataTypes.ARRAY,
        allowNull: false,
    },
});

/**
 * Synchronize the model
 */
(async function () {
    await Organization.sync();
});

module.exports.Organization = Organization;
