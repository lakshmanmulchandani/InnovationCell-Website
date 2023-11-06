import React from "react";
import "./navbar.css";
import logo from "../../Assets/images/i_cell_logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="I-Cell Logo" />
        </a>
      </div>
      <div className="nav-opt">
        <div className="nav-btn">
          <a href="#">
            <div>Home</div>
          </a>
        </div>
        <div className="nav-btn">
          <a href="#">
            <div>Events</div>
          </a>
        </div>
        <div className="nav-btn">
          <a href="#">
            <div>Team</div>
          </a>
        </div>
        <div className="nav-btn">
          <a href="#">
            <div>Sponsors</div>
          </a>
        </div>
        <div className="nav-btn">
          <a href="#">
            <div>AboutUs</div>
          </a>
        </div>
        <div className="nav-btn">
          <a href="#">
            <div>ContactUs</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
