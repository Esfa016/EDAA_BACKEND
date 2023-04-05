const router = require('express').Router();
const {create,renewId,getAllLicenses} = require('../Controllers/license_controller')
const {createLicencseMiddleware,updateLicenseMiddleware}  = require('../Middlewares/license_middleware')
const auth = require('../Middlewares/auth_middleware')
router.post('/', auth.adminAuthorizer, createLicencseMiddleware,create)
router.patch('/', auth.adminAuthorizer, updateLicenseMiddleware,renewId)
router.get('/',  auth.userAuthorizer,  getAllLicenses)
module.exports = router;