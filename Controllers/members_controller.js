const { MongooseError } = require('mongoose');
const members = require('../Models/members');
const getAllMember = async(req,res)=>{
          try{
               const data = await members.aggregate([
                    {
                              $lookup: {
                                     from:'users',
                                     localField:"member",
                                     foreignField:"_id",
                                     as :"member_details"
                              }

                    },
                    {
                              $project:{
                                        "member":0,
                                        "member_details.username":0,
                                        "member_details.password":0,
                                        "member_details._id":0
                              }
                    }
               ])
               return res.status(200).json({
                    success:true,
                    data:data
               })
          }
          catch(e){
                    return res.status(500).send(e)
          }
          
}
module.exports = {
          getAllMember
}