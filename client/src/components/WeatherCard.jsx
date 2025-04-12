import React from 'react';

const WeatherCard = ({ data }) => {
    return (
        <div className="weather-card">
            <h2>{data.city}</h2>
            <img src={data.icon} alt={data.condition} />
            <p>{data.condition}</p>
            <p>Temperature: {data.temperature}°C</p>
            <p>Humidity: {data.humidity}%</p>
            <p>Wind Speed: {data.windSpeed} m/s</p>
        </div>
    );
};

export default WeatherCard;