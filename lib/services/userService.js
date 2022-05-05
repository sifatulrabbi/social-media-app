const User = require('../models').User;
const bcrypt = require('bcrypt');

/**
 * Create user method
 */
module.exports.createUser = async function (data) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.password, salt);

    const user = await User.create({
        name: data.name,
        email: data.email,
        salt: salt,
        hash: hash,
    });

    return user;
};

/**
 * Find user by id
 */
module.exports.findUserById = async function (userId) {
    const user = await User.findOne({
        where: {
            id: userId,
        },
    });

    return user;
};

/**
 * Find user by email
 */
module.exports.findUserByEmail = async function (email) {
    const user = await User.findAll({
        where: {
            email: email,
        },
    });

    return user[0];
};

/**
 * Get all the users
 */
module.exports.getAllUsers = async function () {
    const users = await User.findAll();
    return users;
};
