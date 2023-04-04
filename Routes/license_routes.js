const router = require('express').Router();
const {create,renewId,getAllLicenses} = require('../Controllers/license_controller')
const {createLicencseMiddleware,updateLicenseMiddleware}  = require('../Middlewares/license_middleware')
router.post('/',createLicencseMiddleware,create)
router.patch('/',updateLicenseMiddleware,renewId)
router.get('/',getAllLicenses)
module.exports = router;