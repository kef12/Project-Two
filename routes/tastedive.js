//Variables and Routes for TasteDive API

//TasteDive API key variable
var apiKey = "332360-bookMatc-UAQONPTP";

//assign variables
var searchItem = "";
var searchType = "books";

var queryUrl =
  "https://tastedive.com/api/similar?q=" +
  searchItem +
  "&type=" +
  searchType +
  "&limit=10&k=" +
  apiKey +
  "&callback?=responseReceived";

module.exports = queryUrl;


//onsubmit click, function to format search terms
function formatSearch() {
    let searchEntry = $("#search").val().trim();
    let entrySplit = searchEntry.split(" ");
    let searchItem = entrySplit.join("+");
};

