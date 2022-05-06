const {Profile, Media} = require('../models');

/**
 * Create profile
 */
module.exports.createProfile = async function (data) {
    // Create a media record
    const media = await Media.create({source: 'some-source'});
    // Create profile
    const profile = await Profile.create({
        bio: data.bio,
        education: data.education,
        mediaId: media.id,
        userId: data.userId,
    });

    return profile;
};

/**
 * Find a profile with profile id
 */
module.exports.getProfile = async function (id, userId) {
    let profile = null;
    // Check for profile id and user id
    if (id) {
        profile = await Profile.findAll({
            where: {
                id: id,
            },
        });
    } else if (userId) {
        profile = await Profile.findAll({
            where: {
                userId: userId,
            },
        });
    }

    return profile[0];
};
