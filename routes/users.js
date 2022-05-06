const express = require('express');
const router = express.Router();
const {User, Connection} = require('../lib/models');

/**
 * GET user function
 */
async function getUser(id) {
    const user = await User.findOne({
        where: {
            id: id,
        },
    });
    return user;
}

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
router.get('/:id', async (req, res, next) => {
    try {
        const user = await getUser(req.params.id);
        // Check for the user's existence
        if (!user) {
            res.status(404).json({success: true, message: 'User not found'});
        } else {
            // Send response
            res.status(200).json({success: true, data: user[0]});
        }
    } catch (err) {
        next(err);
    }
});

/**
 * GET all posts of a user
 */
router.get('/:id/posts', async (req, res, next) => {
    try {
        const user = await getUser(req.params.id);
        // Check the user
        if (!user) {
            res.status(404).json({success: false, message: 'User not found'});
            return;
        }
        // get all the posts and shares
        const posts = await user.getPost();
        const shares = await user.getShare();
        const sharedPosts = await shares.getPost();
        // Send response
        res.status(200).json({success: true, data: [...posts, ...sharedPosts]});
    } catch (err) {
        next(err);
    }
});

/**
 * GET profile of an user
 */
router.get('/:id/profile', async (req, res, next) => {
    try {
        const user = await getUser(req.params.id);
        // Check for user
        if (!user) {
            res.status(404).json({success: false, message: 'User not found'});
            return;
        }
        // Get the user's profile
        const profile = await user.getProfile();
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
router.get('/:id/connections', async (req, res, next) => {
    try {
        const user = await getUser(req.params.id);
        // Check for user
        if (!user) {
            res.status(404).json({success: false, message: 'User not found'});
            return;
        }
        // Get the user's connections
        const connections = await user.getConnection();
        // Send response
        res.status(200).json({success: true, data: connections});
    } catch (err) {
        next(err);
    }
});

/**
 * Create user connections
 */
router.post('/:id/connections', async (req, res, next) => {
    try {
        const user = await getUser(req.params.id);
        // Check for user
        if (!user) {
            res.status(404).json({success: false, message: 'User not found'});
            return;
        }

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

module.exports = router;
