import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';
import { useEffect } from 'react';

function App() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchWeather = async (city) => {
        if (!city.trim()) {
            setError('Please enter a city name.');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/weather?city=${city}`);
            setWeather(response.data);
        } catch (err) {
            setError('City not found or network error.');
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const prevClass = document.body.dataset.weatherClass;
        if (prevClass) {
            document.body.classList.remove(prevClass);
        }

        if (weather?.condition) {
            const newClass = weather.condition.toLowerCase().replace(/\s/g, '-');
            document.body.classList.add(newClass);
            document.body.dataset.weatherClass = newClass;
        }
    }, [weather]);

    return (
        <div className={`app-container ${weather?.condition ? weather.condition.toLowerCase().replace(/\s/g, '-') : ''}`}>
            <h1 className="app-title">☁️ Real-Time Weather Dashboard</h1>
            <SearchBar onSearch={fetchWeather} />
            {loading && <p>Loading...</p>}
            {error && <p className="error-text">{error}</p>}
            {weather && <WeatherCard data={weather} />}
        </div>
    );
}

export default App;