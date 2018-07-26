module.exports = {
    current: process.env.NODE_ENV || 'development',
    isProd: this.current === 'production'
}