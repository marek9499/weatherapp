export async function getCityByPosition(param) {
    let resp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${param.lat}&lon=${param.lot}`);
    let data = await resp.json();
    return data.address.city;
}

export async function getShortWeatherData(city) {
    let resp = await fetch(`http://127.0.0.1:5500/api/${city}/hourly`);
    let data = await resp.json();
    return data;
}

export async function getExtendedWeatherDataNow(city) {
    let resp = await fetch(`http://127.0.0.1:5500/api/weather/${city}`);
    let data = await resp.json();
    return data;
}