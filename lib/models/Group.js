const DataType = require('sequelize').DataTypes;
const {define} = require('../db').db;

/* Define Group model. */

const Group = define('group', {
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    users: {
        type: DataType.ARRAY,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
});

// synchronize the table
(async function () {
    await Group.sync();
})();

module.exports.Group = Group;
