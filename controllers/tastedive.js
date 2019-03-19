//Variables and Routes for TasteDive API
var tdApiKey = process.env.TD_API_KEY;

// //build queryUrl
var tdQueryUrl =
    //base url with spot to plug in search term from search box
    "https://tastedive.com/api/similar?q=[[SEARCH_TERM]]" +
    //limit type to books and only 10
    "&type=books&limit=10" +
    //plugs in api key
    "&k=" +
    tdApiKey +
    //callback parameter
    "&callback?=responseReceived";
    //can add in verbose=1& before callback to get more information

//export the queryUrl
module.exports = tdQueryUrl;




//will need this once we get axios call into this folder
// var axios = require("axios");
// var $searchText = require("../public/js/index");

// var $searchText = $("#search-text");

// var searchEntry = {
//     text: $searchText.val().trim().split(" ").join("+")
// };

// queryUrl =
//     "https://tastedive.com/api/similar?q=" +
//     searchEntry +
//     "&type=" +
//     searchType +
//     "&limit=10&k=" +
//     apiKey +
//     "&callback?=responseReceived",

//     module.exports = queryUrl;

// var tdSearcher = {

// //TasteDive API key variable
// apiKey: "332360-bookMatc-UAQONPTP",

// //assign variables
// searchEntry: "",
// searchType: "books",

// var searchEntry {
//     text: $searchText.val().trim().split(" ").join("+")
// };

// queryUrl:
//     "https://tastedive.com/api/similar?q=" +
//     searchEntry +
//     "&type=" +
//     searchType +
//     "&limit=10&k=" +
//     apiKey +
//     "&callback?=responseReceived",

// searchRecs: function(searchEntry) {
//     axios
//         .get(queryUrl, {
//             method: "get",
//             responseType: "json"
//         })
//         .then(function (response) {
//             console.log(JSON.stringify(response.data));
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }

// };

// module.exports = tdSearcher;