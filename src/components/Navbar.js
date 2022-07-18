import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.less";


function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-header">
          <img
            src={require("../images/navLogo.png")}
            alt="aafr-logo"
          />
          <h1 className="league-name">
            America's Alliance Formula Racing
          </h1>
        </div>

        <div className="nav-items">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/results">
            Results
          </Link>
          <Link className="nav-item" to="/schedule">
            Schedule
          </Link>
          <Link className="nav-item" to="/protests">
            Protests
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
