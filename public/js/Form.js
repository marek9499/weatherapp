import * as Cookie from './Cookie.js';

window.addEventListener("DOMContentLoaded", () => {

    let cookieArray = [];

    if (document.cookie.indexOf('lastSearchedCities') > -1) {
        const cookies = Cookie.get('lastSearchedCities').split(",");
        //console.log(cookies.length);
        for (const currentCity of cookies) {
            const btn = document.createElement('button');
            btn.setAttribute('class', 'weather__city btn btn-white');
            btn.textContent = currentCity;
            document.querySelector('.weather__cities').appendChild(btn);
        }

        if (cookies.length == 4) {
            cookies.shift();
        }
        cookieArray = [...cookies];
    }

    console.log(cookieArray);

    document.querySelector("form").addEventListener("submit", (e) => {
        let inputCity = document.querySelector(".weather__input").value;

        if (cookieArray.length > 0) {
            if (cookieArray.length == 4) {
                document.querySelector('.weather__city').remove();
                cookieArray.shift();
                Cookie.set('lastSearchedCities', cookieArray);

                console.log('usuwam pierwszy rekord tabliocy');
            }
        }
        else {
            Cookie.set('lastSearchedCities', inputCity);
        }

        cookieArray.push(inputCity);
        Cookie.set('lastSearchedCities', cookieArray);

        const btn = document.createElement('button');
        btn.setAttribute('class', 'weather__city btn btn-white');
        btn.textContent = inputCity;
        document.querySelector('.weather__cities').appendChild(btn);

        inputCity = "";
    });
});