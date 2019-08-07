var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "tp0jxyy7yrraziuk",
    password: "a60r0yfi59l0pmbz", // add your local password here.
    database: "ie2ndyyfnfno7vmj" // add your db name here
  });
}

connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};


module.exports = connection;