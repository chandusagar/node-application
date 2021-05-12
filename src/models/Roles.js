const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolesSchema = Schema({
    corprateId: {
        type: Schema.Types.ObjectId, ref: 'Corprate'
    },
    superAdmin: {
        type: String
    },
    admin: {
        type: String
    },
    user: {
        type: String
    }
});

module.exports =Roles= mongoose.model('Roles', RolesSchema);