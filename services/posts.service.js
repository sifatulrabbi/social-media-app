const {Post, Media, Share} = require('../models');

module.exports.createPost = async function (profile, postData) {
    const media = await Media.findOne({where: {profileId: profile.id}});

    const data = {};

    if (media) data.profileAvatar = media.id;
    data.body = postData.body;
    data.postedBy = profile.fullname;

    const post = await Post.create(data);

    return post ? post : null;
};

module.exports.sharePost = async function (postId, profileId) {
    const previousShare = await Share.findOne({where: {postId, profileId}});
    if (previousShare) return previousShare;

    const share = await Share.create({profileId, postId});

    return share;
};
