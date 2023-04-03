const router = require('express').Router();
const {create} = require('../Controllers/users_controller')
const {createUserMiddleware} = require('../Middlewares/user_middleware');
router.post('/',createUserMiddleware,create)
module.exports = router;