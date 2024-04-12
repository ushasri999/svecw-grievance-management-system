const express = require('express');
const router = express.Router();
const complaintControllers = require('../controllers/complaintControllers');

router.post('/complaints', complaintControllers.postComplaints);
router.get('/complaints', complaintControllers.getAllComplaintsByUser);
router.delete('/complaints/:id', complaintControllers.deleteComplaints);
router.put('/complaints/:id', complaintControllers.putComplaintsById);
// router.get('/mycomplaints', complaintControllers.getAllComplaintsByStudentId);
router.get('/userType', complaintControllers.getUserType);
router.get('/uesrDetails/:id', complaintControllers.getUserDetails);

module.exports = router;