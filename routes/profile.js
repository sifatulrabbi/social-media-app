const router = require('express').Router();
const profileService = require('../lib/services/profileService');

/**
 * Create a profile
 */
router.post('/', async (req, res, next) => {
    try {
        // get the user input
        const {bio, education, userId} = req.body;
        // create user profile
        const profile = await profileService.createProfile({
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

module.exports = router;
