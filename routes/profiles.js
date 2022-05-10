const router = require('express').Router();
const {Profile, Connection} = require('../models');
const profilesService = require('../services/profile.service');
const {verifyUser} = require('../middlewares/verifyUser');
const {createPost} = require('../services/posts.service');

/**
 * Create a profile
 */
router.post('/:username', verifyUser, async (req, res, next) => {
    try {
        // get the user input
        const {fullname, bio, education, specialization, address} = req.body;

        if (!fullname || !bio || !education || !specialization || !address) {
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
        });

        // send response
        res.status(200).json({success: false, data: profile});
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

        // Create the connection
        const connection = await Connection.create({
            profileId: req.user.profile.id,
            connectedWith,
        });
        // Send response
        res.status(200).json({success: true, data: connection});
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
 * Add to an organization
 */
router.put('/:username/organization', verifyUser, async (req, res, next) => {
    try {
        const {orgId} = req.body;
        if (!orgId) {
            res.status(400).json({
                success: false,
                message: 'Required filed "orgId" not found',
            });
            return;
        }

        const updatedProfile = await profilesService.addToOrg(
            req.user.profile.id,
            orgId,
        );

        res.status(200).json({success: true, data: updatedProfile});
    } catch (err) {
        next(err);
    }
});

/**
 * Create a post
 */
router.post('/:username/post', verifyUser, async (req, res, next) => {
    try {
        const post = await createPost(req.params.user.profile, req.body);
        post
            ? res.status(200).json({success: true, data: post})
            : req.status(400).json({
                  success: false,
                  message: 'Unable to create post',
              });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
