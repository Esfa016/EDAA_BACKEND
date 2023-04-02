const joi = require('joi')
const createEventDTO = joi.object({
    title:joi.string().max(10).required(),
    description:joi.string().min(10).max(100).required(),
})
module.exports = {createEventDTO}