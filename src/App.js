import React from 'react';
import "./styles/App.css";
import {Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.js'
import Home from "./components/Home.js";
import Results from "./components/Results.js";
import Schedule from "./components/Schedule.js";
import Protests from "./components/Protests.js";


function App() {

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/protests" element={<Protests />} />
          <Route path="/results" element={<Results />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>

    </div>
  );
}

export default App;
