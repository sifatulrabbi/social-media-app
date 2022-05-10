const {
    Post,
    Share,
    Media,
    Like,
    Comment,
    Connection,
    Profile,
    User,
} = require('../models');

module.exports.getFullProfile = async function (profileId) {
    // get the profile
    const profile = await this.getProfileWithId(profileId);
    // validate the profile
    if (!profile) return null;

    // get all the posts and shares for the profile
    const posts = await Post.findAll({
        where: {profileId: profile.id},
        include: [Share, Media, Comment, Like],
    });
    // get all the shared posts of the user
    const shares = await Share.findAll({
        where: {profileId: profile.id},
    });
    // loop through all the shares and get the posts
    for (const {postId} of shares) {
        // find all the posts
        const post = await Post.findOne({
            where: {id: postId},
            include: [Comment, Share, Like, Media],
        });
        // add the post to the posts array
        posts.push(post);
    }

    return posts;
};

module.exports.getProfileWithId = async function (profileId) {
    const profile = await Profile.findByPk(profileId, {
        include: Media,
        Connection,
    });

    return profile ? profile : null;
};

module.exports.getProfileWithUsername = async function (username) {
    const user = await User.findOne({
        where: {username},
        include: Profile,
    });
    if (!user || !user.profile.id) {
        return null;
    }
    const profile = await this.getFullProfile(user.profile.id);
    return profile;
};

module.exports.addToOrg = async function (profileId, orgId) {
    // get the profile with id
    const profile = await Profile.findByPk(profileId);
    if (!profile) return null;
    // add organization
    const updatedProfile = await profile.update({orgId});

    return updatedProfile;
};
