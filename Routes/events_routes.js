const router =  require('express').Router()
const {createEventMiddleware,updateEventMiddleware,deleteEventMiddleware}= require('../Middlewares/events_middleware')
const eventController = require('../Controllers/events_controller')
router.post('/',createEventMiddleware, eventController.addEvents)
router.get('/',eventController.getEvents)
router.put('/',updateEventMiddleware,eventController.updateEvent)
router.delete('/',deleteEventMiddleware,eventController.deleteEvent)
module.exports = router