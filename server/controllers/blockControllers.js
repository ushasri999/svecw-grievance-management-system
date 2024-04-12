const Block = require("../models/blockModel");

//clared
exports.addBlock = async (req, res) => {
    try{
        const {block_name} = req.body;

        const block = new Block({
            block_name
        });

        await block.save();

        res.json(block);
    }
    catch(err){
        console.error(err);
        res.json({status: 'error', message: 'Server error'});
    }
};
