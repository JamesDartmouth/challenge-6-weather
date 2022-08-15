var pastCity = JSON.parse(localStorage.getItem("cityname"))
var cityHistory = [];
var cityInput= $("#cityInput");
// var city= cityInput.val();
var city = cityInput.value


$("#searchBtn").on('click', function(event){
    event.preventDefault();
   
    var city= cityInput.val();
    cityHistory.push(city);
   
    console.log(cityHistory)
    storeCity();
    renderCity(); 
    getCityCoor();
})



function storeCity(){
    localStorage.setItem("cityname", JSON.stringify(cityHistory));
    var city = localStorage.getItem("cityname")
    var pCity = JSON.parse(city);
    console.log(city)
    
}


function renderCity(){
    // cityList.remove(liEl)
    for( var i=0; i < cityHistory.length; i++) {
    
    var liEl= document.createElement('li');
    // liEl.innerHTML = cityHistory[i];
    var pastCity = cityHistory[i];
    liEl.textContent= pastCity
    cityList.append(liEl);
    }
    
$("#cityList").on('click', function(event){
    event.preventDefault();
    if(event.target.matches('li')){
        var pCity = event.target.textContent
        getCityCoor(pCity)
        console.log(pCity)
        getCityWeather()
    }
})

}

function getCityCoor (){
    var city= cityInput.val()
fetch('https://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=5&appid=f8ab7ee75fa26e66f8078a0b1abdadfe')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // var x = data[0].lat
        // var y = data[0].lon
        getCityWeather(data[0]);
    });
};

function getCityWeather(data){
   
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' +data.lat+ '&lon=' +data.lon+ '&units=imperial&exclude=minutely,hourly&appid=f8ab7ee75fa26e66f8078a0b1abdadfe')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

        document.getElementById("cCity").textContent= cityInput.val() + "  " +moment().format('MM/DD/YYYY')

        // $('#cIcon').attr('src', "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png")

        document.getElementById("cIcon").src= "http://openweathermap.org/img/wn/"+data.current.weather[0].icon+".png";
        document.getElementById("cTemp").textContent= "Temp: " + data.current.temp + " deg F"
        document.getElementById("cWind").textContent= "Wind: " + data.current.wind_speed + " MPH"
        document.getElementById("cHumid").textContent= "Humidity: " + data.current.humidity + " %"
        document.getElementById("cUv").textContent= "UV index: " + data.current.uvi



// UV Index
        var uv = parseInt(data.current.uvi, 10)
        if(uv < 2){
            document.getElementById('uvColor').style.backgroundColor="green";
            document.getElementById('uvColor').textContent = "low";
        }else if(uv >= 2 && uv <5){
            document.getElementById('uvColor').style.backgroundColor="yellow";
            document.getElementById('uvColor').textContent = "moderate";
        }else if(uv >=5 && uv <7){
            document.getElementById('uvColor').style.backgroundColor="orange";
            document.getElementById('uvColor').textContent = "high";
        }else if(uv >=7 && uv <10){
            document.getElementById('uvColor').style.backgroundColor="red";
            document.getElementById('uvColor').textContent = "very high";
        }else{
            document.getElementById('uvColor').style.backgroundColor="purple";
            document.getElementById('uvColor').textContent = "extreme";
        }


        document.getElementById("date1").textContent= moment().add(1, 'days').format('MM/DD/YYYY')

        // $('#icon1').attr('src', "http://openweathermap.org/img/w/"+data.daily[0].weather[0].icon+".png")

        document.getElementById("icon1").src="http://openweathermap.org/img/wn/"+data.daily[0].weather[0].icon+".png"
        document.getElementById("date1").textContent= moment().add(1, 'days').format('MM/DD/YYYY')
        document.getElementById("temp1").textContent= "Temp: " + data.daily[0].temp.day + " deg F"
        document.getElementById("wind1").textContent= "Wind: " + data.daily[0].wind_speed + " MPH"
        document.getElementById("humid1").textContent= "Humidity: " + data.daily[0].humidity + " %"

        document.getElementById("icon2").src="http://openweathermap.org/img/wn/"+data.daily[1].weather[0].icon+".png"
        document.getElementById("date2").textContent= moment().add(2, 'days').format('MM/DD/YYYY')
        document.getElementById("temp2").textContent= "Temp: " + data.daily[1].temp.day + " deg F"
        document.getElementById("wind2").textContent= "Wind: " + data.daily[1].wind_speed + " MPH"
        document.getElementById("humid2").textContent= "Humidity: " + data.daily[1].humidity + " %"

        document.getElementById("icon3").src="http://openweathermap.org/img/wn/"+data.daily[2].weather[0].icon+".png"
        document.getElementById("date3").textContent= moment().add(3, 'days').format('MM/DD/YYYY')
        document.getElementById("temp3").textContent= "Temp: " + data.daily[2].temp.day + " deg F"
        document.getElementById("wind3").textContent= "Wind: " + data.daily[2].wind_speed + " MPH"
        document.getElementById("humid3").textContent= "Humidity: " + data.daily[2].humidity + " %"

        document.getElementById("icon4").src="http://openweathermap.org/img/wn/"+data.daily[3].weather[0].icon+".png"
        document.getElementById("date4").textContent= moment().add(4, 'days').format('MM/DD/YYYY')
        document.getElementById("temp4").textContent= "Temp: " + data.daily[3].temp.day + " deg F"
        document.getElementById("wind4").textContent= "Wind: " + data.daily[3].wind_speed + " MPH"
        document.getElementById("humid4").textContent= "Humidity: " + data.daily[3].humidity + " %"

        document.getElementById("icon5").src="http://openweathermap.org/img/wn/"+data.daily[4].weather[0].icon+".png"
        document.getElementById("date5").textContent= moment().add(5, 'days').format('MM/DD/YYYY')
        document.getElementById("temp5").textContent= "Temp: " + data.daily[4].temp.day + " deg F"
        document.getElementById("wind5").textContent= "Wind: " + data.daily[4].wind_speed + " MPH"
        document.getElementById("humid5").textContent= "Humidity: " + data.daily[4].humidity + " %"

    });
}