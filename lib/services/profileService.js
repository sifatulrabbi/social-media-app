const {Profile, Media} = require('../models');

/**
 * Create profile
 */
module.exports.createProfile = async function (data) {
    // create a media record
    const media = await Media.create({});
};
