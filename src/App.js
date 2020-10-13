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
    var c = [];

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

      if( list[i].dt_txt.includes("2017-02-17"))
      {
        c.push(list[i]);
        // c[0].main.temp_max=-1;

      }



    }

    function sortf(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return a.dt_txt.localeCompare(b.dt_txt);
    }
    c.sort(sortf);
    // http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=57cf9da04987637a23fcbc26f5356e12

    return (
      <div>
        {
          //  c[2].main.temp_max
          c[1].main.temp
        }
        {
          
        //cur//list number we will be using
        }
        {/* {list[0].main.temp}
        {fakeWeatherData.city.name} */}
        <div className="details">
          {/* <SayHi /> */}
          {/* <SayHello color="black" name={this.state.name} /> */}
          <Search weather={"FIND WEATHER"} handleInput={this.handleInputChange} />
          <CurrentWeather currentweather = {list[5]} handleInput={this.handleInputChange} />
          <DetailsWeather details = {c} handleInput={this.handleInputChange} />
          </div>
      </div>
    );
  }
}

export default App;
