const express = require('express');
const router = express.Router();
const contactControllers = require('../controllers/contactControllers');


router.post('/postContact', contactControllers.postContact);

module.exports = router;