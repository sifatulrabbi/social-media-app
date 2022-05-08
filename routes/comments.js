const router = require('express').Router();
const Comment = require('../models').Comment;

/**
 * Create a comment
 */
router.post('/', async (req, res, next) => {
    try {
        const {userId, postId, body} = req.body;
        if (!userId || !postId || !body) {
            res.status(400).json({
                success: false,
                message:
                    // eslint-disable-next-line max-len
                    'Required field "userId" and/or "postId" and/or "body" not found',
            });
            return;
        }

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
