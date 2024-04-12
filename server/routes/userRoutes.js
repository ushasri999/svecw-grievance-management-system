const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const {authorizeAdmin, authorizeStudent, authorizeComplaintRoute} = require('../middleware/auth');

router.post('/register', userControllers.userRegister);
router.post('/login', userControllers.userLogin);

router.get('/check_email', userControllers.checkEmail);
router.put('/update_password', userControllers.updatePassword);
router.post('/send_email', userControllers.sendEmail);

router.get('/admin', authorizeAdmin, (req, res) => {
    try{
        res.json({message: 'This route is accesible by admin only.'});
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Server error'});
    }
})

router.get('/student', authorizeStudent, (req, res) => {
    try{
        res.json({message: 'This route is accesible by students only.'});
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Server error'});
    }
    
})

router.get('/complaint', authorizeComplaintRoute, (req, res) => {
    try{
        res.json({message: 'Common route for complaints'});
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Server error'});
    }
})

module.exports = router;