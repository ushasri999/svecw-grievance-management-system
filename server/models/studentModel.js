const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    block_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Block' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    usn: String,
    room: String,
})

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;