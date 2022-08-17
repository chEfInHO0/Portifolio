const mysql = require('mysql')
const secrets = require('./secret')
const conn = mysql.createPool({
    connectionLimit:`${secrets.dbMaxConns}`,
    user:`${secrets.dbUser}`,
    password:`${secrets.dbPassword}`,
    database:`${secrets.dbName}`,
    host:`${secrets.dbHost}`})

module.exports = conn