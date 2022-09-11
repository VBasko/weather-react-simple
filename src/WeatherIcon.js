import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiDayRainMix,
  WiDayLightning,
  WiNightLightning,
  WiSnowflakeCold,
  WiDayFog,
  WiNightFog,
  WiNightRainMix,
} from "react-icons/wi";

function WeatherIcon(props) {
  const icons = {
    "01d": <WiDaySunny />,
    "01n": <WiNightClear />,
    "02d": <WiDayCloudy />,
    "02n": <WiNightCloudy />,
    "03d": <WiCloud />,
    "03n": <WiCloud />,
    "04d": <WiCloudy />,
    "04n": <WiCloudy />,
    "09d": <WiShowers />,
    "09n": <WiShowers />,
    "10d": <WiDayRainMix />,
    "10n": <WiNightRainMix />,
    "11d": <WiDayLightning />,
    "11n": <WiNightLightning />,
    "13d": <WiSnowflakeCold />,
    "13n": <WiSnowflakeCold />,
    "50d": <WiDayFog />,
    "50n": <WiNightFog />,
  };

  return <div className="WeatherIcon">{icons[props.code]}</div>;
}

export default WeatherIcon;
