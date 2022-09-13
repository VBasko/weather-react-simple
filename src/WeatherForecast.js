import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="forecast-day active">
        <p>Mon</p>
        <p className="icon">
          <WeatherIcon code="01d" />
        </p>
        <p>
          25° <span class="minimum">21°</span>
        </p>
      </div>
      <div className="forecast-day">
        <p>Mon</p>
        <p className="icon">
          <WeatherIcon code="01d" />
        </p>
        <p>
          25° <span class="minimum">21°</span>
        </p>
      </div>
      <div className="forecast-day">
        <p>Mon</p>
        <p className="icon">
          <WeatherIcon code="01d" />
        </p>
        <p>
          25° <span class="minimum">21°</span>
        </p>
      </div>
      <div className="forecast-day">
        <p>Mon</p>
        <p className="icon">
          <WeatherIcon code="01d" />
        </p>
        <p>
          25° <span class="minimum">21°</span>
        </p>
      </div>
      <div className="forecast-day">
        <p>Mon</p>
        <p className="icon">
          <WeatherIcon code="01d" />
        </p>
        <p>
          25° <span class="minimum">21°</span>
        </p>
      </div>
    </div>
  );
}

export default WeatherForecast;
