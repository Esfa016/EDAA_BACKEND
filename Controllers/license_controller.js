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
module.exports = {create}