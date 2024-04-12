const Block = require("../models/blockModel");
const Warden = require("../models/wardenModel");

exports.postWarden = async (req, res, newUser) => {
    try{
        const {block_name, usn} = req.body;
            const block = await Block.findOne({block_name});

            if(!block){
                return res.json({status: 'error', message: 'block not found'});
            }
            // const blockObjectId = mongoose.Types.ObjectId(block_id);
            
            
            const warden = new Warden({
                user_id: newUser._id, 
                block_id: block._id, 
                usn, 
            });
            
            await warden.save();
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Server error'});
    }
};

exports.getWardenById = async (req, res) => {
    try{
        const {warden_id} = req.params;
        const warden = await warden.findOne({_id: warden_id});

        if(!warden){
            return res.json({status: 'error', message: 'warden not found'});
        }

        res.json(warden);
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Server error'});
    }
};