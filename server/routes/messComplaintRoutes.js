const express = require('express');
const { addMessComplaint, getAverageSatisfaction, getAllMessComplaints } = require('../controllers/messComplaintControllers');
const router = express.Router();

router.post('/addMessComplaint', addMessComplaint);
router.get('/getAverageSatisfaction', getAverageSatisfaction);
router.get('/getAllMessComplaints', getAllMessComplaints);


module.exports = router;
