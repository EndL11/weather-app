import React from 'react';
import './App.css';

import {About, Lesson4, SomeText, Form, RegisterForm, SuccessRegister, Weather} from "./components";

const API_KEY = "3042b9bfd374130956c1e55d218c8156";

class WeatherApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      role: "Аналітик",
      email: '',
      password: '',
      isAgree: false,
      options: ["Дизайнер", "Аналітик", "Менеджер", "Адміністратор"],
      error: undefined,
      some_text: "Ваш текст тут!",
      items: []
    }

    this.deleteItem = this.deleteItem.bind(this);
    this.getSomeText = this.getSomeText.bind(this);
    this.getData = this.getData.bind(this);
    this.OnChange = this.OnChange.bind(this);
    this.OnSelect = this.OnSelect.bind(this);
  }

  OnSelect = (e) => {
    this.setState({
      role: e.target.value
    });
  }

  OnChange = (e) => {
    if(e.target.type === "checkbox"){
      this.setState(prevState => ({
        isAgree: !prevState.isAgree
      }));
    }
    else{
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    }

  }

  getSomeText = (e) => {
    if(e.target.value.split(' ').join('') === "")
    {
      this.setState({
        some_text: "Ваш текст тут!",
      });
    }else{
      this.setState({
        some_text: e.target.value,
      });
    }
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
        error: "Город не найден или введен не верно!",
      });
      return;
    }
    var city = e.target.elements.city.value;
    e.target.elements.city.value = "";
    const url_api = `https://api.openweathermap.org/data/2.5/weather?lang=ua&q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url_api);
    if(!response.ok){
      this.setState({
        error: "Город не найден или введен не верно!"
      });
      return;
    }

    const data_promise = response.json();
    data_promise.then(res => {
      
      var arr = this.state.items;
      var existItem = arr.find(x => x.id === res.id);
      if(existItem){
        this.setState({
          error: "Город уже добавлен."
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
          {this.state.items.length > 0 && 
                <Weather items = {this.state.items} deleteItem = {this.deleteItem}/>
            }
          <Lesson4 getTextFunc = {this.getSomeText}/>
          <SomeText some_text = {this.state.some_text}/>

          {this.state.isAgree === false ? (
            <RegisterForm
           role = {this.state.role}
           onChange = {this.OnChange}
           onSelect = {this.OnSelect}
           isAgree = {this.state.isAgree}
           password = {this.state.password}
           email = {this.state.email}
           options = {this.state.options}
           />
          ) : (
          <SuccessRegister 
            role = {this.state.role}
            email = {this.state.email}
            password =  {this.state.password}
            OnChange = {this.OnChange}
            isAgree = {this.state.isAgree}
          />
          )}
        </div>
      );  
  }
}
export default WeatherApp;
