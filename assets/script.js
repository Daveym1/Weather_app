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
var todayWeather = $("#today");
var getWeather;
var city = $("li.cities");
var buttonValue;
var citiesButton = $(".citiesButton");
var cities = $(".cities");
var today = $("#today");
var forecast = $("#forecast");

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

    $("li.cities > button").addClass("citiesButton");

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
        }
        latLon();

        //API call to get the weather for co-ordinates which we retrieved in the first API call

        getWeather = function () {
          $.getJSON(
            "http://api.openweathermap.org/data/2.5/forecast?lat=" +
              coords[0] +
              "&lon=" +
              coords[1] +
              "&cnt=1&appid=" +
              apiKey,
            function (response) {
              console.log(response);
              todayWeather.text("");
              todayWeather.append(
                "<h3>" +
                  "Today's Weather in " +
                  response.city.name +
                  ": " +
                  "</h3>"

                  +

                  "<p>" + "Today's Weather" + "</p>"
                  
                  
                  );
                  forecast.append(
                    "<p>" + "5 day forcast" + "</p>"
                  )
                  
            }
            );
          };
          getWeather();
        }
        );
              forcast.text("It worked");
  });

  //Generated history list buttons when click display the weather for that city

  $(document).on("click", ".citiesButton", function () {
    console.log($(this).text());
  });
});
