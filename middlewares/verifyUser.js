const {User} = require('../models');

module.exports.verifyUser = async function (req, res, next) {
    const user = await User.findOne({where: {id: req.params.id}});
    if (!user) {
        res.status(404).json({success: false, message: 'User not found'});
    } else {
        req.user = user;
        next();
    }
};
