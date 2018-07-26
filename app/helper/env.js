const current = process.env.NODE_ENV || 'development'
const isProd = current === 'production'

module.exports = {
    current,
    isProd
}