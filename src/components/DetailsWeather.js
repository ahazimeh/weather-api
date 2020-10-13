import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./DetailsWeather.css";
class DetailsWeather extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="times">
            <div>
              <div className="time">03:00</div>
              <img src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">8<span>&#176;</span>C</div>
            </div>
            <div>
            <div className="time">06:00</div>
              <img src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">9<span>&#176;</span>C</div>
            </div>


            <div>
            <div className="time">09:00</div>
              <img src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">14<span>&#176;</span>C</div>
            </div>
            <div>
            <div className="time">12:00</div>
              <img src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">17<span>&#176;</span>C</div>
            </div>


            <div>
            <div className="time">15:00</div>
              <img src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">18<span>&#176;</span>C</div>
            </div>
            <div>
            <div className="time">18:00</div>
              <img src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">16<span>&#176;</span>C</div>
            </div>

            <div>
            <div className="time">21:00</div>
              <img src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">13<span>&#176;</span>C</div>
              
            </div>






          </div>
    );
  }
}
export default DetailsWeather;
 
 
