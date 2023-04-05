const router =  require('express').Router()
const {createEventMiddleware,updateEventMiddleware,deleteEventMiddleware}= require('../Middlewares/events_middleware')
const eventController = require('../Controllers/events_controller')
const auth = require('../Middlewares/auth_middleware')
router.post('/',auth.adminAuthorizer,createEventMiddleware, eventController.addEvents)
router.get('/', auth.userAuthorizer, eventController.getEvents)
router.put('/', auth.adminAuthorizer, updateEventMiddleware,eventController.updateEvent)
router.delete('/', auth.adminAuthorizer, deleteEventMiddleware,eventController.deleteEvent)
module.exports = router