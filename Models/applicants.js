const mongoose = require('mongoose');
const allowed_types  =  require('../Constants/types')
const request_status = {
    pending:'pending',
    accepted:'accepted',
    declined:'declined'
}

const applicants_schema = mongoose.Schema({
    applicant:{
        type: mongoose.Types.ObjectId, ref:'users',
        required:true
    },
    status:{
        type:String,
        Enum:request_status,
        default:request_status.pending
    },
    applied_for:{
        type:String,
        Enum:allowed_types,
        required:true
    }

    
})
module.exports = applications = mongoose.model('applications',applicants_schema)