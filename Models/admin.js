const mongoose = require('mongoose');
const admin_schema = mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true}
})
module.exports = admin = mongoose.model('admin',admin_schema) 