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
    setTimeout(function() {}, 1000);
  });
  it('Connection exists', function() {
    assert.exists(connection, 'Connection object is null or undefined');
  });
  it('Connection has ID', function() {
    assert.isAbove(connection.threadId, 0, 'Connection Id is not > 0');
  });
});

// setTimeout(function() {}, 100);

describe("ORM tests", function() {
  const orm = require("../config/orm.js");
  // afterEach(function(){
  //   // runs after each test in this block
  //   setTimeout(function() {}, 0);
  // });
  it('Read devoured correctly', function(done) {
    const result = orm.selectAll(function(res) {
      assert.strictEqual(res[0].devoured, 1, 'Devoured read incorrectly');
      done();
    });
    
  });
  //setTimeout(function() {}, 0);
  it('Read name correctly', function(done) {
    const result = orm.selectAll(function(res) {
      assert.strictEqual(res[1].burger_name, "Bacon Brie Mushroom Burger", 'Name read incorrectly');
      done();
    });
    
  });
  //setTimeout(function() {}, 100);
  it('Inserted burger correctly', function(done) {
    const result = orm.insertOne('Plain Burger', false, function(res) {
      //console.log('Insert test');
      //console.log(res.protocol41);
      assert.isTrue(res.protocol41, "Insert did not succeed");
      done();
    });
    // done();
  });
  //setTimeout(function() {}, 100);
  it('Updated burger correctly', function(done) {
    const result = orm.updateOne('Bacon Brie Mushroom Burger', function(res) {
      // console.log('update test');
      // console.log(res.protocol41);
      assert.isTrue(res.protocol41, "Update did not succeed");
      done();
    });
    // done();
  });
  // setTimeout(function() {}, 100);
})

//setTimeout(function() {}, 1000);

describe('Burger Model tests', function() {
  const burger = require('../models/burger.js')
  // afterEach(function(){
  //   // runs after each test in this block
  //   setTimeout(function() {}, 0);
  // });
  it('Retrieves an array', function(done) {
    const result = burger.all(function(res) {
      // console.log('BM Array test');
      // console.log(res);
      assert.isArray(res, '.all does not retrieve an array');
      done();
    });
    // done();
  });
  it('Array comprises objects', function(done) {
    const result = burger.all(function(res) {
      console.log('BM Array object test');
      // console.log(res);
      // res.forEach(element => {
      //   console.log(typeof element);
      //   // assert.isObject(element, 'Result is not an object');
      //   assert.isTrue(element.hasOwnProperty(element.burger_name, 'does not have burger_name'));
      //   assert.isTrue(element.hasOwnProperty(element.devoured, 'does not have devoured'));
      //   done();
      // });
      for (var i = 0; i < res.length; i++) {
        // console.log(res[i]);
        assert.isObject(res[i], 'Result is not an object');
        // console.log(res[i].burger_name);
        // console.log(res[i].devoured);
        assert.property(res[i], 'burger_name', 'does not have burger_name');
        assert.property(res[i], 'devoured', 'does not have devoured');
      }
      done();
    });
    //done();

  });
  it('Creates a burger', function(done) {
    // console.log("we get here");
   const result = burger.create('Really Big Plain Burger', function(res){
    //  console.log('in burger.create test');
    // console.log(res.protocol41);
    //  console.log("we are not done");
      assert.isTrue(res.protocol41, "Burger creation failed");
      done();
    });
   // done();
  });
});

// setTimeout(function() {}, 0);

// run this test in the project root with:
//       $ mocha <path from root to file>/<test file name>.js
// OR
//       $ npm test - file MUST be named 'test.js' in the test folder