const router = require('express').Router();
const {Profile, Media, Organization} = require('../models');

/**
 * Create a profile
 */
router.post('/', async (req, res, next) => {
    try {
        // get the user input
        const {bio, education, userId} = req.body;
        if (!bio || !education || !userId) {
            res.status(400).json({
                success: false,
                message:
                    // eslint-disable-next-line max-len
                    'Required field "bio" and/or "education" and/or "userId" not found',
            });
            return;
        }

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
        const {bio, education, orgId} = req.body;

        if (bio) profile.bio = bio;
        if (education) profile.education = education;
        if (orgId) profile.orgId = orgId;

        // save the updated profile
        const updatedProfile = await profile.save();

        // Send response
        res.status(200).json({success: true, data: updatedProfile});
    } catch (err) {
        next(err);
    }
});

/**
 * GET a profile with id
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

        let org = null;
        if (profile.orgId) {
            org = await Organization.findOne({where: {id: profile.orgId}});
        }

        // Check for the profile's existence
        if (profile) {
            const data = profile.get();
            if (org) data.org = org.get();
            res.status(200).json({success: true, data});
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
        if (!orgId) {
            res.status(400).json({
                success: false,
                message: 'Required filed "orgId" not found',
            });
            return;
        }

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
