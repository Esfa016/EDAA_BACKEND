const users = require("../Models/users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cloudinary = require("cloudinary").v2;
require('dotenv').config()
cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});
const create = async (req, res) => {
      
  try {
          const exists = await users.findOne({username:req.body.username});
          if(exists) return res.status(400).send('there is a user by this account')
    const imagePath =  
      await (await cloudinary.uploader.upload(req.files.image.tempFilePath, {folder: "users/kebeleimages",})).secure_url;
    console.log(imagePath)
    const hashed =await bcrypt.hash(req.body.password,10)
    const data = await users.create({
      full_name:req.body.full_name,
      username:req.body.username,
      password:hashed,
      youtube_link:req.body.youtube_link,
      id_image: imagePath,
    });
    return res.status(201).json({
      success: true,
      message: "successfully registerd",
      data:{
         full_name: data.full_name,
         id:data.id_image,
         youtube_link:data.youtube_link


      }
    });
  } catch (e) {
          console.log(e)
    return res.status(500).send(e);
  }
};
const login = async(req,res)=>{
          try{
                 const data = await users.findOne({username:req.body.username})
                 if(!data)return res.status(401).send('invalid credentials')
                  const match = await bcrypt.compare(req.body.password,data.password)
                  if(!match) return res.status(401).send('invalid credentials')
                 const accessToken = jwt.sign({id:data._id, role:'user'},process.env.JWT_SECRET,{
                    expiresIn:'1d',

                 })
                 return res.status(200).json({
                    message:'login successful',
                    accessToken:accessToken,
                     success:true
                 })

                 
          }
          catch(e){

          }
}
module.exports = { create,login };
