import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./CurrentWeather.css";
class CurentWeather extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
      <img className="img0" src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
          <div className="DayWeather">partly cloudy</div>
          <div className="temperature">
          <div className="tempw">Temperature</div>
          <div className="temp"> 10<span>&#176;</span>  to 11<span>&#176;</span> C</div>
          </div>
          <div className="weather">
            <div className="humidity">Humidity</div><div className="humidityvalue">78</div>
            <div className="pressure">Pressure</div><div className="pressurevalue">1008.48</div>
          </div>
          </div>
    );
  }
}
export default CurentWeather;
 
