const mongoose = require('mongoose');
const allowed_types = require('../Constants/types')
const members_schema = mongoose.Schema({
 member:{
    type:mongoose.Types.ObjectId, ref:'users',
    required:true
 },
 membership:{
    type:String,
    required:true,
    Enum:allowed_types
 },
 license:{
    type:mongoose.Types.ObjectId, ref:'licenses',
    required:false
 }
});
module.exports = members = mongoose.model('members',members_schema)