import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/App.css";


function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img
          className="nav-logo"
          src={require("../images/navLogo.png")}
          alt="aafr-logo"
        />
        <div className="nav-items">
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/results">
            Results
          </NavLink>
          <NavLink className="nav-item" to="/schedule">
            Schedule
          </NavLink>
          <NavLink className="nav-item" to="/protests">
            Protests
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
