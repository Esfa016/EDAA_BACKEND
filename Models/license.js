const date = new Date();
const expiry = date.setFullYear(date.getFullYear())
const mongoose = require('mongoose');
const status = {
    active:'active',
    suspended:'suspended',
}
const license_schema = mongoose.Schema({
    issue_Date:{
        type:Date,
        default:date.toDateString()
    },
    expiry_date:{
      type:Date,
      default:date.setFullYear(date.getFullYear() +2)
    },
    member:{
        type:mongoose.Types.ObjectId, ref:'members',
        required:true
    },
    status:{
        type:String,
        Enum:status,
        default:status.active
    }
})
module.exports =  license = mongoose.model('license', license_schema);