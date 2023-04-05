const joi = require('joi')
const createEventDTO = joi.object({
    title:joi.string().max(10).required(),
    description:joi.string().min(10).max(100).required(),
})
const updateEventDTO = joi.object({
    id:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().error(new Error('please submit a valid id')),
    title:joi.string().max(10).optional(),
    description:joi.string().min(10).max(100).optional(),
})
const deleteEventDTO = joi.object({
    id:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().error(new Error('please submit a valid id')),
})
module.exports = {createEventDTO,updateEventDTO,deleteEventDTO}
