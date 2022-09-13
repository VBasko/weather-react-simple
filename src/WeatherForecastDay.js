import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
      date
    );
    return day;
  }

  function maxTemp() {
    return `${Math.round(props.forecast.temp.max)}°`;
  }

  function minTemp() {
    return `${Math.round(props.forecast.temp.min)}°`;
  }

  return (
    <div>
      <div className="forecast-day active">
        <div>{day()}</div>
        <div className="icon">
          <WeatherIcon code={props.forecast.weather[0].icon} />
        </div>
        <div>
          {maxTemp()} <span className="minimum">{minTemp()}</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecastDay;
