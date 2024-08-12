import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBox from './SearchBox';
import LocationInfo from './LocationInfo';
import Footer from './Footer';
import './Weather.css';

const api = {
  key: "cfe486f06f6dc9bf548a5393207d1dba",
  base: "https://api.openweathermap.org/data/2.5/",
};

const UNSPLASH_ACCESS_KEY = "n6_ALMqNL6q4XnkgNgZum06P9U1O3mn6gI7NMWKJwr4";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [backgroundImage, setBackgroundImage] = useState("url('https://cdn.pixabay.com/photo/2024/01/24/10/25/ai-generated-8529315_960_720.png')");

  const search = () => {
    if (query) {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.cod === "404") {
            alert("City not found. Please try again.");
            setQuery(""); // Clear the input box
            return;
          }

          setWeather(result);
          setQuery("");

          axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
              query: result.name,
              client_id: UNSPLASH_ACCESS_KEY,
              per_page: 1,
            },
          }).then((response) => {
            const imageUrl = response.data.results[0]?.urls?.full || "https://cdn.pixabay.com/photo/2024/01/24/10/25/ai-generated-8529315_960_720.png";
            setBackgroundImage(`url(${imageUrl})`);
          }).catch((error) => {
            console.error("Error fetching image from Unsplash:", error);
            setBackgroundImage("url('https://cdn.pixabay.com/photo/2024/01/24/10/25/ai-generated-8529315_960_720.png')");
          });
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          alert("An error occurred. Please try again.");
        });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const navigateHome = () => {
    setWeather({});
    setBackgroundImage("url('https://cdn.pixabay.com/photo/2024/01/24/10/25/ai-generated-8529315_960_720.png')");
    setQuery("");
  };

  const dateBuilder = (d) => {
    let months = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    let days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={(typeof weather.main !== "undefined") ? ((weather.main.temp > 16) ? "app warm" : "app") : "app"}
      style={{ backgroundImage: backgroundImage }}
    >
      <main>
        <SearchBox 
          query={query} 
          setQuery={setQuery} 
          search={search} 
          handleKeyPress={handleKeyPress} 
          navigateHome={navigateHome} 
        />
        {typeof weather.main !== "undefined" ? (
          <LocationInfo weather={weather} dateBuilder={dateBuilder} />
        ) : (
          <div className="welcome-message">
            <h2>Welcome to the Weather App!</h2>
            <p>Please enter a city name to get the current weather.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Weather;
