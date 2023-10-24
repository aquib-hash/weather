import './WeatherTile.css';
import React from 'react';


function WeatherTile({ day, temp, isDarkMode }) {
    const tileClass = isDarkMode ? 'weather-tile dark' : 'weather-tile';

    return (
        <div className={tileClass}>
            <span className="weather-day">{day}</span>
            <span className="weather-temp">{temp}°C</span>
        </div>
    );
}

export default WeatherTile;

