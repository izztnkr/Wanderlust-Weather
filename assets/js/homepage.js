var getWeatherData = function(user){
    //format the api url

    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=a1cef5ec8d14ee25ac975bd19e5efc49" //+user+"/repos";
    
    //make a request to the url
    fetch(apiUrl)
    .then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });

    
    // console.log("outside");

    // var response = fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=a1cef5ec8d14ee25ac975bd19e5efc49");
    // console.log(response);
};

getWeatherData();
