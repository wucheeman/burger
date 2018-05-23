// @ts-nocheck

// This turns on type checking in VS Code

const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    // TODO: uncomment res.render and delete res.send
    // res.render("index", burgerObject);
    res.send(burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(
    [req.body.burger_name], 
    function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {

});

// Export routes for server.js to use.
module.exports = router;
