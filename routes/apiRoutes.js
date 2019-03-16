var db = require("../models");
var axios = require("axios");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  //---------------------------------TasteDive-----------------------------//
  //TasteDive API variables
  var apiKey = "332360-bookMatc-UAQONPTP";

  //going to need to write code that adds the + instead of spaces
  var searchItem = "throne+of+glass";
  var searchType = "books";

  var queryUrl =
    "https://tastedive.com/api/similar?q=" +
    searchItem +
    "&type=" +
    searchType +
    "&limit=10&k=" +
    apiKey +
    "&callback?=responseReceived";

  // Get similar books/TasteDive
  app.get("/search", function(req, res) {
    console.log("search (TD) query URL: ", queryUrl);
    axios
      .get(queryUrl, {
        method: "get",
        responseType: "json"
      })
      .then(function(response) {
        //handle success
        console.log(JSON.stringify(response.data));
      })
      .catch(function(err) {
        //handle error
        console.log(err);
      })
      .then(function() {});
  });

  //---------------------------------GoodReads-----------------------------//
  // Get book reviews/GoodReads
  var grApiKey = "82jLu3XfteRzNyVATS2w";
  // var grSecret = "zp4JTHvMtQ8HtkRJxCpHcC5je1X0izkDNTvv7VQsE";


  //!!title and author names have to have capital letters!!
  var selectedBook = "Pride+and+Prejudice";
  var selectedAuthor = "Jane+Austen";

  //to get reviews of a book based on title string
  var grQueryUrl =
    "https://www.goodreads.com/book/title.json?author=" +
    selectedAuthor +
    "&key=" +
    grApiKey +
    "&title=" +
    selectedBook;

  app.get("/details", function(req, res) {
    console.log("details (GR) query URL: ", grQueryUrl);
    axios
      .get(grQueryUrl, {
        method: "get",
        responseType: "json"
      })
      .then(function(response) {
        //handle success
        console.log(response);
      })
      .catch(function(err) {
        //handle error
        console.log(err);
      })
      .then(function() {});
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
