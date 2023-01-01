import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div>
      <div className="col me-2">{day()}</div>
      <div className="WeatherForecastIcon mt-2 mb-1 ">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div className="WeatherForecast-Temperatures">
        <span className="WeatherForecast-Temperature-max">{maxTemp()}°</span>
        <span className="WeatherForecast-Temperature-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
