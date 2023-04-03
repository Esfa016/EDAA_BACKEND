const express = require('express')
const app = express();
const user_route =  require('./Routes/user_routes')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const rateLimiter = require('express-rate-limit');
const uploader = require('express-fileupload');
const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(uploader({limits:{fileSize:10000000},abortOnLimit:true}))
app.use(cors())
app.use('/users',user_route)
mongoose.connect(process.env.MOGOOSE_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server up and runing on ${PORT}`)
    })
}).catch(err=>console.log(err))
