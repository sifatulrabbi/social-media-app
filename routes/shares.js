const Share = require('../models').Share;
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

module.exports = router;
