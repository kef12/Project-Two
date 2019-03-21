var express = require("express");
var router = express.Router();
var models = require("../models");

var sequelizeConnection = models.sequelize;
sequelizeConnection.sync();

// Favorite Routes

// Index Redirect
router.get("/", function(req, res) {
  res.redirect("/index");
});

// Index Page (render all books to DOM)
router.get("/index", function(req, res) {
  // Sequelize Query to get all books from database.
  models.books
    .findAll({
      include: [{ model: models.favorite }]
    })
    .then(function(data) {
      // Pass the returned data into a Handlebars object and then render it
      var hbsObject = { books: data };
      // console.log(data);
      res.render("index", hbsObject);
    });
});

// Favorite a Book
router.post("/book/favorite/:id", function(req, res) {
  // Create a new burger devourer (and also associate it to the eaten burger's id)
  models.favorite
    .create({
      burgerId: req.params.id
    })

    // Then, select the eaten burger by it's id
    .then(function() {
      models.burgers
        .findOne({ where: { id: req.params.id } })

        // Then, use the returned book object to...
        .then(function(favoriteBook {
          // ... Update the book's status to favorite
          favoriteBook
          .update({
              favorite: true,
            })

            // Then, the burger is devoured, so refresh the page
            // .then(function() {
            //   res.redirect("/index");
            );
        });
  


// ----------------------------------------------------

// Export routes
module.exports = router;
