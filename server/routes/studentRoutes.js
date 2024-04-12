const express = require('express');
const router = express.Router();

const studentControlleres = require('../controllers/studentControllers');

router.post('/student', studentControlleres.postStudent);
router.get('/student/:student_id', studentControlleres.getStudentById);

module.exports = router;