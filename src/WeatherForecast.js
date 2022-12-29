import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "73a00877081bd43422bdee0f3022beb5";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">Thu</div>
        <div className="WeatherForecastIcon">
          <WeatherIcon code="04d" size={36} />
        </div>
        <div className="WeatherForecast-Temperatures">
          <span className="WeatherForecast-Temperature-max">17°</span>
          <span className="WeatherForecast-Temperature-min">10°</span>
        </div>
      </div>
    </div>
  );
}
