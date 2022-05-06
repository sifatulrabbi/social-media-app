const express = require('express');
const router = express.Router();
const {User, Connection, Profile, Media} = require('../models');
const {verifyUser} = require('../middlewares/verifyUser');

/**
 * GET all the users
 */
router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json({success: true, data: users});
    } catch (err) {
        next(err);
    }
});

/**
 * GET one by id
 */
router.get('/:id', verifyUser, (req, res, next) => {
    try {
        // Send response
        res.status(200).json({success: true, data: req.user});
    } catch (err) {
        next(err);
    }
});

/**
 * GET all posts and shares of a user
 */
router.get('/:id/posts', verifyUser, async (req, res, next) => {
    try {
        // TODO: restructure the share system

        // get all the posts and shares
        const posts = await req.user.getPosts();

        // Send response
        res.status(200).json({success: true, data: posts});
    } catch (err) {
        next(err);
    }
});

/**
 * GET profile of an user
 */
router.get('/:id/profile', verifyUser, async (req, res, next) => {
    try {
        // Get the user's profile
        const profile = await Profile.findOne({
            userId: req.user.id,
            include: Media,
        });
        // Check for the profile
        if (!profile) {
            res.status(404).json({
                success: false,
                message: 'Profile not found',
            });
        } else {
            // Send response
            res.status(200).json({success: true, data: profile});
        }
    } catch (err) {
        next(err);
    }
});

/**
 * GET user connections
 */
router.get('/:id/connections', verifyUser, async (req, res, next) => {
    try {
        // Get the user's connections
        const connections = await req.user.getConnection();
        // Send response
        res.status(200).json({success: true, data: connections});
    } catch (err) {
        next(err);
    }
});

/**
 * Create user connections
 */
router.post('/:id/connections', verifyUser, async (req, res, next) => {
    try {
        const {connectedWith} = req.body;
        // Create the connection
        const connection = await Connection.create({
            userId: req.params.id,
            connectedWith,
        });
        // Send response
        res.status(200).json({success: true, data: connection});
    } catch (err) {
        next(err);
    }
});

/**
 * Create user profile
 */
router.post('/:id/profile', verifyUser, async (req, res, next) => {
    try {
        const {bio, education} = req.body;
        const profile = await Profile.create({
            userId: req.params.id,
            bio,
            education,
            media: 'media-source',
        });
        // Send response
        res.status(200).json({success: true, data: profile});
    } catch (err) {
        next(err);
    }
});

module.exports = router;
