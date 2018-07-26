module.exports = app => {
    app.use(async (ctx, next) => {
        if ('/favicon.ico' != ctx.path) {
            await next()
        }
    })
}