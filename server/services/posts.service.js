const {Post, Media, Share} = require('../models');

/**
 * Find out if the post is anonymous or public
 * @param {string} body
 * @returns {boolean}
 */
function anonymousPost(body) {
  let result = false;

  const arr = body.split(' ');
  if (arr[0] === '#anonymous') result = true;

  const newArr = body.split('\n');
  if (newArr[0] === '#anonymous') result = true;

  return result;
}

module.exports.createPost = async function (profile, postData) {
  const media = await Media.findOne({where: {profileId: profile.id}});

  const data = {};

  if (media) data.profileAvatar = media.id;
  data.body = postData.body;
  data.postedBy = profile.fullname;
  data.profileId = profile.id;
  data.type = profile.type;
  data.specialization = profile.specialization;

  // making the post anonymous
  const anonym = anonymousPost(postData.body);
  if (anonym) {
    data.postedBy = 'anonymous';
    data.profileAvatar = 0;
    data.specialization = 'hidden';
    data.type = 'hidden';
  }

  const post = await Post.create(data);

  return post ? post : null;
};

module.exports.sharePost = async function (postId, profileId) {
  const previousShare = await Share.findOne({where: {postId, profileId}});
  if (previousShare) return previousShare;

  const share = await Share.create({profileId, postId});

  return share;
};
