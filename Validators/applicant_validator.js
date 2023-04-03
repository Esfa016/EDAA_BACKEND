const joi = require('joi')
const {allowed_types} =  require('../Constants/types')
const {status}= require('../Constants/types')
const createApplicantsDTO = joi.object({
    applicant:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().error(new Error('please submit a valid id')),
     applied_for: joi.string().required().valid(...Object.values(allowed_types))
})
const updateApplicantsStatusDTO = joi.object({
    id:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().error(new Error('please submit a valid id ')),
    status:joi.string().required().valid(...Object.values(status))
})
module.exports = {createApplicantsDTO,updateApplicantsStatusDTO};