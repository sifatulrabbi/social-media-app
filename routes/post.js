const router = require('express').Router();
const {single} = require('../lib/services/uploadFiles').single;

router.post('/new', single, (req, res) => {});
