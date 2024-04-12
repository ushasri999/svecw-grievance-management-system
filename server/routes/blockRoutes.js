const express = require('express');
const router = express.Router();
const blockControllers = require('../controllers/blockControllers')

router.post('/addBlock', blockControllers.addBlock);

module.exports = router;