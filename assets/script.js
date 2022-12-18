var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");
var searchHistory = document.getElementById("history");
var historyButton = $("<button>");
var historyList = $("#history-list");

var cities = [];

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(searchInput.value);
  historyList.append(
    "<li>" + "<button>" + searchInput.value + "</button>" + "</li>"
  );
  $("li").addClass("cities");
  $("button").addClass("citiesButton");
});
