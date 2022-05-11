const mysql = require("mysql2")
const config = require("./configs.json")
const pool = mysql.createPool({
    host: config.dbConfig.host,
    database: config.dbConfig.database,
    user: config.dbConfig.user,
    password: config.dbConfig.password
})

// create the connection to database
 exports.connection = mysql.createConnection({
  host: config.dbConfig.host,
  database: config.dbConfig.database,
  user: config.dbConfig.user,
  password: config.dbConfig.password
});