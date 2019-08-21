const mysql = require("mysql");
const mysqlConfig = process.env.MYSQL_PW || require("./config.js");

module.exports = mysql.createConnection(mysqlConfig);
