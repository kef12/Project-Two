//Variables and Routes for TasteDive API
var tdApiKey = "332360-bookMatc-UAQONPTP";

//build queryUrl
var tdQueryUrl =
    "https://tastedive.com/api/similar?q=[[SEARCH_TERM]]" +
    "&type=books&limit=10&k=" +
    tdApiKey +
    "&verbose=1&callback?=responseReceived";

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