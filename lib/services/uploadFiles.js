const path = require('path');
const upload = require('multer')({
    dest: path.join(__dirname, '../../uploads/'),
});

module.exports.single = upload.single('media');
