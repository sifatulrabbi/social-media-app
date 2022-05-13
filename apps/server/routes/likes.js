const {Like} = require('../models');
const router = require('express').Router();

/**
 * Create a like
 */
router.post('/', async (req, res, next) => {
  try {
    const {postId, profileId} = req.body;
    if (!postId || !profileId) {
      res.status(400).json({
        success: false,
        message: 'Required field "postId" and/or "profileId" not found',
      });
      return;
    }

    // Create like
    const like = await Like.create({
      postId,
      profileId,
    });

    // Send response
    res.status(200).json({success: true, data: like});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
