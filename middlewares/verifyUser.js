const {getProfileWithUsername} = require('../services/profile.service');

module.exports.verifyUser = async function (req, res, next) {
    const user = await getProfileWithUsername(req.params.username);
    if (!user) {
        res.status(404).json({success: false, message: 'User not found'});
    } else {
        req.user = user;
        next();
    }
};
