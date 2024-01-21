import React, { useState } from "react";
import "./navbar.css";
import logo from "../../Assets/images/i_cell_logo.png";

const Navbar = () => {
  const [phone, setPhone] = useState(false);

  const toggle = () => {
    setPhone(!phone);
  };

  const handleNavLinkClick = (event) => {
    // Prevent the default behavior of anchor tags
    event.preventDefault();
    // Your logic for handling the click goes here, e.g., scrolling to the section
    // You can use libraries like react-scroll or window.scrollTo() for smooth scrolling
  };

  return (
    <div className={`nav ${phone ? "nav-phone" : ""}`}>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="I-Cell Logo" />
        </a>
      </div>
      <div className={` nav-opt ${phone ? "show" : ""}`}>
        <div className="nav-btn" onClick={toggle}>
          <a href="#" onClick={handleNavLinkClick}>
            <div className="home">Home</div>
          </a>
        </div>
        <div className="nav-btn" onClick={toggle}>
          <a href="#aboutusnav">
            <div>AboutUs</div>
          </a>
        </div>
        <div className="nav-btn" onClick={toggle}>
          <a href="#eventsnav">
            <div>Events</div>
          </a>
        </div>
        {/* <div className="nav-btn" onClick={toggle}>
          <a href="#sponsnav">
            <div>Sponsors</div>
          </a>
        </div> */}
        <div className="nav-btn" onClick={toggle}>
          <a href="#faqnav">
            <div>FAQ</div>
          </a>
        </div>
        <div className="nav-btn" onClick={toggle}>
          <a href="/teams">
            <div>Team</div>
          </a>
        </div>
        <div className="nav-btn" onClick={toggle}>
          <a href="/makerspace">
            <div>Makerspace</div>
          </a>
        </div>
        <div className="nav-btn" onClick={toggle}>
          <a href="#contactusnav">
            <div>ContactUs</div>
          </a>
        </div>
      </div>
      <div className="menu-icon" onClick={toggle}>
        <div className={`bar ${phone ? "rotate-left" : ""}`}></div>
        <div className={`bar ${phone ? "fade-out" : ""}`}></div>
        <div className={`bar ${phone ? "rotate-right" : ""}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
