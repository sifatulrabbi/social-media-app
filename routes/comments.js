const router = require('express').Router();
const Comment = require('../models').Comment;

/**
 * Create a comment
 */
router.post('/', async (req, res, next) => {
    try {
        const {userId, postId, body} = req.body;
        const comment = await Comment.create({
            userId,
            postId,
            body,
        });
        // send response
        res.status(200).json({success: true, data: comment});
    } catch (err) {
        next(err);
    }
});

module.exports = router;
