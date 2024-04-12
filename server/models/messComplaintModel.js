const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    comment: String,
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    is_satisfied: Boolean
})

const MessComplaint = mongoose.model('MessComplaint', complaintSchema);
module.exports = MessComplaint;