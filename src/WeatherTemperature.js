import React, { useState } from "react";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return props.celsius * 1.8 + 32;
  }

  if (unit === "celsius") {
    return (
      <p>
        {Math.round(props.celsius)}
        <span className="units">
          <a href="/" className="disabled">
            °C
          </a>{" "}
          |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </p>
    );
  } else {
    return (
      <p>
        {Math.round(fahrenheit())}
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |{" "}
          <a href="/" className="disabled">
            °F
          </a>
        </span>
      </p>
    );
  }
}

export default WeatherTemperature;
