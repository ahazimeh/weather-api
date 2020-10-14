import React, { Component } from "react";
import Search from "./components/Search";
import SayHi, { SayHello } from "./components/WeatherItem";
import CurrentWeather from "./components/CurrentWeather";
import DetailsWeather from "./components/DetailsWeather";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
var flagCity =0;
var colorClass = "cloud"
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: "London",
      role:undefined,
      flag:0,
      
      
    };
  }

  handleInputChange = value => {
    var color = colorClass === "cloud" ? "rain" : "cloud";
    colorClass = color;
    // this.setState({ colorClass: color });




    this.setState({ name: value });
    this.changeWeather(value);

  };


  componentDidMount() {
    // fetch("http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=2e753ccc114a1bd1d02d58d6adaaeda9")
    // fetch("http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=ffad005b341ddc6ee289355588b4669e")
    // fetch("http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=9f89982b3e80a5be4d59b86343791756")
    // this.props.flagCity=1;
    if(flagCity==0){
      flagCity = 1;
    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+this.state.name+"&cnt=8&units=metric&appid=2e753ccc114a1bd1d02d58d6adaaeda9")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            role:result,
            isLoaded: true,
            // items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    }




    
      
  }


  changeWeather(e){
    
      // this.state.flagCity = 1;
    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+e+"&cnt=8&units=metric&appid=2e753ccc114a1bd1d02d58d6adaaeda9")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            role:result,
            isLoaded: true,
            // items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    
  }

  render() {
    

    // this.componentDidMount();
    // alert(this.state.name);
    var isLoaded1=false;
    var { error, isLoaded, items } = this.state;
    if(isLoaded){
      var x = this.state.role;
      console.log(x);
    var list=x.list;
    var cur;
    var c = [];

    var id = list[0].weather[0].id;
    if(id==800)
      colorClass="clear";
    else if(id<700)
    colorClass="rain";
    else colorClass="cloud";
    
    for(var i=0;i<list.length;i++){
      // if( list[i].dt_txt.localeCompare("2017-02-17 03:00:00") === 0)
      // {
      //   cur = i;
      // }
      console.log(list[i].main.temp);
      if(this.state.flag==0){
      
      // list[i].main.temp -=273.15;
      // list[i].main.temp_min -=273.15;
      // list[i].main.temp_max -=273.15;
      
      list[i].main.temp = Math.round(list[i].main.temp);
      list[i].main.temp_min = Math.round(list[i].main.temp_min);
      list[i].main.temp_max = Math.round(list[i].main.temp_max);
    }
      // if( list[i].dt_txt.includes("2017-02-17"))
      // {
        c.push(list[i]);
      // }



    }
    // this.state.flag=1;        

    function sortf(a,b){
      return a.dt_txt.localeCompare(b.dt_txt);
    }
    c.sort(sortf);


    isLoaded1=true;
  }
    
    if (!isLoaded || !isLoaded1) {
       return <div>Loading...</div>;
    }
    else{
    return (
        <div className={`${colorClass}`}>
          <Search weather={"FIND WEATHER"} handleInput={this.handleInputChange} />
          <CurrentWeather currentweather = {list[0]} />
          <DetailsWeather details = {c} />
          </div>
    );
    }
  }
}

export default App;
