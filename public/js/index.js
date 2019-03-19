//require TasteDive API call function
// var tdSearcher;

// Get references to page elements
var $searchText = $("#search-text");
var $submitBtn = $("#submit");

//handle form submit whenever we submit a new search
var handleFormSubmit = function(event) {
  event.preventDefault();

  //onsubmit click, function to format search terms
  var searchEntry = {
    text: $searchText.val().trim().split(" ").join("+")
  };

  if (!searchEntry.text) {
    alert("You must enter either a book or an author");
    return;
  }
  
  console.log(searchEntry);

  //Go to the Search html route/controller GET action
  location.replace("resultsPage?bookTerm=" + searchEntry.text);

};

//Add event listeners to the book search submit
$submitBtn.on("click", handleFormSubmit);

//Ensure enter key submits the search
$searchText.keypress(function (e) {
  let key = e.which;
  if(key === 13) //the enter key code
  {
    handleFormSubmit(e);
    return false;
  }
});


//initialize carousel -- uncomment when ready for carousel
$(document).ready(function(){
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
  });
});
    

console.log("initializing carousel");






































//this is only to get functionality going, will re-work later
// module.exports = $searchText;

// The API object contains methods for each kind of request we'll make
//this will become our favBook functions
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// refreshExamples gets new examples from the db and repopulates the list
//This will become our carousel logic..maybe?

// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new search
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   //onsubmit click, format search terms
//   var searchEntry = {
//     text: $searchText.val().trim().split(" ").join("+")
//   };
//   console.log(searchEntry);

//   tdSearcher;

//   if (!searchEntry.text) {
//     alert("You must enter either a book or an author!");
//     return;
//   }
//   $searchText.val("");

// };




// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);

// $exampleList.on("click", ".delete", handleDeleteBtnClick);

