import * as Cookie from './Cookie.js';

const lastSearchedCities = Cookie.get("lastSearchedCities") ? Cookie.get("lastSearchedCities").split(",") : undefined;
console.log(lastSearchedCities);

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", e => {

        let cityName = document.querySelector(".weather__input").value;

        if (lastSearchedCities == undefined) {
            Cookie.set("lastSearchedCities", cityName, 365);
        }
        else if (lastSearchedCities != undefined) {
            let citiesArray = lastSearchedCities;
            if (citiesArray.length == 4) {
                //DOM displays the last 4 searched cities
                citiesArray.shift();
                document.querySelector(".weather__cities").children[0].remove();
            }
            citiesArray.push(cityName);
            Cookie.set("lastSearchedCities", citiesArray, 365);

            const btn = document.createElement('button');
            btn.setAttribute('class', 'weather__city btn btn-white');
            btn.textContent = cityName;
            document.querySelector('.weather__cities').appendChild(btn);
        }
    });

    /*
    Let's render previously searched cities
    */

    if (lastSearchedCities != undefined) {
        for (const currentCity of lastSearchedCities) {
            const btn = document.createElement('button');
            btn.setAttribute('class', 'weather__city btn btn-white');
            btn.textContent = currentCity;
            document.querySelector('.weather__cities').appendChild(btn);
        }
    }
});