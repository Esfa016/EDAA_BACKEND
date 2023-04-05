const router = require('express').Router();
const {create,getAll,changeStatus} = require('../Controllers/applicants_controller')
const {apply,changeStatusMiddleware} = require('../Middlewares/applicants_middleware')
const auth = require('../Middlewares/auth_middleware')
router.post('/',auth.userAuthorizer, apply,create)
router.get('/',  auth.adminAuthorizer, getAll)
router.patch('/',auth.adminAuthorizer,changeStatusMiddleware,changeStatus)
module.exports = router;