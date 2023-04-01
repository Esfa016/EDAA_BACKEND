const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const rateLimiter = require('express-rate-limit');
const expressFileUpload = require('express-fileupload');
const PORT = process.env.PORT || 4000
mongoose.connect(process.env.MOGOOSE_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server up and runing on ${PORT}`)
    })
}).catch(err=>console.log(err))
