import * as DOM from './DOM.js';

const sitePort = location.port ? ":" + location.port : location.port;

export async function getCityByPosition(param) {
    let resp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${param.lat}&lon=${param.lot}`);
    let data = await resp.json();
    return data.address.city;
}

export async function getShortWeatherData(city) {
    let resp = await fetch(`http://127.0.0.1${sitePort}/api/${city}/hourly`);
    let data = await resp.json();
    return Promise.resolve(data);
}

export async function getExtendedWeatherDataNow(city) {
    let resp = await fetch(`http://127.0.0.1${sitePort}/api/weather/${city}`);
    let data = await resp.json();
    return Promise.resolve(data);
}

export async function collectWeatherData(city)
{
    const shortdata = await getShortWeatherData(city);
    await DOM.prepareChartData(shortdata);

    const extendeddata = await getExtendedWeatherDataNow(city)
    await DOM.fillWeatherInfo(extendeddata);
}