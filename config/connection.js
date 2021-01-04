var mysql = require("mysql");
// var mysql = require("pgsql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

//mysql://be82a3cb366eeb:bf2d31ae@us-cdbr-east-02.cleardb.com/heroku_96efed99ef32e01?reconnect=true

var connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "be82a3cb366eeb",
  password: "bf2d31ae",
  database: "heroku_96efed99ef32e01"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
