// @ts-check
// This turns on type checking in VS Code

var connection = require("./connection.js");

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

const orm = {
  selectAll: function(cb) {
    let queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(bName, dState, cb) {
    let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${bName}", ${dState});` ;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(true);
    })
  },
  updateOne: function(bName, cb) {
    let queryString = `UPDATE burgers SET devoured=true WHERE burger_name="${bName}";` ;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(true);
    });
  }
}

module.exports = orm;