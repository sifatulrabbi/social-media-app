const express = require('express');
const router = express.Router();
const {verify, createUser} = require('../auth');

/**
 * LOGIN route
 */
router.post('/auth/login', (req, res) => {
  verify(req.body.username, req.body.password, (err, result) => {
    if (err) {
      res.status(400).json({success: false, errors: err});
      return;
    } else if (!result) {
      res.status(404).json({success: false, message: 'User not found'});
      return;
    } else {
      res.status(200).json({success: true, data: result});
    }
  });
});

/**
 * SIGN UP route
 */
router.post('/auth/signup', async (req, res) => {
  createUser(req.body, (err, result) => {
    if (err) {
      res.status(400).json({success: false, errors: err});
      return;
    } else if (!result) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    } else {
      res.status(200).json({success: true, data: result});
    }
  });
});

/**
 * Health check route
 */
router.get('/', (req, res) => {
  res.status(200).json({success: true, message: 'Hello, world'});
});

module.exports = router;
