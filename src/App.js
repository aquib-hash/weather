import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import CityWeatherOverview from './Components/CityWeatherOverview';
import WeatherTile from './Components/WeatherTile';
import OtherCities from './Components/OtherCities';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
};


    const [currentWeather, setCurrentWeather] = useState(null);
    const [weeklyForecast, setWeeklyForecast] = useState([]);
    const [otherCities, setOtherCities] = useState([]);

    useEffect(() => {
        // Fetch current weather for the main city
        const fetchCurrentWeather = async () => {
            const MAIN_CITY = 'Seattle'; // Change the main city name here
            const API_KEY = 'fbdcec910f784827a57183341232310'; 
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${MAIN_CITY}`);
            const data = await response.json();
            setCurrentWeather(data);
        };

        // Fetch weekly forecast for the main city
        const fetchWeeklyForecast = async () => {
            const MAIN_CITY = 'Seattle'; // Change the main city name here
            const API_KEY = 'fbdcec910f784827a57183341232310'; 
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${MAIN_CITY}&days=7`);
            const data = await response.json();
            setWeeklyForecast(data.forecast.forecastday);
        };

        // Fetch current weather for other cities
        const fetchOtherCitiesWeather = async () => {
            const OTHER_CITIES = ['New York', 'Los Angeles', 'Chicago']; // Change the other cities here
            const API_KEY = 'fbdcec910f784827a57183341232310'; 
            const data = [];

            for (const CITY of OTHER_CITIES) {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`);
                const cityData = await response.json();
                data.push(cityData);
            }
            setOtherCities(data);
        };

        fetchCurrentWeather();
        fetchWeeklyForecast();
        fetchOtherCitiesWeather();
    }, []);
    const [theme] = useState("light");
    return (
      
      <div className={isDarkMode ? 'dark' : 'white'}>
        <div className="app-container" toggleTheme = {toggleTheme}>
             <div className={`app-container ${theme}${toggleTheme}`}>

            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

            <CityWeatherOverview data={currentWeather} />
            <div className="week-forecast">
                {weeklyForecast.map(day => <WeatherTile isDarkMode={isDarkMode} key={day.date} day={day.date} temp={day.day.avgtemp_c} />)}
            </div>
            <OtherCities data={otherCities} />
            </div>
        </div>
        </div>
    );
}

export default App; 


