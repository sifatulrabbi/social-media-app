const router = require('express').Router();
const {Profile, Connection} = require('../models');
const profilesService = require('../services/profile.service');
const {verifyUser} = require('../middlewares/verifyUser');
const {createPost} = require('../services/posts.service');

/**
 * get all
 */
router.get('/all', async (req, res, next) => {
  try {
    const post = await Profile.findAll();
    res.status(200).json({success: true, data: post});
  } catch (err) {
    next(err);
  }
});

/**
 * Create a profile
 */
router.post('/:username', verifyUser, async (req, res, next) => {
  try {
    // get the user input
    const {fullname, bio, education, specialization, address, type} = req.body;

    if (
      !fullname ||
      !bio ||
      !education ||
      !specialization ||
      !address ||
      !type
    ) {
      res.status(400).json({
        success: false,
        message:
          // eslint-disable-next-line max-len
          'Required field "bio" and/or "education" and/or "user" not found',
      });

      return;
    }

    // create user profile
    const profile = await Profile.create({
      userId: req.user.id,
      fullname,
      bio,
      education,
      specialization,
      address,
      type,
    });

    // send response
    res.status(201).json({success: false, data: profile});
  } catch (err) {
    // handle errors
    next(err);
  }
});

/**
 * Get a profile with username
 */
router.get('/:username', async (req, res, next) => {
  try {
    const profile = await profilesService.getProfileWithUsername(
      req.params.username,
    );

    profile
      ? res.status(200).json({success: true, data: profile})
      : res.status(404).json({success: false, message: 'User not found'});
  } catch (err) {
    next(err);
  }
});

/**
 * Get a profile with id
 */
router.get('/:id', async (req, res, next) => {
  try {
    const profile = await Profile.findOne({where: {id: req.params.id}});

    profile
      ? res.status(200).json({success: true, data: profile})
      : res.status(404).json({success: false, message: 'User not found'});
  } catch (err) {
    next(err);
  }
});

/**
 * Update a profile
 */
router.put('/:username', verifyUser, async (req, res, next) => {
  try {
    const profile = await Profile.findByPk(req.user.profile.id);

    // Get the updating data
    const {bio, education, orgId, specialization, address} = req.body;

    // update queue
    if (bio) profile.bio = bio;
    if (education) profile.education = education;
    if (orgId) profile.orgId = orgId;
    if (specialization) profile.specialization = specialization;
    if (address) profile.address = address;

    // save the updated profile
    const updatedProfile = await profile.save();

    // Send response
    res.status(200).json({success: true, data: updatedProfile});
  } catch (err) {
    next(err);
  }
});

/**
 * Create connections
 */
router.post('/:username/connections', verifyUser, async (req, res, next) => {
  try {
    const {connectedWith} = req.body;
    if (!connectedWith) {
      res.status(400).json({
        success: false,
        message: 'Required field "connectedWith" not found',
      });
      return;
    }

    // Check for previous connections
    const prevConnection = await Connection.findOne({
      where: {
        connectedWith,
      },
    });
    // If find previous connection then remove the connection instead
    if (prevConnection) {
      await Connection.destroy({
        where: {
          id: prevConnection.get().id,
          connectedWith,
        },
      });
      // remove the counterpart
      await Connection.destroy({
        where: {
          connectedWith: prevConnection.get().id,
          id: connectedWith,
        },
      });
      // return the response
      return res.status(201).json({success: true});
    }

    // Create the connection
    const connection = await Connection.create({
      profileId: req.user.profile.id,
      connectedWith,
    });

    // adding connection for the other user
    await Connection.create({
      profileId: connectedWith,
      connectedWith: req.user.profile.id,
    });
    // Send response
    res.status(201).json({success: true, data: connection});
  } catch (err) {
    next(err);
  }
});

/**
 * GET user connections
 */
router.get('/:username/connections', verifyUser, async (req, res, next) => {
  try {
    // Get the user's connections
    const connections = await Connection.findAll({
      where: {profileId: req.user.profile.id},
    });

    // Send response
    res.status(200).json({success: true, data: connections});
  } catch (err) {
    next(err);
  }
});

/**
 * Create a post
 */
router.post('/:username/post', verifyUser, async (req, res, next) => {
  try {
    const post = await createPost(req.user.profile, req.body);
    if (post) {
      res.status(201).json({success: true, data: post.get()});
    } else {
      req.status(400).json({
        success: false,
        message: 'Unable to create post',
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
