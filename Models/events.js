const mongoose = require('mongoose');
const events_schema = mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    annouced_on:{type:String,default:new Date().toDateString()}
})
module.exports = events = mongoose.model('events',events_schema)