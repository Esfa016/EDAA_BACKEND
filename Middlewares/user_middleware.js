const createUserDTO = require('../Validators/user_validator').createUserDTO;

const createUserMiddleware = function(req,res,next){
 
const {error} = createUserDTO.validate(req.body);
if(error){return res.status(400).send(error.message)}
if(!req.files||!req.files.image) return res.status(400).send('please upload the picture if your id card')

const allowedFileTypes = /jpeg|jpg|png|gif/;
  const fileExtension = req.files.image.name.split('.').pop();
  if (!allowedFileTypes.test(fileExtension)) {
    return res.status(400).send('Invalid file type.');
  }

next()
}
module.exports = {
    createUserMiddleware
}
