const mongoose = require('mongoose')
const wardenSchema = new mongoose.Schema({
    block_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Block' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    usn: String
}
)

const Warden = mongoose.model("Warden", wardenSchema);
module.exports = Warden;