const router = require('express').Router();
const {Post, Comment, Like, Share} = require('../lib/models');

/**
 * Create a new post
 */
router.post('/', async (req, res, next) => {
    try {
        const {body} = req.body;
        const post = await Post.create({
            body: body,
            mediaSource: 'sample-source',
        });
        // Send response
        res.status(200).json({success: true, data: post});
    } catch (err) {
        next(err);
    }
});

/**
 * GET a post
 */
router.post('/:id', async (req, res, next) => {
    try {
        const post = await Post.findAll({
            where: {
                id: req.params.id,
            },
            include: [Comment, Like, Share],
        });
        // Send response
        // Check for the post's existence
        if (!post) {
            res.status(404).json({success: false, message: 'Post not found'});
        } else {
            res.status(200).json({success: true, data: post[0]});
        }
    } catch (err) {
        next(err);
    }
});

/**
 * GET all posts
 */
router.post('/', async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            include: [Comment, Like, Share],
        });
        res.status(200).json({success: true, data: posts});
    } catch (err) {
        next(err);
    }
});

module.exports = router;
