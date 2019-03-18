var db = require("../models");

module.exports = function(app) {
  // Load index page

  app.get("/", function(req, res) {
    db.Author.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  //-----------------------TasteDive Routes-------------------------
  app.get("/search", function(req, res) {
    console.log("book search query URL: ", queryUrl);
    axios
      .get(queryUrl, {
        method: "get",
        responseType: "json"
      })
      .then(function(response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  //-----------------------GoodReads Routes-------------------------
  app.get("/details", function(req, res) {
    console.log("details (GR) query URL: ", grQueryUrl);
    axios
      .get(grQueryUrl, {
        method: "get",
        responseType: "json"
      })
      //handle success
      .then(function(response) {
        console.log(response);
      })
      //handle error
      .catch(function(err) {
        console.log(err);
      });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("*", function(req, res) {
    res.render("");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
