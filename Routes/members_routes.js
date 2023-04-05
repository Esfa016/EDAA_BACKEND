const router = require('express').Router()
const {getAllMember} = require('../Controllers/members_controller')
const auth = require('../Middlewares/auth_middleware')
router.get('/',  auth.adminAuthorizer, getAllMember)
module.exports = router;