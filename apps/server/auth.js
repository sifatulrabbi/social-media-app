const bcrypt = require('bcrypt');
const {User, Profile} = require('./models');
const _ = require('lodash');
const profileService = require('./services/profile.service');

/**
 * Verify function for verifying the user login
 */
module.exports.verify = async function (username, password, done) {
  try {
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    // Check for the existence of the user
    if (!user) {
      done(null, false);
    } else {
      const enteredPassword = await bcrypt.hash(password, user.salt);

      if (enteredPassword !== user.hash) {
        done(new Error('Incorrect password'));
      } else {
        const profile = await profileService.getProfileWithUsername(username);
        done(null, profile);
      }
    }
  } catch (err) {
    console.error('\nError occurred during user login: ', err);
    done(err);
  }
};

module.exports.createUser = async function (signUpData, done) {
  try {
    const {
      username,
      email,
      password,
      fullname,
      bio,
      education,
      specialization,
      address,
    } = signUpData;
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    // create user profile
    const user = await User.create({
      username,
      email,
      salt,
      hash,
    });

    // create user profile
    const profile = await Profile.create({
      userId: user.id,
      fullname,
      bio,
      education,
      specialization,
      address,
    });

    const data = _.omit(user.get(), 'hash', 'salt');
    done(null, {...data, profile: profile});
  } catch (err) {
    done(err);
  }
};
