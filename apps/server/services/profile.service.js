const {
  Post,
  Share,
  Media,
  Like,
  Comment,
  Connection,
  Profile,
  User,
  Organization,
} = require('../models');

const profilesService = {};

profilesService.getFullProfile = async function (profileId) {
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

  const data = {
    ...profile.get(),
    posts,
  };

  return data;
};

profilesService.getProfileWithId = async function (profileId) {
  const profile = await Profile.findByPk(profileId, {
    include: [Media, Connection],
  });

  return profile ? profile : null;
};

profilesService.getProfileWithUsername = async function (username) {
  const user = await User.findOne({
    where: {username},
    include: Profile,
  });

  if (!user || !user.profile) {
    return null;
  }
  const profile = await this.getFullProfile(user.profile.id);
  return {...user.get(), profile};
};

profilesService.addToOrg = async function (profile, orgId) {
  // get the profile with id
  if (!profile) return null;
  const org = await Organization.findByPk(orgId);
  if (!org) return null;

  /**
   * @type {string[]}
   */
  const allowedTypes = org.get().allowedProfiles.split(',');
  if (allowedTypes.includes(profile.specialization)) {
    // add organization
    const updatedProfile = await profile.update({orgId});

    return updatedProfile;
  }
  return null;
};

profilesService.getUserWithProfile = async function (username) {
  const user = await User.findOne({where: {username, username}});
  const profile = await Profile.findOne({where: {userId: user.id}});
  const data = {
    ...user.get(),
    profile: profile ? profile.get() : null,
  };

  return data;
};

module.exports = profilesService;
