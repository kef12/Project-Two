var db = require("../models");
var axios = require("axios");
var path = require("path");
//var books = require("models/index.js");

module.exports = function(app) {
  // Get all books
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

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbExample) {
  //     res.json(dbExample);
    //});
  //});
};
