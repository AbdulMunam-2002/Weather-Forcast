// Weather.js

import React, { useState, useEffect } from "react";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import Header from "./Header";
import Footer from "./Footer";
import App from "../App.css"; // Import the CSS file
const api = {
  key: "c70b7c89e5e525983b5acd571c707a37",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [localTime, setLocalTime] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
        fetchCityTime(result);
        fetchWeatherIcon(result);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const fetchCityTime = (result) => {
    if (result && result.timezone) {
      const currentTime = new Date().getTime();
      const offset = new Date().getTimezoneOffset() * 60000;
      const localTime = new Date(currentTime + offset + result.timezone * 1000)
        .toLocaleTimeString("en-US");
      setLocalTime(localTime);
    }
  };

  const fetchWeatherIcon = (result) => {
    if (result && result.weather && result.weather[0]) {
      const iconCode = result.weather[0].icon;
      setWeatherIcon(iconCode);
    }
  };

  useEffect(() => {
    if (weather && weather.timezone) {
      fetchCityTime(weather);
      fetchWeatherIcon(weather);
    }
  }, [weather]);

  return (
    <>
      <div className="bg4">
        <Header />  <div className="search-container">
          <input
            type="text"
            placeholder="Search any place"
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed} className="search-button">
            Get Weather
          </button>
        </div>
        <div className="weather-info">
          <h4 style={{ color: "white", marginTop: "20px" }}>{weather.name}</h4>
          <div className="weather-icon">
            {weatherIcon && (
              <img
                src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
                alt="Weather Icon"
                style={{ width: "60px", height: "60px" }}
              />
            )}
          </div>
          {weather.main && (
            <div className="temperature-info">
              <p style={{ color: "white", fontSize: "50px" }}>{weather.main.temp}&deg; C</p>
              {localTime && <p style={{ color: "white" }}>Local Time: {localTime}</p>}
              <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p style={{ color: "white" }}>feels_like: {weather.main.feels_like} </p>

                        {weather.main.humidity !== undefined && (
                            <p style={{ color: "white" }}>
                            Humidity: <WiHumidity /> {weather.main.humidity}%
                            </p>
                        )}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p style={{ color: "white" }}>Description: {weather.weather[0].description} </p>

                        {weather.wind && weather.wind.speed !== undefined && (
                            <p style={{ color: "white" }}>
                            Wind: <WiStrongWind /> {weather.wind.speed} m/s
                            </p>
                        )}
                    </div>    
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
