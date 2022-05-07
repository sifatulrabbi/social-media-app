const router = require('express').Router();
const {Profile, Media} = require('../models');

/**
 * Create a profile
 */
router.post('/', async (req, res, next) => {
    try {
        // get the user input
        const {bio, education, userId} = req.body;
        // create user profile
        const profile = await Profile.create({
            bio,
            education,
            userId,
        });

        // send response
        res.status(200).json({success: false, data: profile});
    } catch (err) {
        // handle errors
        next(err);
    }
});

/**
 * Update a profile
 */
router.put('/:id', async (req, res, next) => {
    try {
        const profile = await Profile.findByPk(req.params.id);
        // verify profile's availability
        if (!profile) {
            return res.status(404).json({
                success: false,
                message: 'Profile not found',
            });
        }

        // Get the updating data
        const {bio, education} = req.body;

        if (bio) profile.bio = bio;
        if (education) profile.education = education;

        // save the updated profile
        const updatedProfile = await profile.save();

        // Send response
        res.status(200).json({success: true, data: updatedProfile});
    } catch (err) {
        next(err);
    }
});

/**
 * GET a profile with id or userId
 */
router.get('/:id', async (req, res, next) => {
    try {
        let profile = null;

        // get the profile with either profile id or user id
        profile = await Profile.findOne({
            where: {
                id: req.params.id,
            },
            include: Media,
        });

        // Check for the profile's existence
        if (profile) {
            res.status(200).json({success: true, data: profile});
        } else {
            res.status(404).json({
                success: false,
                message: 'Profile not found',
            });
        }
    } catch (err) {
        next(err);
    }
});

/**
 * Add to an organization
 */
router.patch('/:id/organization', async (req, res, next) => {
    try {
        const {orgId} = req.body;
        const profile = await Profile.findByPk(req.params.id);
        if (!profile) {
            res.status(404).json({
                success: false,
                message: 'Profile not found',
            });
            return;
        }

        const updatedProfile = await profile.update({
            orgId: orgId,
        });
        res.status(200).json({success: true, data: updatedProfile});
    } catch (err) {
        next(err);
    }
});

module.exports = router;
