var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Supermarket" });
});

/* GET goods. */
router.get("/goods", function(req, res, next) {
  res.render({ goodsInStock });
});

module.exports = router;
