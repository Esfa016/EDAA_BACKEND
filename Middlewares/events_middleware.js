const {createEventDTO,updateEventDTO,deleteEventDTO} = require('../Validators/events_validator')
const createEventMiddleware = (req,res,next)=>{
          const {error} = createEventDTO.validate(req.body)
          if(error) return res.status(400).send(error.message)
          next()
}
const updateEventMiddleware = (req,res,next)=>{
          const {error} = updateEventDTO.validate({
                    id:req.query.id,
                    title:req.body.title,
                    description:req.body.description
          })
          if(error) return res.status(400).send(error.message)
          next()
}
const deleteEventMiddleware = (req,res,next)=>{
          const {error} = deleteEventDTO.validate(req.query)
          if(error) return res.status(400).send(error.message)
          next()
}
module.exports = {
          createEventMiddleware,updateEventMiddleware,deleteEventMiddleware
}