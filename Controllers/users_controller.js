const users = require("../Models/users");
const cloudinary = require("cloudinary");

cloudinary.v2.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});
const create = async (req, res) => {
  try {
    const imagePath = await (
      await cloudinary.v2.uploader.upload(req.files.image, {
        folder: "users/kebele_images",
      })
    ).secure_url;
    const data = await users.create({
      ...req.body,
      id_image: imagePath,
    });
    return res.status(201).json({
      success: true,
      message: "successfully registerd",
    });
  } catch (e) {
    return res.status(500).send(e);
  }
};
module.exports = { create };
