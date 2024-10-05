const Contact = require("../models/contactModel");

exports.postContact = async (req, res) => {
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email, and message' });
      }
      const newContact = new Contact({
        name,
        email,
        message
      });
      await newContact.save();
      res.status(201).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  
