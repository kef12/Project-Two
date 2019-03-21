var db = require("../models");
var axios = require("axios");
var path = require("path");

module.exports = function(app) {

//Get All Books
app.get("/api/results", function(req, res) {
  db.Author.findAll({Author}).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});


  // Create a new example
app.post("/api/books", function(req, res) {
  db.Author.create(req.body).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});

};
