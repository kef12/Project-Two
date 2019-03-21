//Variables and Routes for TasteDive API
var tdApiKey = process.env.TD_API_KEY;

// //build queryUrl
var tdQueryUrl =
    //base url with spot to plug in search term from search box
    "https://tastedive.com/api/similar?" +
    //limit type to books and only 1 !!!!CHANGE FOR DEPLOY
    "type=books&limit=1" +
    //plugs in api key
    "&k=" +
    tdApiKey +
    //callback parameter
    "&callback?=responseReceived";
    //can add in verbose=1& before callback to get more information

//export the queryUrl
module.exports = tdQueryUrl;




