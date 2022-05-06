const {Like} = require('../lib/models');
const router = require('express').Router();

/**
 * Create a like
 */
router.post('/', async (req, res, next) => {
    try {
        // Create like
        const like = await Like.create({
            postId: req.body.postId,
            userId: req.body.userId,
        });
        // Send response
        res.status(200).json({success: true, data: like});
    } catch (err) {
        next(err);
    }
});

module.exports = router;
