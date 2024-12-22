import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      const apiKey = 'bd007b8ae564945bee0f0288e96d6bb1'; 
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError('City not found');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="bg-blue-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg lg:h-screen">
      <h2 className="text-2xl font-bold dark:text-gray-200">Search Weather</h2>
      <form onSubmit={handleSearch} className="my-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border dark:border-gray-600 rounded mb-2 dark:bg-gray-700 dark:text-white"
        />
        <button className="p-2 bg-blue-500 dark:bg-blue-700 text-white rounded">Search</button>
      </form>
      {error && <p className="text-red-500 dark:text-red-400">{error}</p>}
      {weather && (
        <div className="mt-4">
          <p className="text-lg dark:text-gray-300">Temperature: {weather.main.temp} °C</p>
          <p className="text-lg dark:text-gray-300">Condition: {weather.weather[0].description}</p>
          <p className="text-lg dark:text-gray-300">Humidity: {weather.main.humidity}%</p>
          <p className="text-lg dark:text-gray-300">Wind Speed: {weather.wind.speed} m/s</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="mx-auto mt-4"
          />
        </div>
      )}
    </div>
  );
}

export default Weather;
