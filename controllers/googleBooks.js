//Variables and Logic for Google Books API
    //this API will provide covers, details, etc. for carousel


var gbApiKey = process.env.GB_API_KEY;

//build query url
var gbQueryUrl = 
    //base url plus spot to plug in search terms in for loop
    "https://www.googleapis.com/books/v1/volumes?" +
    //restricts print type to books and most relevant, limit each search to 1 result
    "printType=books&orderBy=relevance&maxResults=1"
    //plugs in api key
    "&key=" +
    gbApiKey;


module.exports = gbQueryUrl;
