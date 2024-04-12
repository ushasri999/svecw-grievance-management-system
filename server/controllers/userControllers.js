const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const Student = require('../models/studentModel');
const {jwtGenerator, jwtDecoder} = require('../utils/jwtToken')
const mongoose = require('mongoose');
const Block = require('../models/blockModel');
const nodemailer = require('nodemailer');
const { postStudent } = require('./studentControllers');
const { postWarden } = require('./wardenController');

exports.userRegister = async (req, res) => {
    const {full_name, email, phone, password, type} = req.body;

    try{
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.json({status: 'error', message: 'User already exists'});
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            full_name, 
            email, 
            phone, 
            password: hashedPassword, 
            type
        });

        await newUser.save();
        console.log(newUser);

        const jwtToken = jwtGenerator(newUser._id, newUser.type);

        if(type === "student"){
          await postStudent(req, res, newUser);
        }
        else{
          await postWarden(req, res, newUser);
        }


        const decodedToken = jwtDecoder(jwtToken);
        console.log('decoded token ', decodedToken);
        return res.json({jwtToken});
    }
    catch(err){
        console.error(err);
        res.json({status: "error", message: "Server error"});
    }
}

exports.userLogin = async (req, res) => {
    const {email, password} = req.body;

    console.log('email = ', email);
    console.log('password = ', password);
    
    try{
      const user = await User.findOne({email});
      console.log('user = ', user);

        if(!user){
            return res.json({status: 'error', message: 'User does not exists'});
        }

        const validPassword = await bcrypt.compare(password, user.password);


        if(!validPassword){
            return res.json({status: 'error', message: 'Invalid Password'});
        }

        const jwtToken = jwtGenerator(user._id, user.type);
        console.log(jwtDecoder(jwtToken));

        console.log(jwtToken);
        return res.json({status: 'success', token: jwtToken});
    }
    catch(err){
        console.error(err);
        res.json({status: "error", message: "Server error"});
    }
}

// verify the email exist
exports.checkEmail = async (req, res) => {
    const email = req.query.email;
    console.log('Received email:', email);
    try {
      const user = await User.findOne({ email });
      if (user) {
        res.json({status: 'success', message: 'Email exists in the database' });
      } else {
        console("User with this email does not exist!");
        alert("User with this email does not exist!");
        res.json({status: 'not found', message: 'Email does not exist in the database' });
      }
    } catch (error) {
      console.log(error);
      res.json({status: 'error', message: 'An error occurred while checking the email' });
    }
  };
  
  exports.updatePassword = async (req, res) => {
    console.log("called update_password controller");
    const { email, newPassword } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({status: 'error', message: 'User not found' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      user.password = hashedPassword;
      await user.save();
  
      res.json({status: 'success', message: 'Password updated successfully' });
    } catch (error) {
      console.error(error);
      res.json({status: 'error', message: 'An error occurred while updating the password' });
    }
  };
  
  
  exports.sendEmail = (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const { recipient_email, OTP } = req.body;
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: recipient_email,
      subject: 'PASSWORD RESET',
      html: `<html>
               <body>
                 <h2>Password Recovery</h2>
                 <p>Use this OTP to reset your password. OTP is valid for 1 minute</p>
                 <h3>${OTP}</h3>
               </body>
             </html>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: "An error occurred while sending the email" });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send({ message: "Email sent successfully" });
      }
    });};