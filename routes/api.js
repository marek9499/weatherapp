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
        url: weatherURLs.currentWeatherURL() + encodeURIComponent(city)
    }).then(response => {
        res.json(response.data);
    });
});

router.get('/:city/hourly', (req, res) => {
    const city = req.params.city;

    axios({
        method: 'get',
        url: weatherURLs.hourlyWeatherURL() + encodeURIComponent(city)
    }).then(response => {
        res.json(response.data);
    });
});

router.get('/weather/:city', (req, res) => {
    axios({
        method: 'get',
        url: weatherURLs.currentWeatherURL() + encodeURIComponent(req.params.city)
    }).then(response => {
        res.json(response.data);
    });
});

router.post('/weather', (req, res) => {
    axios({
        method: 'get',
        url: weatherURLs.currentWeatherURL() + encodeURIComponent(req.body.weather__cityname)
    }).then(response => {
        res.json(response.data);
    });
});

module.exports = router;