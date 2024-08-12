import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from './Weather';
import About from './About';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
