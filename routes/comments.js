const router = require('express').Router();
const Comment = require('../lib/models').Comment;

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

/**
 * GET comments of a post
 */
router.get('/posts/:id', async (req, res, next) => {
    try {
        const comments = await Comment.findAll({
            where: {
                postId: req.params.id,
            },
        });
        // Send response
        res.status(200).json({
            success: false,
            data: comments,
            count: comments.length,
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
