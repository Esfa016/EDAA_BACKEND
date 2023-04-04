const router = require('express').Router()
const {getAllMember} = require('../Controllers/members_controller')
router.get('/',getAllMember)
module.exports = router;