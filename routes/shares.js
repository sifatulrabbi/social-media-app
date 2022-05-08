const Share = require('../models').Share;
const router = require('express').Router();

/**
 * Create a share
 */
router.post('/', async (req, res, next) => {
    try {
        // Get the share data
        const {postId, userId} = req.body;
        if (!postId || !userId) {
            res.status(400).json({
                success: false,
                message: 'Required field "postId" and/or "userId" not found',
            });
            return;
        }

        // Create a share
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

module.exports = router;
