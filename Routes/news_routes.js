const newsMiddleware = require('../Middlewares/news_middleware')
const newsController = require('../Controllers/news_controller')
const authMiddleware = require('../Middlewares/auth_middleware')
const router = require('express').Router()

router.post('/', authMiddleware.adminAuthorizer, newsMiddleware.createNewsMiddleware, newsController.addNews)
router.get('/', authMiddleware.userAuthorizer, newsController.getNews)
router.put('/', authMiddleware.adminAuthorizer, newsMiddleware.updateNewsMiddleware, newsController.updateNews)
router.delete('/', authMiddleware.adminAuthorizer, newsMiddleware.deleteNewsMiddleware, newsController.deleteNews)

module.exports = router;