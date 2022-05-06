const express = require('express');
const router = express.Router();
const passport = require('passport');
const {User} = require('../models');
const bcrypt = require('bcrypt');

/**
 * LOGIN route
 */
router.post(
    '/auth/login',
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
router.post('/auth/signup', async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        // create user profile
        const user = await User.create({
            name: name,
            email: email,
            salt: salt,
            hash: hash,
        });

        // Send response
        res.status(200).json({success: true, data: user});
    } catch (err) {
        console.error(err);
        res.status(500).json({success: false, message: 'Internal error'});
    }
});

/**
 * Health check route
 */
router.get('/', (req, res) => {
    res.status(200).json({success: true, message: 'Hello world'});
});

module.exports = router;
