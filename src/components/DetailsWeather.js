import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./DetailsWeather.css";
class DetailsWeather extends React.Component {
  state = {
    input: ""
  };

  render() {
    for(var i=0;i<8;i++){
      {this.props.details[i].dt_txt=this.props.details[i].dt_txt.substr(11,5)}
    }
    var l = [];
    for(var i=1;i<8;i++){
      l.push(<div>
        <div className="time">{this.props.details[i].dt_txt}</div>
          <img src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
          <div className="day">{this.props.details[i].main.temp}<span>&#176;</span>C</div>
        </div>);
    }
    return (
      <div className="times">
            {l}
          </div>
    );
  }
}
export default DetailsWeather;
 
 
