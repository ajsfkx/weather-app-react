import React from "react";
import DateFormat from "./DateFormat";

export default function Weatherinfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateFormat date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="icon"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
