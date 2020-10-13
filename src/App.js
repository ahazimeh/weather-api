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
    var list=fakeWeatherData.list;
    var cur;
    for(var i=0;i<list.length;i++){
      if( list[i].dt_txt.localeCompare("2017-02-17 03:00:00") == 0)
      {
        cur = i;
      }
      list[i].main.temp -=273.15;
      list[i].main.temp_min -=273.15;
      list[i].main.temp_max -=273.15;
      
      list[i].main.temp = Math.round(list[i].main.temp);
      list[i].main.temp_min = Math.round(list[i].main.temp_min);
      list[i].main.temp_max = Math.round(list[i].main.temp_max);
    }
    return (
      <div>
        {
        cur//list number we will be using
        }
        {list[0].main.temp}
        {fakeWeatherData.city.name}
        <div className="details">
          {/* <SayHi /> */}
          {/* <SayHello color="black" name={this.state.name} /> */}
          <Search weather={"FIND WEATHER"} handleInput={this.handleInputChange} />
          <CurrentWeather currentweather = {list[5]} handleInput={this.handleInputChange} />
          <DetailsWeather details = {list} handleInput={this.handleInputChange} />
          </div>
      </div>
    );
  }
}

export default App;
