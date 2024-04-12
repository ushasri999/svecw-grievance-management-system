const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        console.log(process.env.CONNECTION_STRING);
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to MongoDB!");
    }
    catch(error){
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectDB;