const router = require('express').Router();
const {sharePost} = require('../services/posts.service');

/**
 * Create a share
 */
router.post('/', async (req, res, next) => {
  try {
    // Get the share data
    const {postId, profileId} = req.body;
    if (!postId || !profileId) {
      res.status(400).json({
        success: false,
        message: 'Required field "postId" and/or "userId" not found',
      });
      return;
    }

    // Create a share
    const share = await sharePost(postId, profileId);
    // Send response
    res.status(201).json({success: true, data: share});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
