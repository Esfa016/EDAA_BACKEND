const date = new Date();
const mongoose = require('mongoose');
const status = {
    active:'active',
    suspended:'suspended',
}
const license_schema = mongoose.Schema({
    issue_Date:{
        type:Date,
        default:Date.now(date.getFullYear(),date.getMonth(),date.getDate())
    },
    expiry_date:{
      type:Date,
      default:Date(date.getFullYear()+2 ,date.getMonth(),date.getDate())
    },
    member:{
        type:mongoose.Types.ObjectId, ref:'users',
        required:true
    },
    status:{
        type:String,
        Enum:status,
        default:status.active
    }
})
module.exports =  license = mongoose.model('license', license_schema);