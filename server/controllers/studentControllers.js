const Block = require("../models/blockModel");
const Student = require("../models/studentModel");

exports.postStudent = async (req, res, newUser) => {
    try{
        const {block_name, usn, room} = req.body;
            const block = await Block.findOne({block_name});

            if(!block){
                return res.json({status: 'error', message: 'block not found'});
            }
            // const blockObjectId = mongoose.Types.ObjectId(block_id);
            
            
            const student = new Student({
                user_id: newUser._id, 
                block_id: block._id, 
                usn, 
                room, 
            });
            
            await student.save();
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Server error'});
    }
};

exports.getStudentById = async (req, res) => {
    try{
        const {student_id} = req.params;
        const student = await Student.findOne({_id: student_id});

        if(!student){
            return res.json({status: 'error', message: 'Student not found'});
        }

        res.json(student);
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Server error'});
    }
};