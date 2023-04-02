const joi = require('joi');
const createUserDTO = joi.object({
    full_name:joi.string().required().max(20),
    username:joi.string().required().max(5).min(3),
    password:joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/).error(new Error('please provide a strong password')),
    youtube_link:joi.required().regex(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/)
});
const loginUserDTO = joi.object({
    username:joi.string().required().required(),
    password:joi.string().required()
})

module.exports = {createUserDTO,loginUserDTO};