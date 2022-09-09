import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      date: "Thursday 22:00",
    });
  }

  if (weatherData.ready) {
    console.log(weatherData);

    return (
      <div className="Weather container">
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            className="search-form"
          />
          <input type="submit" value="Search" className="search-btn" />
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col col-left">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <p>
              {Math.round(weatherData.temperature)}{" "}
              <span className="units">°C</span>{" "}
            </p>
          </div>
          <div className="col">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4c6e3574ee40805d6cf2ed08e07f518d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <div>Loading...</div>;
  }
}

export default Weather;
