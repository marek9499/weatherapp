import * as Request from './Request.js';
import * as Cookie from './Cookie.js';

/*
If the user visits page for the first time
*/
if (document.cookie.indexOf('weatherLocation') == -1) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onServiceSuccess, onServiceError);
    }
}
else {
    /*
    And the every next time...
    */
    const currentCity = JSON.parse(Cookie.get('weatherLocation')).city;
    Request.collectWeatherData(currentCity);
}

async function onServiceSuccess(data) {
    const { latitude, longitude } = data.coords;

    const currentCity = await Request.getCityByPosition({
        lat: latitude,
        lot: longitude
    });

    const weatherData = {
        city: currentCity,
        lat: latitude,
        lot: longitude
    }

    Request.collectWeatherData(currentCity);

    document.cookie = `weatherLocation=${JSON.stringify(weatherData)}; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
}


function onServiceError() {
    alert("aby zapewnic funkcjonalnosc strony, prosimy o udostepnienie danych do polozenia");
}