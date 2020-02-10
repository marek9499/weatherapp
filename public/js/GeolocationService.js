import * as Request from './Request.js';
//import { get } from 'http';

if (document.cookie.indexOf('weatherLocation') == -1) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onServiceSuccess, onServiceError);
    }
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
    console.log('zapisuje ciastka')
    document.cookie = `weatherLocation=${JSON.stringify(weatherData)}; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
}

function onServiceError() {
    alert("aby zapewnic funkcjonalnosc strony, prosimy o udostepnienie danych do polozenia");
}