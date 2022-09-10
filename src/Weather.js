import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "4c6e3574ee40805d6cf2ed08e07f518d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather container">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="search-form"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="search-btn" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}

export default Weather;
