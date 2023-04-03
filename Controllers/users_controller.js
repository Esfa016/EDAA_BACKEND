const users = require("../Models/users");
const cloudinary = require("cloudinary").v2;
require('dotenv').config()
cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});
const create = async (req, res) => {
      
  try {
    const imagePath =  
      await (await cloudinary.uploader.upload(req.files.image.tempFilePath, {folder: "users/kebeleimages",})).secure_url;
    console.log(imagePath)
    const data = await users.create({
      full_name:req.body.full_name,
      username:req.body.username,
      password:req.body.password,
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
module.exports = { create };
