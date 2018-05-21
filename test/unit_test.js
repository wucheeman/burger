// @ts-check
// This turns on type checking in VS Code

// BEFORE TESTING, return the burgerzDB to its initial state by running 'setupDB.sh'

// these are needed only if testing with node
var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;

describe("Connection tests", function() {
  const connection = require("../config/connection.js")
  it('Connection exists', function() {
    assert.exists(connection, 'Connection is not null or undefined');
  });
  it('Connection has ID', function() {
    assert.isAbove(connection.threadId, 0, 'Connection Id is not 0');
  });
});

describe("ORM tests", function() {
  const orm = require("../config/orm.js");
  it('Read devoured correctly', function() {
    const result = orm.selectAll(function(res) {
      assert.strictEqual(res[0].devoured, 1, 'Devoured read correctly');
    });
  });
  it('Read name correctly', function() {
    const result = orm.selectAll(function(res) {
      assert.strictEqual(res[1].burger_name, "Bacon Brie Mushroom Burger", 'Name read correctly');
    });
  });
  it('Inserted burger correctly', function() {
    const result = orm.insertOne('Plain Burger', false, function() {
      assert.isTrue(result, "Insert succeeded");
    });
  });
  it('Updated burger correctly', function() {
    const result = orm.updateOne('Plain Burger', function() {
      assert.isTrue(result, "Update succeeded");
    });
  });

});



// run this test in the project root with:
//       $ mocha <path from root to file>/<test file name>.js
// OR
//       $ npm test - file MUST be named 'test.js' in the test folder