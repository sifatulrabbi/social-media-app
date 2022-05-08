const {Like} = require('../models');
const router = require('express').Router();

/**
 * Create a like
 */
router.post('/', async (req, res, next) => {
    try {
        const {postId, userId} = req.body;
        if (!postId || !userId) {
            res.status(400).json({
                success: false,
                message: 'Required field "postId" and/or "userId" not found',
            });
            return;
        }

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
