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
          <div className="DayWeather">{this.props.currentweather.weather[0].description}</div>
          <div className="temperature">
          <div className="tempw">Temperature</div>
          <div className="temp">{this.props.currentweather.main.temp_min}<span>&#176;</span>  to {this.props.currentweather.main.temp_max}<span>&#176;</span> C</div>
          </div>
          <div className="weather">
            <div className="humidity">Humidity</div><div className="humidityvalue">{this.props.currentweather.main.humidity}</div>
            <div className="pressure">Pressure</div><div className="pressurevalue">{this.props.currentweather.main.pressure}</div>
          </div>
          </div>
    );
  }
}
export default CurentWeather;
 
