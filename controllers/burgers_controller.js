// @ts-nocheck

// This turns on type checking in VS Code

const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      // must use 'burgers in the 'each' in index.handlebars
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(
    // TODO, does this need to be an array?
    [req.body.burger_name], 
    function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:name", function(req, res) {
  //console.log(req.body.burger_name);
  burger.update (req.body.burger_name, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

// Export routes for server.js to use.
module.exports = router;
