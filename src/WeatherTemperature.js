import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function celciusTemp(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheitTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celcius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit icon">
          °C |
          <a href="/" onClick={fahrenheitTemp} className="conversion">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahr = (props.celcius * 5) / 9 + 32;
    console.log(fahr);
    return (
      <div>
        <span className="temperature">{Math.round(fahr)}</span>
        <span className="unit icon">
          <a href="/" onClick={celciusTemp} className="conversion">
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
