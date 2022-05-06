const router = require('express').Router();
const Profile = require('../lib/models').Profile;

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
 * GET a profile with id or userId
 */
router.get('/get?id=&&userId=', async (req, res, next) => {
    try {
        let profile = null;

        // get the profile with either profile id or user id
        if (req.query.id) {
            profile = (
                await Profile.findAll({
                    where: {
                        id: req.query.id,
                    },
                })
            )[0];
        } else if (req.query.userId) {
            profile = (
                await Profile.findAll({
                    where: {
                        userId: req.query.userId,
                    },
                })
            )[0];
        }

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

module.exports = router;
