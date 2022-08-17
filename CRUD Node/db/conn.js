const secrets = require('./secret')
const {Sequelize} = require('sequelize')

const config = {
    database:secrets.dbName,
    user:secrets.dbUser,
    password:secrets.dbPassword,
    host:secrets.dbHost,
    dialect:secrets.dbDialect
}
const pool = new Sequelize(config.database,config.user,config.password,{host:config.host,dialect:config.dialect})
module.exports = pool