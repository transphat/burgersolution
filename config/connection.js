var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });


var connection = mysql.createConnection({
  host: "ec2-34-194-198-238.compute-1.amazonaws.com",
  port: 5432,
  user: "luswetbexetmyn",
  password: "d65c67f1e0592a9dd9379bfdfc8de80d00a47eaf690997955a6a7954ac59e083",
  database: "d597v9tdufv33u"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
