const createUserDTO = require('../Validators/user_validator').createUserDTO;
const createUserMiddleware = function(req,res,next){
const {error} = createUserDTO.validate(req.body);
if(error){return res.status(400).send(error)}
if(!req.files||!req.files.image) return res.status(400).send('please upload the picture if your id card')
next()
}
module.exports = {
    createUserMiddleware
}
