import React from "react";

const Weather = props => {

    var itemList = props.items.map(item => (
        <li key = {item.id}>   
            <button onClick = {props.deleteItem}>X</button>     
            <p>Місто: {item.city.charAt(0).toUpperCase() + item.city.slice(1)}, {item.sys.country}</p>
            <p>Температура: {Math.trunc(item.temp.temp)} градусів</p>
            <p>Тиск: {item.pressure}</p>
            <p>Хмарність: {item.clouds}%</p>
            <p>Вітер: {item.wind.speed} м/с</p>
            <img src={item.icon} alt =""/>
            <p>Опис: {item.description}</p>

        </li>
    ));
    return(
        <div className="weatherInfo">
            <ul className="weather-List">{itemList}</ul>
        </div>
    );
}
export default Weather;