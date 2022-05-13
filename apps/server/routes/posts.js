const router = require('express').Router();
const {Post, Comment, Like, Share, Media} = require('../models');

/**
 * GET a post
 */
router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [Media, Comment, Like, Share],
    });
    // Send response
    // Check for the post's existence
    if (!post) {
      res.status(404).json({success: false, message: 'Post not found'});
    } else {
      res.status(200).json({success: true, data: post});
    }
  } catch (err) {
    next(err);
  }
});

/**
 * GET all posts
 */
router.get('/', async (req, res, next) => {
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
