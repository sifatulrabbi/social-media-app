const {getUserWithProfile} = require('../services/profile.service');

module.exports.verifyUser = async function (req, res, next) {
    const user = await getUserWithProfile(req.params.username);
    console.log('User: ', user);

    if (!user) {
        res.status(404).json({success: false, message: 'User not found'});
    } else {
        req.user = user;
        next();
    }
};
