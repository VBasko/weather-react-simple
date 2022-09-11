import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col col-left">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <p>
            {Math.round(props.data.temperature)}{" "}
            <span className="units">°C</span>{" "}
          </p>
        </div>
        <div className="col">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
