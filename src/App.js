import React, { Component } from "react";
import Search from "./components/Search";
import Storm from "./img/weather-icons/storm.svg";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ali"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div>
        <div className="details">
          {/* <SayHi /> */}
          {/* <SayHello color="black" name={this.state.name} /> */}
          <Search handleInput={this.handleInputChange} />
          <img className="img0" src={require('./img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
          <div className="DayWeather">partly cloudy</div>
          <div className="temperature">
          <div className="tempw">Temperature</div>
          <div className="temp"> 10<span>&#176;</span>  to 11<span>&#176;</span> C</div>
          </div>
          <div className="weather">
            <div className="humidity">Humidity</div><div className="humidityvalue">78</div>
            <div className="pressure">Pressure</div><div className="pressurevalue">1008.48</div>
          </div>
          <div className="times">
            <div>
              <div className="time">03:00</div>
              <img src={require('./img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">8<span>&#176;</span>C</div>
            </div>
            <div>
            <div className="time">06:00</div>
              <img src={require('./img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">9<span>&#176;</span>C</div>
            </div>


            <div>
            <div className="time">09:00</div>
              <img src={require('./img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">14<span>&#176;</span>C</div>
            </div>
            <div>
            <div className="time">12:00</div>
              <img src={require('./img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">17<span>&#176;</span>C</div>
            </div>


            <div>
            <div className="time">15:00</div>
              <img src={require('./img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">18<span>&#176;</span>C</div>
            </div>
            <div>
            <div className="time">18:00</div>
              <img src={require('./img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">16<span>&#176;</span>C</div>
            </div>

            <div>
            <div className="time">21:00</div>
              <img src={require('./img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
              <div className="day">13<span>&#176;</span>C</div>
              
            </div>






          </div>
          </div>
      
      </div>
    );
  }
}

export default App;
