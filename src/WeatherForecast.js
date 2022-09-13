import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState({});

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <WeatherForecastDay forecast={forecast[0]} />
        <WeatherForecastDay forecast={forecast[1]} />
        <WeatherForecastDay forecast={forecast[2]} />
        <WeatherForecastDay forecast={forecast[3]} />
        <WeatherForecastDay forecast={forecast[4]} />
      </div>
    );
  } else {
    let apiKey = "4c6e3574ee40805d6cf2ed08e07f518d";
    let latitude = props.latitude;
    let longitude = props.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

export default WeatherForecast;
