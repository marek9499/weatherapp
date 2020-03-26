# Aplikacja pogodowa

![responsive](https://marek9499.github.io/portfolio/img/mockups/weatherapp/Mockup.jpg)

## Użyte technologie

HTML5, CSS (BEM, SCSS, OOCSS), JS, NODEJS, EXPRESS (ROUTING), HANDLEBARS

## Opis

Aplikacja napisana w ramach nauki backendu, zarówno jak i frontendu. Strona, jak przystało na obecne standardy, została stworzona przede wszystkim na urządzenia mobilne aby
użytkownik na każdej rozdzielczości mógł sprawdzić jej działanie. W aplikacji wykorzystałem technologie, których działanie jak najbardziej jestem w stanie zrozumieć i opisać dlaczego coś jest skonstruowane tak, a nie inaczej. <br> Przy pierwszym wejściu użytkownik jest proszony o udostępnienie lokalizacji aby aplikacja mogła działać zgodnie z przeznaczeniem. Po pomyślnym udzieleniu dostepu zapisuję bieżącą lokalizację do **localStorage** aby za ponownym wejściem nie prosić o dane jeszcze raz. Używając odpowiednego API konwertuję koordynaty na nazwę miasta rzecz jasna 😃. Oprócz tego mamy możliwość manualnego wpisania miasta, które jest zapisywane i pokaże się w ostatnio wyszukiwanych. Maksymalnie pokazują się ostatnio 4 wyszukiwane miasta. Mamy również możliwość skorzystania z trybu ciemnego. Pokusiłem się o skorzystanie z biblioteki **ChartJS** aby renderować wykres temperatury na najbliższe 24 godziny.

## Struktura

```
│   app.js
│   
├───js
│       config.js
│       url.js
│           
├───public
│   ├───css
│   │   │   css.css
│   │   │   css.css.map
│   │   │   css.scss
│   │   │   
│   │   └───rwd
│   │           rwd.css
│   │           rwd.css.map
│   │           rwd.scss
│   │           
│   ├───fonts
│   │       Lato-Regular.ttf
│   │       
│   ├───img
│   │       moon.png
│   │       moon2.png
│   │       rain.png
│   │       
│   └───js
│           Chart.bundle.js
│           Chart.bundle.min.js
│           Chart.css
│           Chart.js
│           Chart.min.css
│           Chart.min.js
│           Cookie.js
│           Darkmode.js
│           DOM.js
│           Form.js
│           GeolocationService.js
│           Request.js
│           
├───routes
│       api.js
│       
└───views
        home.hbs
```
