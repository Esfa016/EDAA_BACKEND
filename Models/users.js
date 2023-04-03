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
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    youtube_link:{
        type:String,
        required:true
    }
});
module.exports = users = mongoose.model("users",user_schema) 