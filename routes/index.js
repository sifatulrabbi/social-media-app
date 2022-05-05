const express = require('express');
const router = express.Router();

/**
 * Health check route
 */
router.get('/', (req, res) => {
    res.status(200).json({success: true, message: 'Hello world'});
});

module.exports = router;
