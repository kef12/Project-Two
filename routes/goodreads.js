//Variables and Logic for GoodReads API

var grApiKey = "82jLu3XfteRzNyVATS2w";
// var grSecret = "zp4JTHvMtQ8HtkRJxCpHcC5je1X0izkDNTvv7VQsE";


//!!title and author names have to have capital letters!!
//will need function to do this
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

module.exports = grQueryUrl;
