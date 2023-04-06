const newsDto = require('../Validators/news_validatior')
const createNewsMiddleware = (req, res, next) => { 
          const { error } = newsDto.createNewsDTO.validate(req.body)
          if (error) return res.status(400).send(error.message)
          next()
}
const updateNewsMiddleware = (req, res, next) => { 
          const { error } = newsDto.updateNewsDTo.validate({
                    id: req.query.id,
                    title: req.body.title,
                    description:req.body.description
          })
          if (error) return res.status(400).send(error.message)
          next()
}
const deleteNewsMiddleware=(req,res,next)=>{
          const { error } = newsDto.deleteNewsDTO.validate(req.query)   
          if (error) return res.status(400).send(error.message)
          next();
}
module.exports = {
          createNewsMiddleware,updateNewsMiddleware,deleteNewsMiddleware
}