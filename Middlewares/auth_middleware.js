const jwt = require('jsonwebtoken')
const users = require('../Models/users')

const adminAuthorizer = async(req,res,next)=>{
          const authHeader = req.headers["authorization"]
          const token = authHeader && authHeader.split(' ')[1]
          if(!token) return res.status(401).send('Please provide your claims')
          jwt.verify(token, process.env.JWT_SECRET,async (err,user)=>{
                    if(err) return res.status(401).send('Unauthorized')
                    const isAdmin  = await users.findById(user.id)
                    if(!isAdmin || isAdmin.role!=='admin') return res.status(401).send('Unauthorized for this service')
                    req.user= isAdmin
                    console.log(isAdmin)
                    next()
          })
}

const userAuthorizer = async(req,res,next)=>{
          const authHeader = req.headers["authorization"]
          const token = authHeader && authHeader.split(' ')[1]
          if(!token) return res.status(401).send('Please provide your claims')
          jwt.verify(token,process.env.JWT_SECRET,async(err,user)=>{
                    if(err) return res.status(401).send('Unauthorized')
                    const isUser = await users.findById(user.id);
                    console.log(isUser)
                    if(!isUser) return res.status(401).send('Unauthorized for this service')
                    req.user = isUser
                    next();
          })
}

module.exports = {adminAuthorizer,userAuthorizer}