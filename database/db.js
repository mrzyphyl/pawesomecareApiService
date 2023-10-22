const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'jobdispo',
    database: 'pawesome_care'
})

module.exports = mySqlPool