const express = require('express')
const app = express();
const user_route =  require('./Routes/user_routes')
const mongoose = require('mongoose')
const members = require('./Routes/members_routes')
require('dotenv').config()
const applicants_route = require('./Routes/applicants.routes')
const cors = require('cors')
const license =  require('./Routes/license_routes')
const rateLimiter = require('express-rate-limit');
const uploader = require('express-fileupload');
const PORT = process.env.PORT || 4000
const helmet = require('helmet');
const xss =  require('xss-clean');
//const morgan = require('morgan');
//app.use(morgan('short'))
const limiter = rateLimiter({
max:100,
windowsMs:60*60*1000,
message:'too many requests. please try again after one hour'
})
app.use(limiter)
app.use(helmet())
app.use(xss())
app.use(express.json())
app.use(uploader({limits:{fileSize:10000000},abortOnLimit:true,useTempFiles:true,tempFileDir:'/tmp'}))
app.use(cors())
app.use('/users',user_route)
app.use('/applicants',applicants_route)
app.use('/license',license)
app.use('/members',members)
mongoose.connect(process.env.MOGOOSE_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server up and runing on ${PORT}`)
    })
}).catch(err=>console.log(err))
