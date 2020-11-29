const searchCity = document.getElementById("search-city");
const submitBtn = document.getElementById("submit-button");
const clearHstry = document.getElementById("clear-history");
const currentCty = document.getElementById("city-name");
const currentDte = document.getElementById("current-date");
const temp = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpd = document.getElementById("wind-speed");
const uvIndx = document.getElementById("uv-index");
const foreCast = document.getElementById("forecast");


function cityWeather(cityName) {
    const APIKEY = "3024ac46a81fa285ebdedcec74633cb2"

    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    $.ajax({
    url: queryURL,
    method: 'GET'
    }).then(function (response) {
    $("#weatherIcon").empty();
}