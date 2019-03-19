//Variables and Logic for Google Books API
    //this API will provide covers, details, etc. for carousel

// var tdTitles
var gbApiKey = "AIzaSyCANn3sUOF-s7QkXpQB9nW-6L-If85E2l0";

//build query url
var gbQueryUrl = 
    //base url plus spot to plug in search terms in for loop
    "https://www.googleapis.com/books/v1/volumes?q=[[SEARCH_TERM]]" +
    //restricts print type to books and most relevant, limit each search to 1 result
    "&printType=books&orderBy=relevance&maxResults=1"
    //plugs in api key
    "&key=" +
    gbApiKey;


module.exports = gbQueryUrl;
