const router = require('express').Router();
const {create,renewId} = require('../Controllers/license_controller')
const {createLicencseMiddleware,updateLicenseMiddleware}  = require('../Middlewares/license_middleware')
router.post('/',createLicencseMiddleware,create)
router.patch('/',updateLicenseMiddleware,renewId)
module.exports = router;