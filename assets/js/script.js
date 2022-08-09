var cityInput = $("#city-input").val();


///this section will be fore city entry and saving past search results
$("#searchBtn").on('click', function(event){
    var cityInput = $("#city-input").val();
    event.preventDefault();
    localStorage.setItem("cityname", cityInput);
})

function cityHistory(){
    var pastCity = localStorage.getItem("cityname")
    $("#city-list").append(pastCity)
}
cityHistory();
///only saves last search result...need to save all

console.log(localStorage.getItem("cityname"))

