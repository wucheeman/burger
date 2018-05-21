// @ts-check
// This turns on type checking in VS Code

// BEFORE TESTING, return the burgerzDB to its initial state by running 'setupDB.sh'

// these are needed only if testing with node
var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;

describe("Connection tests", function() {
  const connection = require("../config/connection.js")
  afterEach(function(){
    // runs after each test in this block
    setTimeout(function() {}, 0);
  });
  it('Connection exists', function() {
    assert.exists(connection, 'Connection object is not null or undefined');
  });
  it('Connection has ID', function() {
    assert.isAbove(connection.threadId, 0, 'Connection Id is not 0');
  });
});

//setTimeout(function() {}, 0);

describe("ORM tests", function() {
  const orm = require("../config/orm.js");
  afterEach(function(){
    // runs after each test in this block
    setTimeout(function() {}, 0);
  });
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
})

//setTimeout(function() {}, 0);

describe('Burger Model tests', function() {
  const burger = require('../models/burger.js')
  afterEach(function(){
    // runs after each test in this block
    setTimeout(function() {}, 0);
  });
  it('Retrieves an array', function() {
    const result = burger.all(function(res) {
      assert.isArray(result, '.all retrieves an array');
    });
  });
  it('Array comprises objects', function() {
    const result = burger.all(function(res) {
      res.array.forEach(element => {
        assert.isObject(element, 'It is an object');
        assert.isTrue(element.hasOwnProperty(burger_name, 'has burger_name'));
        assert.isTrue(element.hasOwnProperty(devoured, 'has devoured'));
      });
    });
  });
});

// setTimeout(function() {}, 0);

// run this test in the project root with:
//       $ mocha <path from root to file>/<test file name>.js
// OR
//       $ npm test - file MUST be named 'test.js' in the test folder