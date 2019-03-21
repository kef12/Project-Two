var db = require("../models");
var tdQueryUrl = require("../controllers/tastedive");
var gbQueryUrl = require("../controllers/googleBooks")
var axios = require("axios");
var path = require("path");
var gbResponse;


//Routes
// =============================================================
module.exports = function (app) {

  //Index Route loads main page
  app.get("/", function (req, res) {
    res.render("index");
  });


  //Route to hit after submit button - this is where the TD data will publish in a carousel
  app.get("/resultsPage", function (req, res) {
    var responseArray = [];
    var responseCounter = 0;

    //get search term
    let bookSearchTerm = req.query.bookTerm;

    //inject search term into tdQueryUrl
    let tdApiQueryUrl = tdQueryUrl + "&q=" + bookSearchTerm;

    //TD axios call (will get moved too)
    axios
      .get(tdApiQueryUrl, {
        method: "GET",
        responseType: "json"
      })

      .then(function (response) {
        //for loop to log td response names
        let totalResponses = response.data.Similar.Results.length;
        for (var i = 0; i < totalResponses; i++) {
          let tdResponseNames = response.data.Similar.Results[i].Name;

          //inject search names into gbQueryUrl
          let gbApiQueryUrl = gbQueryUrl + "&q=" + tdResponseNames;

          //axios call to google books api
          axios
            .get(gbApiQueryUrl, {
              method: "GET",
              responseType: "json"
            })

            .then(function (response) {
              var gbResponse = {
                gbTitle: response.data.items[0].volumeInfo.title,
                gbAuthors: response.data.items[0].volumeInfo.authors[0],
                gbId: response.data.items[0].id,
                gbLink: response.data.items[0].selfLink,
                gbInfo: response.data.items[0].volumeInfo,
                gbISBN: response.data.items[0].volumeInfo.industryIdentifiers[1].identifier,
                gbDetails: response.data.items[0].volumeInfo.description
              }

              responseArray.push(gbResponse);
              responseCounter++;

              //if we have all 5 results ready in the array/to manage asynchronicity
              if (responseCounter >= totalResponses) {
                //give resultsPage.handlebars the response.data
                var gbResponseData = {
                  booksArray: responseArray
                }
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


  //Favorites route
  // app.get("/book/favorite/", function (req, res) {
  //   db.Books.findAll({}).then(function(favorites) {
  //     res.render("favorites", favorites)
  //   });
  // });

  app.get("/book/favorite", function(req, res) {
    console.log("in the app.get for favorites");
    // Sequelize Query to get all books from database.
    db.Books
      .findAll({})
      .then(function(data) {
        // Pass the returned data into a Handlebars object and then render it
        var hbsObject = { books: data };
        // console.log(data);
        res.render("favorites", hbsObject);
      });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};