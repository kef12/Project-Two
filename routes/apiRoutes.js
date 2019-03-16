var db = require("../models");

module.exports = function (app) {
  // Get all authors
  app.get("/api/authors", function (req, res) {
    db.Author.findAll({}).then(function (dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Create a new example
  // app.post("/api/authors", function (req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Example.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbExample) {
  //     res.json(dbExample);
  //});
  //});
};