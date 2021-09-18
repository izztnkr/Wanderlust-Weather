var apiKey = "a1cef5ec8d14ee25ac975bd19e5efc49"
var userInput=document.getElementById("userInput");
var city = "Austin"
var query = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" +apiKey;
    
//      userInput.addEventListener("submit",);

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
            console.log(data);
        });
        //icon  where data is an object, dailyis an array call that array at the index (in the loop) with the key weather and will be an arrayand will always be an uneccesary array
        
        //loop over the array dor a five day forecast
//data.daily[i].weather[0].icon
       });
