const config = require('../app/helper/config')

let params = {
    "defaultPort": "<%- port%>"
}

let envParams = {
    'development': {
        'serverHost': 'http://localhost',
    },
    'test': {
        'serverHost': 'http://localhost',
    },
    'production': {
        'serverHost': 'http://example.com',
    }
}
Object.assign(params, config(envParams))

module.exports = params