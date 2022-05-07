const router = require('express').Router();
const {upload} = require('../fileUpload');
const {Media} = require('../models');

/**
 * Upload avatar
 */
router.post('/avatar', upload.single('avatar'), async (req, res, next) => {
    try {
        // Save the files's source into Media table
        const source = req.file.filename;
        const mimeType = req.file.mimetype;
        const media = await Media.create({source, mimeType});

        // Send the response
        res.status(200).json({success: true, mediaId: media.id, source});
    } catch (err) {
        next(err);
    }
});

/**
 * Upload media content for posts
 */
router.post('/', upload.single('media'), async (req, res, next) => {
    try {
        // Save the source of the media into Media table
        const source = req.file.filename;
        const mimeType = req.file.mimetype;
        const media = await Media.create({source, mimeType});

        // Send response
        res.status(200).json({success: true, mediaId: media.id, source});
    } catch (err) {
        next(err);
    }
});

module.exports = router;
