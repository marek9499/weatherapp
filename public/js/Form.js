import * as Cookie from './Cookie.js';
import * as Request from './Request.js';

let lastSearchedCities = Cookie.get("lastSearchedCities") ? JSON.parse(Cookie.get("lastSearchedCities")) : [];
console.log(lastSearchedCities.length);

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", e => {
        lastSearchedCities = Cookie.get("lastSearchedCities") ? JSON.parse(Cookie.get("lastSearchedCities")) : [];
        let cityName = document.querySelector(".weather__input").value;

        /*
        When we try to check weather for the first time, we have to create array from single string in order to keep data in local storage 
        */
        if (lastSearchedCities.length == 0) {
            let cityArray = cityName.split(" ");
            Cookie.set("lastSearchedCities", JSON.stringify(cityArray), 365);
            console.log('saved in cookie');
        } else {
            lastSearchedCities = lastSearchedCities;
            lastSearchedCities.push(cityName);

            console.log(lastSearchedCities);
            Cookie.set("lastSearchedCities", JSON.stringify(lastSearchedCities), 365);
            //we will render only 4 cities in our list
            if (lastSearchedCities.length == 5) {
                lastSearchedCities.shift();
                Cookie.set("lastSearchedCities", JSON.stringify(lastSearchedCities), 365);
                document.querySelector(".weather__cities").children[0].remove(); //remove last button in cities list
            }
        }

        const btn = document.createElement('button');
        btn.setAttribute('class', 'weather__city btn btn-white');
        btn.textContent = cityName;
        document.querySelector('.weather__cities').appendChild(btn);
    });

    /*
    Let's render previously searched cities, if there are
    */
    if (lastSearchedCities.length != 0) {
        for (const currentCity of lastSearchedCities) {
            const btn = document.createElement('button');
            btn.setAttribute('class', 'weather__city btn btn-white');
            btn.textContent = currentCity;
            document.querySelector('.weather__cities').appendChild(btn);
        }
    }

    /*
    User clicks a button with city name
    */
    document.querySelectorAll('button').forEach(el => {
        el.addEventListener("click", event => {
            const cityName = event.target.innerText;
            Request.collectWeatherData(cityName);
        })
    })
});