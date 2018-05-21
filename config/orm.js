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
    // console.log(bName);

    // let queryString = 'INSERT INTO burgers (burger_name) VALUES ("' + bName + '");' ;
    let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${bName}", ${dState});` ;
    // console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(true);
      // TODO clean up comments
    })
  },
  updateOne: function() {

  }
}

// orm.selectAll();
// const res = orm.insertOne('Plain Burger', true, function() {
//   console.log('sent ');
// });

module.exports = orm;