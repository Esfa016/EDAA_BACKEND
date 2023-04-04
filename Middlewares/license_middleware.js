const {licenseCreateDTO} = require('../Validators/license_validator') 
const createLicencseMiddleware = (req,res,next)=>{
          const {error} = licenseCreateDTO.validate(req.body);
          if(error) return res.status(400).send(error.message)
          next()
}
const updateLicenseMiddleware = (req,res,next)=>{
          const {error} = licenseCreateDTO.validate({member:req.query.id})
                    if(error) return res.status(400).send(error.message)
                    next()
}
module.exports = {
          createLicencseMiddleware,updateLicenseMiddleware
}