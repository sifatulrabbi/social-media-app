const multer = require('multer');
const path = require('path');

// Create multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'media'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}.${file.originalname.split('.').pop()}`);
    },
});

// Create upload middleware
module.exports.upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        if (file.size > 200 * 1000000) {
            cb(null, false);
        } else {
            cb(null, true);
        }
    },
});
