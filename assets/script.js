var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");
var searchHistory = document.getElementById("history");
var historyButton = $("<button>");
var historyList = $("#history-list");
var apiKey = "42eadeef9d5a4dba9f2ba031ca03c827";
var cityName = "London";
var queryURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&cnt=3&appid=" +
  apiKey;
var coords;

// document ready function

$(document).ready(function () {

  // Search button, when clicked adds the city name to the history list

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(searchInput.value);
    cityName = searchInput.value;
    historyList.append(
      "<li>" + "<button>" + searchInput.value + "</button>" + "</li>"
    );
    $("li").addClass("cities");
    $("button").addClass("citiesButton");

    //calling the OpenWeather API 

    $.getJSON(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        cityName +
        "&limit=1&appid=" +
        apiKey,
      function (data) {

      // function to get the latitude and logitude from the city name

        function latLon() {
          coords = [data[0].lat, data[0].lon];
          console.log(coords);
          return;
        }
        latLon();
      }
    );
  });

  
});
