var db = require("../models");
var tdQueryUrl = require("../controllers/tastedive");
var axios = require("axios");

// var path = require("path");

// var queryUrl = require("../routes/tastedive");
// var axios = require("axios");

//Routes
// =============================================================
module.exports = function (app) {

  //Index Route loads main page
  app.get("/", function (req, res) {
    res.render("index");
  });


  //Route to hit after submit button - this is where the TD data will publish in a carousel
  app.get("/resultsPage", function (req, res) {

    //this code will get moved eventually
    //get search term
    // let bookSearchTermFromBody = req.body.text;
    let bookSearchTermFromQueryParam = req.query.bookTerm;
    console.log("Incoming Search Term Request: " + bookSearchTermFromQueryParam);
    console.log("--------")

    //inject search term into tdQueryUrl
    let tdApiQueryUrl = tdQueryUrl.replace("[[SEARCH_TERM]]",bookSearchTermFromQueryParam)
    console.log("TD API Request: " + tdApiQueryUrl);

    //axios call (will get moved too)
    axios
      .get(tdApiQueryUrl, {
        method: "GET",
        responseType: "json"
      })
      .then(function(response) {
        console.log("TD API Response: " + JSON.stringify(response.data));
        res.render("resultsPage", response.data);
      })
      .catch(function(err) {
        console.log(err);
      });

    //render search.handlebars page
    // res.render("resultsPage");
  });

  //Details route
  app.get("/detailsPage", function (req, res) {
    res.render("detailsPage");
    //goodreads call - need to move this
    // axios
    //   .get(grQueryUrl, {
    //     method: "get",
    //     responseType: "json"
    //   })
    //   //handle success
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   //handle error
    //   .catch(function(err) {
    //     console.log(err);
    //   });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};