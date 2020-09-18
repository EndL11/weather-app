import React from 'react';
import './App.css';

import {About,Form, Weather} from "./components";

const API_KEY = "3042b9bfd374130956c1e55d218c8156";

class WeatherApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      error: undefined,
      items: []
    }

    this.deleteItem = this.deleteItem.bind(this);
    this.getData = this.getData.bind(this);
  }

  deleteItem = (id) => {
    var arr = this.state.items;
    var index = arr.findIndex(x => x.id === id);
    arr.splice(index, 1);
    this.setState({
      items: arr,
    });
  }

  getData = async (e) => {
    e.preventDefault();
    if(e.target.elements.city.value.split(' ').join('') === "")
    {
      this.setState({
        error: "Місто не знайдено або невірно введені дані!",
      });
      return;
    }
    var city = e.target.elements.city.value;
    e.target.elements.city.value = "";
    const url_api = `https://api.openweathermap.org/data/2.5/weather?lang=ua&q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url_api);
    if(!response.ok){
      this.setState({
        error: "Місто не знайдено або невірно введені дані!"
      });
      return;
    }

    const data_promise = response.json();
    data_promise.then(res => {
      
      var arr = this.state.items;
      var existItem = arr.find(x => x.id === res.id);
      if(existItem){
        this.setState({
          error: "Місто вже додано."
        });
        return;
      }

      arr.unshift({
        id: res.id,
        city: res.name,
        temp: res.main,
        pressure: res.main.pressure,
        wind: res.wind,
        sys: res.sys,
        clouds: res.clouds.all,
        description: res.weather[0].description,
        icon: `http://openweathermap.org/img/w/${res.weather[0].icon}.png`
      });  

      this.setState({
        items: arr,
        error: undefined
      }); 
    });
  }

  render(){
      return(

        <div className = "main-div">
          <About/>
          <Form gettingData = {this.getData} />
          <br/>

          <p>{this.state.error}</p>
          {
            this.state.items.length > 0 && 
              <Weather items = {this.state.items} deleteItem = {this.deleteItem}/>
          }
        </div>
      );  
  }
}
export default WeatherApp;
