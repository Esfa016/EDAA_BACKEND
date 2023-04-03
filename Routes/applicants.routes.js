const router = require('express').Router();
const {create,getAll,changeStatus} = require('../Controllers/applicants_controller')
const {apply,changeStatusMiddleware} = require('../Middlewares/applicants_middleware')
router.post('/',apply,create)
router.get('/',getAll)
router.patch('/',changeStatusMiddleware,changeStatus)
module.exports = router;