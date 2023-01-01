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
              "&cnt=40&appid=" +
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

                  //Added weather icon
                  
                  var iconcode = response.list[0].weather[0].icon;
                  var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@4x" + ".png";
                  $(today).append(`<div id="icon">` + ` <img id="wicon" src="${iconurl}" alt="Weather icon">` + `</div>`)
                  console.log(iconurl);

                  forecast.empty();
                  var icon8 = "http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x" + ".png"
                  var icon16 = "http://openweathermap.org/img/wn/" + response.list[12].weather[0].icon + "@2x" + ".png"
                  var icon24 = "http://openweathermap.org/img/wn/" + response.list[20].weather[0].icon + "@2x" + ".png"
                  var icon32 = "http://openweathermap.org/img/wn/" + response.list[28].weather[0].icon + "@2x" + ".png"
                  var icon39 = "http://openweathermap.org/img/wn/" + response.list[36].weather[0].icon + "@2x" + ".png"

                  var time1 = moment((response.list[4].dt_txt).slice(0, 10)).format("ddd LL")
                  var time2 = moment((response.list[12].dt_txt).slice(0, 10)).format("ddd LL")
                  var time3 = moment((response.list[20].dt_txt).slice(0, 10)).format("ddd LL")
                  var time4 = moment((response.list[28].dt_txt).slice(0, 10)).format("ddd LL")
                  var time5 = moment((response.list[36].dt_txt).slice(0, 10)).format("ddd LL")

                  // adding the data to the forecast section
                  
                  forecast.append(
                    `<h2>5-Day Forecast</h2>
                    <div class="forecast">
                    <div class="forecast1">
                    <h4>${time1}</h4>
                    <img src="${icon8}">

                    </div>
                    <div class="forecast2">
                    <h4>${time2}</h4>
                    <img src="${icon16}">
                    </div>
                    <div class="forecast3">
                    <h4>${time3}</h4>
                    <img src="${icon24}">
                    </div>
                    <div class="forecast4">
                    <h4>${time4}</h4>
                    <img src="${icon32}">
                    </div>
                    <div class="forecast5">
                    <h4>${time5}</h4>
                    <img src="${icon39}">
                    </div>
                    </div>`
                  )
                  
                  
            }
            );
          };
          getWeather();
        
        }
        );
            
  });

  //Generated history list buttons when click display the weather for that city

  $(document).on("click", ".citiesButton", function (event) {
    today.empty();
    forecast.empty();
    $(searchInput).val($(this).text());
    event.preventDefault();
    console.log(searchInput.value);
    cityName = searchInput.value;
    

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
    getHistoryWeather = function () {
      $.getJSON(
        "http://api.openweathermap.org/data/2.5/forecast?lat=" +
          coords[0] +
          "&lon=" +
          coords[1] +
          "&cnt=40&appid=" +
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

              //Added weather icon
              
              var iconcode = response.list[0].weather[0].icon;
              var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@4x" + ".png";
              $(today).append(`<div id="icon">` + ` <img id="wicon" src="${iconurl}" alt="Weather icon">` + `</div>`)
              console.log(iconurl);

              forecast.empty();
              var icon8 = "http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x" + ".png"
              var icon16 = "http://openweathermap.org/img/wn/" + response.list[12].weather[0].icon + "@2x" + ".png"
              var icon24 = "http://openweathermap.org/img/wn/" + response.list[20].weather[0].icon + "@2x" + ".png"
              var icon32 = "http://openweathermap.org/img/wn/" + response.list[28].weather[0].icon + "@2x" + ".png"
              var icon39 = "http://openweathermap.org/img/wn/" + response.list[36].weather[0].icon + "@2x" + ".png"

              var time1 = moment((response.list[4].dt_txt).slice(0, 10)).format("ddd LL")
              var time2 = moment((response.list[12].dt_txt).slice(0, 10)).format("ddd LL")
              var time3 = moment((response.list[20].dt_txt).slice(0, 10)).format("ddd LL")
              var time4 = moment((response.list[28].dt_txt).slice(0, 10)).format("ddd LL")
              var time5 = moment((response.list[36].dt_txt).slice(0, 10)).format("ddd LL")

              // adding the data to the forecast section
              
              forecast.append(
                `<h2>5-Day Forecast</h2>
                <div class="forecast">
                <div class="forecast1">
                <h4>${time1}</h4>
                <img src="${icon8}">

                </div>
                <div class="forecast2">
                <h4>${time2}</h4>
                <img src="${icon16}">
                </div>
                <div class="forecast3">
                <h4>${time3}</h4>
                <img src="${icon24}">
                </div>
                <div class="forecast4">
                <h4>${time4}</h4>
                <img src="${icon32}">
                </div>
                <div class="forecast5">
                <h4>${time5}</h4>
                <img src="${icon39}">
                </div>
                </div>`
              )
              
              
        }
        );
      };
      getHistoryWeather();
    

    
    console.log($(this).text());
  });
})
});

