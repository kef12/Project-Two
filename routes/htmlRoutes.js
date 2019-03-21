var db = require("../models");
var tdQueryUrl = require("../controllers/tastedive");
var gbQueryUrl = require("../controllers/googleBooks")
var axios = require("axios");
var path = require("path");
var gbResponse;
var responseArray = [];
var responseCounter = 0;

//Routes
// =============================================================
module.exports = function (app) {

  //Index Route loads main page
  app.get("/", function (req, res) {
    res.render("index");
  });


  //Route to hit after submit button - this is where the TD data will publish in a carousel
  app.get("/resultsPage", function (req, res) {
    //get search term
    let bookSearchTerm = req.query.bookTerm;

    //inject search term into tdQueryUrl
    let tdApiQueryUrl = tdQueryUrl.replace("[[SEARCH_TERM]]", bookSearchTerm)

    //TD axios call (will get moved too)
    axios
      .get(tdApiQueryUrl, {
        method: "GET",
        responseType: "json"
      })

      .then(function (response) {
        //for loop to log td response names
        for (var i = 0; i < response.data.Similar.Results.length; i++) {
          let tdResponseNames = response.data.Similar.Results[i].Name;

          //inject search names into gbQueryUrl
          let gbApiQueryUrl = gbQueryUrl.replace("[[SEARCH_TERM]]", tdResponseNames)
          // console.log("GB API Request: " + gbApiQueryUrl)

          //axios call to google books api
          axios
            .get(gbApiQueryUrl, {
              method: "GET",
              responseType: "json"
            })

            .then(function (response) {
              var gbResponse = {
                gbId: response.data.items[0].id,
                gbLink: response.data.items[0].selfLink,
                gbInfo: response.data.items[0].volumeInfo,
                gbISBN: response.data.items[0].volumeInfo.industryIdentifiers[1].identifier,
                gbDetails: response.data.items[0].volumeInfo.description
              }
              // console.log("GB Response Data: " + gbResponse.gbInfo.title);
              responseArray.push(gbResponse);
              responseCounter++;

              //if we have all 5 results ready in the array/to manage asynchronicity
              if (responseCounter >= 10) {
                //give resultsPage.handlebars the response.data
               var gbResponseData = {booksArray: responseArray}
              //  console.log(JSON.stringify(gbResponseData));
               res.render("resultsPage", gbResponseData);

             };
            })
            //catch any gb response errors
            .catch(function (err) {
              console.log(err);
            });
           
        };
      })
      //catch any td response errors
      .catch(function (err) {
        console.log(err)
      })

  });

  // app.get("/fullWidthCarousel", function(req, res) {
  //   res.render("fullWidthCarousel");
  // })

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