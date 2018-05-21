// @ts-check
// This turns on type checking in VS Code

// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "mark",
  password: "",
  database: "burgerzDB"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  // connection.end();
});

// Export connection for our ORM to use.
module.exports = connection;