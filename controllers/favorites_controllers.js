var express = require("express");
var router = express.Router();
var book = require("models/index.js");

// Favorite Routes

// Index Redirect
router.get("/", function(req, res) {
  res.redirect("/index");
});

// Index Page
router.get("/index", function(req, res) {
  book.selectAll(function(data) {
    var hbsObject = { book: data };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Create a New Book
router.post("/book/create", function(req, res) {
  book.insertOne(req.body.book_name, function() {
    res.redirect("/index");
  });
});

// Add Book to Favorites
router.post("/book/favorite/:id", function(req, res) {
  book.updateOne(req.params.id, function() {
    res.redirect("/index");
  });
});

// Export routes
module.exports = router;