const express = require('express');
const router = express.Router();
const passport = require('passport');
const {User} = require('../models');
const bcrypt = require('bcrypt');
const _ = require('lodash');

/**
 * LOGIN route
 */
router.post(
    '/auth/login',
    passport.authenticate('local', {
        failureMessage: 'Incorrect credentials. Please try again',
    }),
    (req, res) => {
        const data = _.omit(req.user.get(), 'hash', 'salt');
        res.status(200).json({success: true, data: data});
    },
);

/**
 * SIGN UP route
 */
router.post('/auth/signup', async (req, res) => {
    try {
        const {username, email, password} = req.body;
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        // create user profile
        const user = await User.create({
            username,
            email,
            salt,
            hash,
        });

        // Send response
        res.status(200).json({
            success: true,
            data: _.omit(user.get(), 'hash', 'salt'),
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({success: false, message: 'Internal error'});
    }
});

/**
 * Health check route
 */
router.get('/', (req, res) => {
    res.status(200).json({success: true, message: 'Hello, world'});
});

module.exports = router;
