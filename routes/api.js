const express = require('express');
const axios = require('axios');
const weatherURLs = require('../js/url')
const router = express.Router();

router.get('/:city/now', (req, res) => {
    const city = req.params.city;

    axios({
        method: 'get',
        url: weatherURLs.currentWeatherURL() + city
    }).then(response => {
        res.json(response.data);
    });
});

module.exports = router;