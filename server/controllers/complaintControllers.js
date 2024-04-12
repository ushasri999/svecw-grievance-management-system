const User = require("../models/userModel");
const { jwtDecoder } = require("../utils/jwtToken")
const { ObjectId } = require("mongoose").Types;
const Complaint = require('../models/complaintModel');
const Student = require("../models/studentModel");

exports.decodeUser = async (token) => {
    try{
        const decodedToken = jwtDecoder(token);
        console.log(decodedToken);

        const {user_id, type} = decodedToken.user;
        let userInfo;

        if(type === "student"){
            const student = await User.findOne({_id: ObjectId(user_id), type: "student"});

            if(student){
                userInfo = {
                    student_id: student._id, 
                    room: student.room, 
                    block_id: student.block_id
                };
            }
        }

        if(type === "warden"){
            const warden = await User.findOne({_id: ObjectId(user_id), type: "warden"});

            if(warden){
                userInfo = {
                    warden_id: warden._id, 
                    block_id: warden.block_id,
                };
            }
        }

        return userInfo;
    }
    catch(err){
        console.error("here111", err.message);
    }
} 

exports.postComplaints = async (req, res) => {
    try{
        const token = req.headers.authorization;
        console.log(token);
        const decodedToken = await jwtDecoder(token);
        console.log('decodedToken = ', decodedToken);

        const student = await Student.findOne({user_id: decodedToken.user.user_id})
        console.log('student = ', student);
        const {user_id, block_id} = student;
        // console.log('user = ', user);
        console.log('user_id = ', user_id);
        console.log('block_id = ', block_id);

        const {complaint_name, description, room} = req.body;

        const newComplaint = new Complaint({
            complaint_name,
            block_id, 
            student_id: student._id,
            description, 
            room, 
            is_completed: false, 
            created_at: new Date(), 
            assigned_at: null
        });

        await newComplaint.save();

        res.json(newComplaint);
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Server error'});
    }
};

exports.putComplaintsById = async (req, res) => {
    try{
        console.log("came to update complaint status")
        const token = req.headers.authorization;
        const decodedToken = jwtDecoder(token);
        console.log(decodedToken);
        const {user_id, type} = decodedToken.user;

        const {id} = req.params;
        console.log('req.params = ', req.params)
        console.log('id = ', id)

        if(type == 'warden'){
            console.log("in if condition")
            const complaint = await Complaint.findById(id);
            console.log('complaint to be updated = ', complaint);
            
            if(!complaint){
                return res.json({status: 'error', message: 'Complaint not found'});
            }
            
            complaint.is_completed = true;
            complaint.assigned_at = new Date();
            
            const updatedComplaint = await complaint.save();
            console.log('updatedComplaint = ', updatedComplaint);
            
            res.json(updatedComplaint);
        }
        else{
            res.json({status: 'error', message: 'Complaint not found'});
        }
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Internal Server Error'});
    }
};

exports.getAllComplaintsByUser = async (req, res) => {
    try{
        console.log('we are in getAllComplaintsByUser')
        const token = req.headers.authorization;
        if(!token){
            res.status({status: 'error', message: 'Unautorized - Token not provided'});
        }
        console.log(token);
        
        const decodedToken = jwtDecoder(token);
        console.log(decodedToken);

        const {user_id, type} = decodedToken.user;
        console.log("type", type);

        if(type == 'student'){
            // console.log(Student.findOne(decodedToken.user._id));
            const student = await Student.findOne({ user_id: user_id});
            console.log('student = ', student);
            const allComplaints = await Complaint.find({student_id: student._id}).sort({created_at: -1});
            res.json(allComplaints);
        }
        else if(type == 'warden'){
            const allComplaints = await Complaint.find().sort({created_at: -1});
            res.json(allComplaints);
        }
        else{
            res.status(403).json({error: 'Unathorized'});
        }
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Internal Server error'});
    }
};

exports.getAllComplaintsByStudentId = async (req, res) => {
    try{
        const token = req.headers.authorization;
        if(!token){
            res.status({status: 'error', message: 'Unautorized - Token not provided'});
        }
        console.log(token);
        
        const decodedToken = jwtDecoder(token);
        console.log(decodedToken);

        const {user_id, type} = decodedToken.user;
        console.log("type", type);

        if(type == 'student'){
            const allComplaints = await Complaint.find({student_id: decodedToken.user._id}).sort({created_at: -1});
            res.json(allComplaints);
        }
        else{
            res.status(403).json({error: 'Unathorized'});
        }
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Internal Server error'});
    }
};

exports.getUserType = async (req, res) => {
    try{
        console.log('came to getUserType')
        const token = req.headers.authorization;
        console.log('token', token);

        const decodedToken = jwtDecoder(token);
        console.log('decode', decodedToken);
        const {type} = decodedToken.user;
        console.log('type', type);

        res.json({userType: type});
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Internal Server Error'});
    }
};

exports.getUserDetails = async (req, res) => {
    try {
      const token = req.headers.authorization;
      console.log(token);
  
      // Assuming you have a function jwtDecoder that decodes the token
      const decodedToken = jwtDecoder(token);
      console.log(decodedToken);
  
      const { user_id, type } = decodedToken.user;
  
      console.log('Decoded Token:', decodedToken);
      console.log('User Type:', type);
      console.log('User ID:', user_id);
  
      if (type === 'student') {
        const studentDetails = await User.aggregate([
          {
            $match: {
              user_id: user_id,
              type: 'student'
            }
          },
          {
            $lookup: {
              from: 'blocks',
              localField: 'block_id',
              foreignField: 'block_id',
              as: 'block'
            }
          },
          {
            $project: {
              _id: 0,
              full_name: 1,
              email: 1,
              phone: 1,
              usn: '$student_info.usn',
              block_id: '$block.block_id',
              block_name: '$block.block_name',
              room: '$student_info.room'
            }
          }
        ]);
  
        res.json(studentDetails);
      }
  
      if (type === 'warden') {
        const wardenDetails = await User.findOne({ user_id, type: 'warden' }, {
          _id: 0,
          full_name: 1,
          email: 1,
          phone: 1
        });
  
        res.json(wardenDetails);
      }
  
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }


exports.deleteComplaints = async (req, res) => {
    try {
        const token = req.headers.authorization;
        console.log(token);

        const decodedToken = jwtDecoder(token);
        console.log(decodedToken);

        const { type } = decodedToken.user;
        const { id } = req.params;

        if (type === 'warden') {
            const deletedComplaint = await Complaint.findByIdAndDelete(id);

            if (!deletedComplaint) {
                return res.status(404).json({ error: 'Complaint not found' });
            }

            res.json({ message: 'Complaint deleted' });
        } else {
            res.status(403).json({ error: 'Unauthorized' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
