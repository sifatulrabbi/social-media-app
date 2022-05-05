const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const userService = require('./userService');

const localStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
    },
    verify,
);

/**
 * Verify function for verifying the user login
 */
async function verify(email, password, done) {
    try {
        const user = await userService.findUserByEmail(email);
        if (!user) {
            done(null, false);
        } else {
            const enteredPassword = await bcrypt.hash(password, user.salt);

            if (enteredPassword !== user.hash) {
                done(new Error('Incorrect password'));
            } else {
                done(null, user);
            }
        }
    } catch (err) {
        console.error('\nError occurred during user login: ', err);
        done(err);
    }
}

/**
 * passport serializer
 */
module.exports.serializer = function (user, done) {
    if (user.id) {
        done(null, user.id);
        return;
    } else {
        const errors = ['Unable to deserialize', 'User id not found'];
        done(new Error(errors.join('. ')));
    }
};

/**
 * passport deserializer
 */
module.exports.deserializer = async function (id, done) {
    try {
        const user = await userService.findUserById(id);
        done(null, user);
    } catch (err) {
        console.error('Error while deserializing the user: ', err);
        done(err);
    }
};

/**
 * Register user account
 */
module.exports.signUp = async function (name, email, password) {
    const user = await userService.createUser({name, email, password});
    return user;
};

module.exports.localStrategy = localStrategy;
