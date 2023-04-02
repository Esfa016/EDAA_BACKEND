const joi = require('joi')
const types =  require('../Constants/types')
const createApplicantsDTO = joi.object({
    applicant:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().error(new Error('invalid id')),
     applied_for: joi.string().required().valid(...Object.values(types))
})
module.exports = createApplicantsDTO;