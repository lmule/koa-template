const Koa = require('koa')
const { current } = require('./app/helper/env')

const app = new Koa()
const middleware = require('./app/middleware')
middleware(app)

const defaultPort = require('./config/param').defaultPort
let port = process.env.PORT || defaultPort

process.on('uncaughtException', err => {
    console.error('未捕获的异常: ' + err)
})

app.listen(port, () => {
    console.log(`服务器端正常启动，端口号: ${port}，当前环境：${current}`)
});
