export function prepareChartData(data) {
    let chartData = [];

    for (let i = 0; i < data.list.length; i++) {
        chartData.push(data.list[i]);
        if (i == 8) {
            createChart(chartData);
            break;
        }
    }
}

function createChart(data) {
    var ctx = document.getElementById('myChart');

    let weatherData = {
        temps: [],
        tempFeelsLike: [],
        hours: []
    };

    for (const currentData of data) {
        weatherData.temps.push(currentData.main.temp),
            weatherData.tempFeelsLike.push(currentData.main.feels_like),
            weatherData.hours.push(currentData.dt_txt.slice(11).slice(0, -3))
    }


    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: weatherData.hours,
            datasets: [{
                    label: 'temperatura',
                    data: weatherData.temps,
                    backgroundColor: 'red',
                    borderColor: 'orange',
                    fill: false
                },
                {
                    label: 'odczuwalna',
                    data: weatherData.tempFeelsLike,
                    backgroundColor: 'orange',
                    borderColor: 'red',
                    fill: false
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            showTooltips: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                position: 'bottom'
            },
            tooltips: {
                backgroundColor: '#FFF',
                titleFontSize: 16,
                titleFontColor: '#0066ff',
                bodyFontColor: '#000',
                bodyFontSize: 14,
                displayColors: false,
                borderColor: 'black',
                borderWidth: 1
            }
        }
    });
}

export function fillWeatherInfo(data) {
    let weatherData = {};

    weatherData['city'] = data.name;
    weatherData['temp'] = data.main.temp.toFixed(0);
    weatherData['temp_feels_like'] = data.main.feels_like.toFixed(0);
    weatherData['description'] = data.weather[0].description;
    weatherData['humidity'] = data.main.humidity;
    weatherData['sunset'] = data.sys.sunset;


    let timestamp = new Date(weatherData['sunset'] * 1000);
    weatherData['sunset'] = timestamp.getHours() + ":" + timestamp.getMinutes();

    document.querySelector('.weather__currentCity').textContent = weatherData['city'];
    document.querySelectorAll('.details__info')[0].innerHTML = weatherData['temp'] + `°C <span>(${weatherData['temp_feels_like']}°C)</span>`;
    document.querySelector('.weather__dateTime').textContent = weatherData['description'];
    document.querySelectorAll('.details__info')[1].innerText = weatherData['humidity'] + "%";
    document.querySelectorAll('.details__info')[2].textContent = weatherData['sunset'];
}