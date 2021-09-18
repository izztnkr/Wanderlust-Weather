var apiKey = "a1cef5ec8d14ee25ac975bd19e5efc49"
var userInput=document.getElementById("userInput");
var city = "Austin"
var query = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" +apiKey;
    
//add event listener to button click and set the data to pass through the query    
//  userInput.addEventListener("submit",);

// const el = document.getElementById("outside");
// el.addEventListener("click", modifyText, false);

fetch(query)
    .then(function (res) {
        if(res.ok){
            return res.json()
        }
    })
    .then(function(data){
        console.log(data);
        var lat = data.coord.lat
        var lon = data.coord.lon
        var apiUrl= "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&appid=" + apiKey; 
    

        fetch(apiUrl).then(function(res){
            if(res.ok){
                return res.json()
            }
        }).then(function(data){
            displayCurrentData (data, main);
            //displayFutureData(data, main)
            console.log(data);
        });
        //icon  where data is an object, dailyis an array call that array at the index (in the loop) with the key weather and will be an arrayand will always be an uneccesary array
        
        //loop over the array dor a five day forecast
//data.daily[i].weather[0].icon
       });

       //CURRENT WEATHER from response we need to grab "city_name" = lat & lon,  "date"= ,"icon" or something to set and if/else icon per status, "current_weather" (5 days worth so array from 0 to 4) indicating the following:  "humidity", "wind-speed", "UV index" with indicators of (favorable, moderate, severe),
      
       var displayCurrentData = (function(query){})
    
      
      
       //FUTURE WEATHER from response we need to grab "city_name",  "date","icon" or something to set and if/else icon per status, "current_weather" (5 days worth, so array from 0 to 4) indicating the following:  "humidity", "wind-speed", "UV index" with indicators of (favorable, moderate, severe),
      // var displayFutureData