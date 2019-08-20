const mysql = require("mysql");
const mysqlPW = process.env.MYSQL_PW || require("./config.js");

module.exports = mysql.createConnection({
  host: "localhost",
  database: "budget",
  user: "student",
  password: mysqlPW
});
