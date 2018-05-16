const router = require('koa-router')()
const controller = require('../controller/TestController')

router.prefix('/test');

router.get('/index', controller.test)

module.exports = router
