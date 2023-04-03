const router = require('express').Router();
const {create,login} = require('../Controllers/users_controller')
const {createUserMiddleware,loginMiddleware} = require('../Middlewares/user_middleware');
router.post('/',createUserMiddleware,create)
router.post('/login',loginMiddleware,login)
module.exports = router;