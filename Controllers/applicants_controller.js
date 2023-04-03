
const applicants = require("../Models/applicants");
const {status} = require("../Constants/types")
const member = require('../Models/members');
const create = async (req, res) => {
  try {
    const data = await applicants.create(req.body);
    return res
      .status(201)
      .json({ data, data, success: true, message: "application submitted" });
  } catch (e) {
    return res.status(500).send(e);
  }
};
const getAll = async (req, res) => {
  try {
    const data = await applicants.aggregate([
      {
        $lookup: {
          from: "users",
          foreignField: "_id",
          localField: "applicant",
          as: "applicant_details",
        },
},
{
        $project: {
          "applicant_details.username": 0,
          "applicant_details.password": 0,
          
        },
}
     
    ]);
    return res.status(200).json({ data: data });
  } catch (e) {
    return res.status(500).send(e);
  }
};
const changeStatus = async(req,res)=>{
          try{   
                    const data = await applicants.findById(req.query.id);
                    if(!data){
                              return res.status(404).send('no applicant requests match the given id')
                    }
                    
                    if(req.body.status===status.accepted){
                   const newMember =  await member.create({
                              member:data.applicant,
                              membership:data.applied_for,
                    })
                     await applicants.findByIdAndDelete(data._id)
                      return res.status(201).json({
                              message:"successfully accepted the applicant request",
                              data:newMember
                      })
                    }
                    else if(req.body.status === status.declined){
                    data.status = req.body.status
                    await data.save()

                    return res.status(200).json({
                              message:"rejection successful",
                              success:true,
                              data:data
                    })
          }
          }
          catch(e){
                    return res.status(500).send(e)
          }
}
module.exports = {
  create,getAll,changeStatus
};
