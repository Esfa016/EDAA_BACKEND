const {
  createApplicantsDTO,
  updateApplicantsStatusDTO,
} = require("../Validators/applicant_validator");
const apply = function (req, res, next) {
  const { error } = createApplicantsDTO.validate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }
  next();
};
const changeStatusMiddleware = function (req, res, next) {
  const { error } = updateApplicantsStatusDTO.validate({
    id: req.query.id,
    status: req.body.status,
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  next();
};
module.exports = {
  apply,
  changeStatusMiddleware,
};
