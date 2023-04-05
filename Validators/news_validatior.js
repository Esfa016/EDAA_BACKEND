const joi = require("joi");
const createNewsDTO = joi.object({
  title: joi.string().max(10).required(),
  description: joi.string().required().max(50),
});
const updateNewsDTo = joi.object({
  id:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().error(new Error('please submit a valid id')),
  title: joi.string().max(10).optional(),
  description: joi.string().optional().max(50),
})
const deleteNewsDTO = joi.object({
  id:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().error(new Error('please submit a valid id')),
})
module.exports = { createNewsDTO , updateNewsDTo, deleteNewsDTO};
