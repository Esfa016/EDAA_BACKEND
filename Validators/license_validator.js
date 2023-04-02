const joi = require('joi')
const licenseCreateDTO = joi.object({
    member:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().error(new Error('invalid id'))
});
module.exports = {
    licenseCreateDTO
}