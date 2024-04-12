const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    complaint_name: String,
    block_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Block' },
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    description: String,
    room: String,
    is_completed: Boolean,
    created_at: Date,
    assigned_at: Date,
})

const Complaint = mongoose.model('Complaint', complaintSchema);
module.exports = Complaint;