const {DataTypes} = require('sequelize');
const {db} = require('../db');

/* Define GroupMember model */
const GroupMember = db.define(
    'group_member',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {timestamps: true},
);

module.exports.GroupMember = GroupMember;
