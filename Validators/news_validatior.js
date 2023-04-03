const joi = require("joi");
const createNewsDTO = joi.object({
  title: joi.string().max(10).required(),
  description: joi.string().required().max(50),
});
module.exports = { createNewsDTO };
