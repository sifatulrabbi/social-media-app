const router = require('express').Router();
const profilesService = require('../lib/services/profileService');

/**
 * Create a profile
 */
router.post('/', async (req, res, next) => {
    try {
        // get the user input
        const {bio, education, userId} = req.body;
        // create user profile
        const profile = await profilesService.createProfile({
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
 * GET a profile with id or userId
 */
router.get('/get?id=&&userId=', async (req, res, next) => {
    try {
        const profile = await profilesService.getProfile(
            req.query.id,
            req.query.userId,
        );
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

module.exports = router;
