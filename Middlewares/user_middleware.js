const createUserDTO = require('../Validators/user_validator').createUserDTO;
const createUserMiddleware = function(req,res){
const {error} = createUserDTO.validate(req.body);
if(error){return res.status(400).send(error.message)}
next()
}
module.exports = {
    createUserMiddleware
}
