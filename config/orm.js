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
      // console.log(result);
      // console.log(result[0]);
      // console.log(result[0].devoured); 
      // TODO: remove all console.log stuff
      cb(result);
    });
  },
  insertOne: function() {

  },
  updateOne: function() {

  }
}

// orm.selectAll();

module.exports = orm;