const mongoose = require('mongoose');
const user_schema = mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
    id_image:{
        type:String,
        required:true
    },
    usename:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    applied_for:{
        type:String,
        required:true
    },
    
});
module.exports = users = mongoose.model("users",users) 