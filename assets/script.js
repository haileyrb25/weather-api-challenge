const searchHistory = [];
// const weatherapiUrl = "https://api.openweathermap.org/";
const apiKey = "b4bd8eb5664abf13763c667594a43480";





dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

var weatherapiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b4bd8eb5664abf13763c667594a43480";

function weatherData(weatherApi) {
    fetch(weatherApi)
    .then(function(res) {
       return res.json()
    })
    .then(function(data) {

    })
}
weatherData(weatherapiUrl);