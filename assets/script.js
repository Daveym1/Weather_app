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

// function showWeather() {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", queryURL, true);

//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       console.log("success");
//       let result = this.response;
//       console.log(result);
//     }
//   };
//   xhr.send();
// }

// showWeather();



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

    function test() {

      $.ajax({
          method: 'GET',
          url: 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=' + apiKey
      }).then(function (response) {
          console.log(response);
      });
  }
  test();
  });
  });


