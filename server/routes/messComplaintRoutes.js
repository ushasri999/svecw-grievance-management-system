const express = require('express');
const { addMessComplaint, getAverageSatisfaction } = require('../controllers/messComplaintControllers');
const router = express.Router();

router.post('/addMessComplaint', addMessComplaint);
router.get('/getAverageSatisfaction', getAverageSatisfaction);

module.exports = router;