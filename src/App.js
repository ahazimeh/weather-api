import React, { Component } from "react";
import Search from "./components/Search";
import SayHi, { SayHello } from "./components/WeatherItem";
import CurrentWeather from "./components/CurrentWeather";
import DetailsWeather from "./components/DetailsWeather";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
var flag = -1;
var colorClass = "cloud";
var name1 = "London",name = "London";
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // name: "London",
      role:undefined,
      
      
    };
  }

  handleInputChange = value => {
    // var color = colorClass === "cloud" ? "rain" : "cloud";
    // colorClass = color;
    // this.setState({ colorClass: color });




    // this.setState({ name: value });
    this.changeWeather(value);

  };


  componentDidMount() {
    // fetch("http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=2e753ccc114a1bd1d02d58d6adaaeda9")
    // fetch("http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=ffad005b341ddc6ee289355588b4669e")
    // fetch("http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=9f89982b3e80a5be4d59b86343791756")
    
    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+name+"&cnt=8&units=metric&appid=2e753ccc114a1bd1d02d58d6adaaeda9")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            role:result,
            isLoaded: true,
            // items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );




    
      
  }


  changeWeather(e){
    name = e;
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
    var { isLoaded} = this.state;
    if(isLoaded){
      var x = this.state.role;
      console.log(x);
    var list=x.list;

    if(typeof(list)=="undefined"){
      name = name1;
      flag = -1;

      
      // alert(name1);
      this.changeWeather(name1);
      // this.setState({ name: name1 });
      return <div>Loading...</div>;
      // this.changeWeather(this.state.name);
    
      
    
    }
    else{
      name1 = name;
      // flag = 1;

    }
    if(typeof(list)!="undefined"){
      
      
    
    console.log(list);
    var cur;
    var c = [];

    var id = list[0].weather[0].id;
    if(id==800)
      colorClass="clear";
    else if(id<700)
    colorClass="rain";
    else colorClass="cloud";
    
    for(var i=0;i<list.length;i++){
      console.log(list[i].main.temp);
      
      list[i].main.temp = Math.round(list[i].main.temp);
      list[i].main.temp_min = Math.round(list[i].main.temp_min);
      list[i].main.temp_max = Math.round(list[i].main.temp_max);
        c.push(list[i]);



    }      

    function sortf(a,b){
      return a.dt_txt.localeCompare(b.dt_txt);
    }
    c.sort(sortf);
  }
}

    if (!isLoaded) {
       return <div>Loading...</div>;
    }
    else{
      isLoaded=false;
      if(flag ==-1){
        flag=1;
        return (
          <div className={`${colorClass} invis`}>
            <Search weather={"FIND WEATHER"} handleInput={this.handleInputChange} />
            <CurrentWeather currentweather = {list[0]} />
            <DetailsWeather details = {c} />
            </div>
      );
      }
      
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
