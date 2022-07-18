import React, { useState, useEffect } from "react";
import "./styles/App.less";
import { Outlet, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Results from "./components/Results.js";
import Schedule from "./components/Schedule.js";
import Protests from "./components/Protests.js";
import axios from "axios";

const initialRaceValues = {
  season: "",
  round: "",
  raceName: "",
  Circuit: {},
  date: "",
  time: "",
  Results: [],
  current_clients: "",

};


function App() {


  const [race, setRace] = useState(initialRaceValues);

  useEffect( () => {
    const getRaceData = async () => {
    await axios
      .get("http://ergast.com/api/f1/2021/1/results.json")
      .then((res) => {
        let data = res.data.MRData.RaceTable.Races[0];
        setRace({ 
          season: data.season,
          round: data.round,
          raceName: data.raceName,
          Circuit: data.Circuit,
          date: data.date,
          time: data.time,
          Results: data.Results,
          })
        })
      .catch((err) => {
        console.log(err);
      });
  }
  getRaceData()
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home race={race} />} />
        <Route path="/protests" element={<Protests />} />
        <Route path="/results" element={<Results />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
