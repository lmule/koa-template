const conf = require('../../config/db')
const { isProd } = require('../helper/env')
const isDebug = !isProd

const knex = require('knex')({
    client: 'mysql',
    debug: isDebug,
    connection: {
        host     : conf.host,
        user     : conf.username,
        password : conf.password,
        database : conf.database,
        charset  : 'utf8'
    }
});
const db = require('bookshelf')(knex)
db.plugin(['pagination', 'visibility', 'bookshelf-camelcase']);

module.exports = db
