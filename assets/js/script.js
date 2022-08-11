var pastCity = JSON.parse(localStorage.getItem("cityname"))
var cityHistory = [];
var cityInput= $("#cityInput");

$("#searchBtn").on('click', function(event){
    event.preventDefault();
    var city= cityInput.val();
    cityHistory.push(city);
   
    console.log(cityHistory)
    renderCity();
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



fetch('https://api.openweathermap.org/geo/1.0/direct?q=calabasas&limit=5&appid=$f8ab7ee75fa26e66f8078a0b1abdadfe')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });


//     https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//     http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}



// https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}

// https://api/openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`;