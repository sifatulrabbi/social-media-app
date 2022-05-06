const Like = require('../lib/models').Like;
const router = require('express').Router();

/**
 * Get all the likes of a Post
 */
router.get('/all/:postId', async (req, res, next) => {
    try {
        const postId = req.params.postId;
        // Get all the likes with the postId
        const likes = await Like.findAll({
            where: {
                postId: postId,
            },
        });
        // Send response
        res.status(200).json({
            success: true,
            data: likes,
            count: likes.length,
        });
    } catch (err) {
        next(err);
    }
});

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

/**
 * Remove a like
 */
router.delete('/:id', async (req, res, next) => {
    try {
        // Remove the like with the id
        await Like.destroy({
            where: {
                id: req.params.id,
            },
        });
        // Send response
        res.status(200).json({success: true, message: 'Like removed'});
    } catch (err) {
        next(err);
    }
});
