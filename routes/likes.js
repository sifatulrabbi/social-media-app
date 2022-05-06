const {Like, User} = require('../lib/models');
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

/**
 * Get all the likes of a post
 */
router.get('/?post=', async (req, res, next) => {
    try {
        const likes = await Like.findAll({
            include: [User],
        });
        // Send response
        res.status(200).json({success: true, data: likes});
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

module.exports = router;
