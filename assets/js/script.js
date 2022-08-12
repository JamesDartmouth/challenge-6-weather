var pastCity = JSON.parse(localStorage.getItem("cityname"))
var cityHistory = [];
var cityInput= $("#cityInput");
var city= cityInput.val();
var testCity = "calabasas"

$("#searchBtn").on('click', function(event){
    event.preventDefault();
    var city= cityInput.val();
    cityHistory.push(city);
   
    console.log(cityHistory)
    renderCity();
    getCityCoor();

    // var lat =
    // var lon

    getCityWeather()
})

function storeCity(){
    localStorage.setItem("cityname", JSON.stringify(cityHistory));
    var city = localStorage.getItem("cityname")
    var pCity = JSON.parse(city);
    
}
storeCity();

// function storeHistory(){
//     let city = document.querySelector('#cityInput').value;

//     if (!city){
//         return;
//     }   
//     cityHistory.push(city);
//     document.querySelector('#cityInput').value='';

function renderCity(){
    for( var i=0; i < cityHistory.length; i++) {
    var liEl= document.createElement('li');
    // liEl.innerHTML = cityHistory[i];
    var pastCity = cityHistory[i];
    liEl.textContent= pastCity
    cityList.append(liEl);
    console.log(pastCity);
    }
}


//getting weather data


function getCityCoor (){

fetch('https://api.openweathermap.org/geo/1.0/direct?q='+testCity+'&limit=5&appid=f8ab7ee75fa26e66f8078a0b1abdadfe')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data[0].lat)
        console.log(data[0].lon)
        var x = data[0].lat
        var y = data[0].lon
        getCityWeather(x,y);
    });

};

function getCityWeather(lat,lon){

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=34.1446643&lon=-118.6440973&units=imperial&exclude=minutely,hourly&appid=f8ab7ee75fa26e66f8078a0b1abdadfe')
    .then(function(response){

        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
}





// https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}

// https://api/openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`;