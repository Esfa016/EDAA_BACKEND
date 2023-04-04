const license = require('../Models/license')
const member =  require('../Models/members')
const create = async(req,res)=>{
          try{
          const exists = await member.findById(req.body.member)
          if(!exists){return res.status(400).send('there is no member by this id')}
          const data = await license.create(req.body)
          return res.status(200).json({
                    message:'successfully licensed 1 member',
                    success:true,
                    data:data
          })
}

catch(e){
          return res.status(500).send(e)
}
}
const renewId = async(req,res)=>{
          const data = await license.findById(req.query.id);
          if(!data) return res.status(404).send('No license found by this id' + req.query.id)
          const date = new Date();
const expiry = date.setFullYear(date.getFullYear()+2)
          if(data.expiry_date > Date.now()) return res.status(400).send('The  license is not expired')
          data.expiry_date = expiry
          await data.save();
          return res.status(200).json({
                    message:'successfully updated license',
                    data:data,
                    success:true
          })
}
module.exports = {create,renewId}