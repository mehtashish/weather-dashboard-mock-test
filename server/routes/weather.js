const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: 'City parameter is required!' });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        const weatherData = {
            city: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].main,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
        };

        res.json(weatherData);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ error: 'Invalid city entered or API error' });
    }
});

module.exports = router;