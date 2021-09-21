var apiKey = "a1cef5ec8d14ee25ac975bd19e5efc49";
var userFormEl = document.querySelector(".form");
var userInputEl = document.getElementById("input");
var submitButtonEl = document.querySelector("#button");
// var errorElement = document.getElementById("errorMessage");
var modalBg = document.querySelector(".modal-background");
var modal = document.querySelector(".modal");
var currentWeatherContainer = document.getElementById("current-weather");
var forecastWeatherContainer = document.getElementById("#forecastWeather");

//add event listener to button click and set the data to pass through the query

submitButtonEl.addEventListener("click", getWeatherData);
// {
//     console.log("button worked!")
//         if (userInputEl =="" ) {
//             console.log("stuff should show up");
//         }
// };

//prevent default on click & send error message if not a city name input
function enableModal() {
  modal.classList.add("is-active");
  //then click out of
  modalBg.addEventListener("click", () => modal.classList.remove("is-active"));
} 

function getWeatherData(event) {
  event.preventDefault();
  if (!userInputEl.value.length) {
    enableModal();
  } else {
    var query =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      userInputEl.value +
      "&appid=" +
      apiKey;

    fetch(query)
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (data) {
        console.log(data);
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        var apiUrl =
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&exclude=hourly,minutely&appid=" +
          apiKey;

        fetch(apiUrl)
          .then(function (res) {
            if (res.ok) {
              return res.json();
            }
          })
          .then(function (data) {
            console.log("palabra", data);
            renderWeatherData(data);
            //displayFutureData(data, main)
          });
        //icon  where data is an object, dailyis an array call that array at the index (in the loop) with the key weather and will be an arrayand will always be an uneccesary array

        //loop over the array dor a five day forecast
        //data.daily[i].weather[0].icon
      });
  }
}

//CURRENT WEATHER from response we need to grab "city_name" = lat & lon,  "date"= ,"icon" or something to set and if/else icon per status, "current_weather" (5 days worth so array from 0 to 4) indicating the following:  "humidity", "wind-speed", "UV index" with indicators of (favorable, moderate, severe),

var renderWeatherData = function (data) {
  var current = data.current;
  var temperature = current.temp;
  var humidity = current.humidity;
  var windspeed = current.wind_speed;
  var uvindex = current.uvi;

  var temperatureEl = document.createElement("p");
  temperatureEl.textContent = temperature;
  currentWeatherContainer.append(temperatureEl);

  var humidityEl = document.createElement("p");
  humidityEl.textContent = humidity;
  currentWeatherContainer.append(humidityEl);

  var windspeedEl = document.createElement("p");
  windspeedEl.textContent = windspeed;
  currentWeatherContainer.append(windspeedEl);

  var uvindexEl = document.createElement("p");
  uvindexEl.textContent = uvindex;
  currentWeatherContainer.append(uvindexEl);

  // 5 day forecast render
  var forecast = data.daily;
  var temperatureDaily = forecast.temp;
  var humidityDaily = forecast.humidity;
  var windspeedDaily = forecast.wind_speed;
  var uvindexDaily = forecast.uvi;

  var temperatureDailyEl = document.createElement("p");
  temperatureDailyEl.textContent = temperatureDaily;
  forecastWeatherContainer.append(temperatureDailyEl);

  var humidityDailyEl = document.createElement("p");
  humidityDailyEl.textContent = humidityDaily;
  forecastWeatherContainer.append(humidityDailyEl);

  var windspeedDailyEl = document.createElement("p");
  windspeedDailyEl.textContent = windspeedDaily;
  forecastWeatherContainer.append(windspeedDailyEl);

  var uvindexDailyEl = document.createElement("p");
  uvindexDailyEl.textContent = uvindexDaily;
  forecastWeatherContainer.append(uvindexDailyEl);
};

//FUTURE WEATHER from response we need to grab "city_name",  "date","icon" or something to set and if/else icon per status, "current_weather" (5 days worth, so array from 0 to 4) indicating the following:  "humidity", "wind-speed", "UV index" with indicators of (favorable, moderate, severe),
// var displayFutureData
//var date = current.
