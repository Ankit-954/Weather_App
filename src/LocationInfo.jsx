import React from 'react';
import './LocationInfo.css'; // Create a CSS file for styling if needed

const LocationInfo = ({ weather, dateBuilder }) => (
  <div className="location-box">
    <div className="location">
      {weather.name}, {weather.sys.country}
      <div className="date">{dateBuilder(new Date())}</div>
    </div>
    <div className="weather-box">
      <div className="temp">{Math.round(weather.main.temp)}°c</div>
      <div className="weather">{weather.weather[0].main}</div>
    </div>
  </div>
);

export default LocationInfo;
