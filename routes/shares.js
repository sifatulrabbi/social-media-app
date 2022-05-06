const Share = require('../lib/models').Share;
const router = require('express').Router();

/**
 * Create a share
 */
router.post('/', async (req, res, next) => {
    try {
        // Get the share data
        const {postId, userId} = req.body;
        // Create a record
        const share = await Share.create({
            postId: postId,
            userId: userId,
        });
        // Send response
        res.status(200).json({success: true, data: share});
    } catch (err) {
        next(err);
    }
});

/**
 * Get shares of a user
 */
router.get('/users/:userId', async (req, res, next) => {
    try {
        const shares = await Share.findAll({
            where: {
                userId: req.params.userId,
            },
        });
        // Send response
        res.status(200).json({success: true, data: shares});
    } catch (err) {
        next(err);
    }
});

/**
 * Get shares of a post
 */
router.get('/posts/:postId', async (req, res, next) => {
    try {
        const shares = await Share.findAll({
            where: {
                postId: req.params.postId,
            },
        });
        // Send response
        res.status(200).json({success: true, data: shares});
    } catch (err) {
        next(err);
    }
});

module.exports = router;
