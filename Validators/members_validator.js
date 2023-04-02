const joi = require('joi')
const types = require('../Constants/types')
const createMemberDTO = joi.object({
    member:joi.string().required().regex(/^[0-9a-fA-F]{24}$/).error(new Error('invalid id')),
    membership:joi.string().required().valid(...Object.values(types))
})
module.exports = createMemberDTO