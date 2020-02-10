const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios');
const weatherURLs = require('../js/url')
const router = express.Router();

const app = express()
app.use(bodyParser.json())

router.get('/:city/now', (req, res) => {
    const city = req.params.city;

    axios({
        method: 'get',
        url: weatherURLs.currentWeatherURL() + city
    }).then(response => {
        res.json(response.data);
    });
});

router.get('/currentCity', (req, res) => {
    res.send(req.cookies);
});

/*
we pass 
*/

router.get('/:city/hourly', (req, res) => {
    const city = req.params.city;

    axios({
        method: 'get',
        url: weatherURLs.hourlyWeatherURL() + city
    }).then(response => {
        res.json(response.data);
    });
});


router.get('/weather/:city', (req, res) => {
    axios({
        method: 'get',
        url: weatherURLs.currentWeatherURL() + req.params.city
    }).then(response => {
        res.json(response.data);
    });
});


/*
weather for now
*/

router.post('/weather', (req, res) => {
    axios({
        method: 'get',
        url: weatherURLs.currentWeatherURL() + req.body.weather__cityname
    }).then(response => {
        res.json(response.data);
    });
});

module.exports = router;