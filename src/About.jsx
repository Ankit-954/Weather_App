import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-page">
      <h1>About This Weather App</h1>
      <p>This application is designed to provide you with up-to-date weather information for any city around the world. With an intuitive and user-friendly interface, you can quickly check the current temperature, weather conditions, and a brief forecast for your chosen location.</p>
      <h2>Key Features:</h2>
      <p>Real-Time Weather Data: The app fetches real-time weather data from the OpenWeatherMap API, giving you accurate and current weather conditions.</p>
      <p>Dynamic Backgrounds: The app changes its background image based on the weather conditions or the city you search for, creating a visually engaging experience.</p>
      <p>City Search: Easily search for any city around the world using the search box. As you type, the app will suggest cities to help you quickly find your desired location.</p>
      <p></p>
      <p>
        Creator: Ankit
      </p>
    </div>
  );
};

export default About;
