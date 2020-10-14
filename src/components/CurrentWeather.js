import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./CurrentWeather.css";
class CurentWeather extends React.Component {
  state = {
    input: ""
  };

  render() {
  // alert(this.props.currentweather.weather[0].id);
  var icon = [];
  var id =this.props.currentweather.weather[0].id; 
  if(id>801)
     icon.push(<img className="img0" src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />);
  else if(id==801)
  icon.push(<img className="img0" src={require('../img/weather-icons/partlycloudy.svg')} alt="storm icon" />);
  else if(id==800)
  icon.push(<img className="img0" src={require('../img/weather-icons/clear.svg')} alt="storm icon" />);
  else if(id>=700 )
  icon.push(<img className="img0" src={require('../img/weather-icons/fog.svg')} alt="storm icon" />);
  else if(id>=600)
  icon.push(<img className="img0" src={require('../img/weather-icons/snow.svg')} alt="storm icon" />);
  else if(id>=500)
  icon.push(<img className="img0" src={require('../img/weather-icons/rain.svg')} alt="storm icon" />);
  else if(id>=300)
  icon.push(<img className="img0" src={require('../img/weather-icons/drizzle.svg')} alt="storm icon" />);
  else if(id<300)
  icon.push(<img className="img0" src={require('../img/weather-icons/storm.svg')} alt="storm icon" />);
  
  
    return (
      <div>
        
      {icon}
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
 
