const express = require('express');
const router = express.Router();
const usersService = require('../lib/services/userService');

/**
 * GET all the users
 */
router.get('/all', async (req, res) => {
    try {
        const users = await usersService.getAllUsers();
        res.status(200).json({success: true, data: users});
    } catch (err) {
        res.status(500).json({status: false, message: 'Internal error'});
        console.error(err);
    }
});

module.exports = router;
