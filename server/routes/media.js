const router = require('express').Router();
const {upload} = require('../fileUpload');
const {Media, Profile, Post} = require('../models');
const path = require('path');

/**
 * Upload media content
 */
router.post('/', upload.single('media'), async (req, res, next) => {
  try {
    // Save the source of the media into Media table
    const source = req.file.filename;
    const mimeType = req.file.mimetype;
    const media = await Media.create({source, mimeType});

    // Send response
    res.status(201).json({success: true, data: media});
  } catch (err) {
    next(err);
  }
});

/**
 * Add media to profile
 */
router.post('/:id/addProfile', async (req, res, next) => {
  try {
    const media = await Media.findByPk(req.params.id);
    if (!media) {
      res.status(404).json({success: false, message: 'Media not found'});
      return;
    }

    if (!req.body.profileId) {
      res.status(400).json({
        success: false,
        message: 'Required field "profileId" not found',
      });
      return;
    }
    // update the media with the post id
    await media.update({profileId: req.body.profileId});
    // Get the profile and send it to the user
    const profile = await Profile.findOne({
      where: {id: req.body.profileId},
      include: Media,
    });

    res.status(200).json({success: true, data: profile});
  } catch (err) {
    next(err);
  }
});

/**
 * Add media to post
 */
router.post('/:id/addPost', async (req, res, next) => {
  try {
    const media = await Media.findByPk(req.params.id);
    if (!media) {
      res.status(404).json({success: false, message: 'Media not found'});
      return;
    }

    // update the media with the post id
    await media.update({postId: req.body.postId});
    // Get the profile and send it to the user
    const post = await Post.findOne({
      where: {id: req.body.postId},
      include: Media,
    });

    res.status(200).json({success: true, data: post});
  } catch (err) {
    next(err);
  }
});

/**
 * Get media
 */
router.get('/:id', async (req, res, next) => {
  try {
    const media = await Media.findByPk(req.params.id);
    if (!media) {
      res.status(404).json({message: 'Media not found', success: false});
      return;
    }
    const filePath = path.join(path.join(__dirname, '../media', media.source));
    res.status(200).download(filePath);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
