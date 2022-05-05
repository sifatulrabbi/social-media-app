const passport = require('passport');
const authService = require('../lib/services/authService');
const router = require('express').Router();

/**
 * LOGIN route
 */
router.post(
    '/login',
    passport.authenticate('local', {
        failureMessage: 'Incorrect credentials. Please try again',
    }),
    async (req, res) => {
        res.status(200).json({success: true, data: req.user});
    },
);

/**
 * SIGN UP route
 */
router.post('/signup', async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = await authService.signUp(name, email, password);
        if (user) {
            res.status(200).json({
                success: true,
                message: 'User created!',
                data: user,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Unable to create user',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({success: false, message: 'Internal error'});
    }
});

module.exports = router;
