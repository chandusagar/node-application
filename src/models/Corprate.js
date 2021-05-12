const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CorprateSchema = Schema({
    companyName: {
        type:String
    },
    companyId: {
        type: Schema.Types.ObjectId, ref: 'Users'
    }
})

module.exports = Corprate = mongoose.model('Corprate',CorprateSchema);