const configWeather = require('./config.js')

exports.currentWeatherURL = () => {
    return `${configWeather.ENDPOINT}/${configWeather.CURRENT_WEATHER}?APPID=${configWeather.API_KEY}&lang=pl&units=metric&q=`;
}