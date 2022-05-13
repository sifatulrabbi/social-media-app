const router = require('express').Router();
const Comment = require('../models').Comment;

/**
 * Create a comment
 */
router.post('/', async (req, res, next) => {
  try {
    const {profileId, postId, body} = req.body;
    if (!profileId || !postId || !body) {
      res.status(400).json({
        success: false,
        message:
          // eslint-disable-next-line max-len
          'Required field "profileId" and/or "postId" and/or "body" not found',
      });
      return;
    }

    const comment = await Comment.create({
      profileId,
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
