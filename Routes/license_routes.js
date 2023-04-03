const router = require('express').Router();
const {create} = require('../Controllers/license_controller')
const {createLicencseMiddleware}  = require('../Middlewares/license_middleware')
router.post('/',createLicencseMiddleware,create)
module.exports = router;