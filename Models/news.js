const mongoose = require('mongoose');
const news_schmea = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});
module.exports = news = mongoose.model('news',news_schmea)
