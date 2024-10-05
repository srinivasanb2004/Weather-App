import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function Weather() {
    const [city, setcity] = useState("");
    const [weather, setweather] = useState("");
    const [temp, settemp] = useState("");
    const [desc, setdesc] = useState("");

    function handlecity(e) {
        setcity(e.target.value);
    }

    function Getweather() {

        var weatherData = axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1ac0283872a34abf3ab435091ad0bf6&units=metric`
        );

        weatherData
            .then(function (success) {
                console.log(success.data);
                setweather(success.data.weather[0].main);
                settemp(success.data.main.temp);
                setdesc(success.data.weather[0].description);
            })
            .catch(function (errmsg) {
                console.log("error");
            });
    }

    return (

        <div className="whole-container">

          <div className="rain-container"> 
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
          </div>
      
          <div className="weather-card">

            <h1 className="app-title">
              Weather Report <i className="fas fa-cloud"></i>
            </h1>

            <p className="app-description">Get the current weather for your city !</p>
      
            <input
              type="text"
              className="city-input"
              placeholder="Enter city name..."
              onChange={handlecity}
            />

            <button className="get-weather-btn" onClick={Getweather}>
              Get Weather
            </button>
      
            <div className="weather-info">
              <h2>Weather: {weather}</h2>
              <h2>Temperature: {temp}°C</h2>
              <h2>Description: {desc}</h2>
            </div>

          </div>
        </div>
      );
      
}

export default Weather;
