const express = require('express');
const router = express.Router();
const User = require('../lib/models').User;

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
        const user = await User.findAll({
            where: {
                id: req.params.id,
            },
        });
        // Send response
        // Check for the user's existence
        if (!user) {
            res.status(404).json({success: true, data: user[0]});
        } else {
            res.status(200).json({success: true, data: user[0]});
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
