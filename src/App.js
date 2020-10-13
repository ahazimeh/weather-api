import React, { Component } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import DetailsWeather from "./components/DetailsWeather";
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
          <Search weather={"FIND WEATHER"} handleInput={this.handleInputChange} />
          <CurrentWeather handleInput={this.handleInputChange} />
          <DetailsWeather handleInput={this.handleInputChange} />
          </div>
      </div>
    );
  }
}

export default App;
