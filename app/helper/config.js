const logger = require('./log')
const { current: env } = require('./env')

module.exports = config => {
    const _config = config[env]
    if (!_config) {
        logger.fatal(`config:${config}中不包含env:${env}的配置`)
        throw new Error(JSON.stringify(config) + `中不包含env:${env}的配置`)
    }
    return _config
}