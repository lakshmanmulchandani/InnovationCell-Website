import { useRef } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import PastEvents from "./Components/Events/PastEvents";
import UpcomingEvents from "./Components/Events/UpcomingEvents";
import Navbar from "./Components/Navbar/Navbar";

import Sponsors from "./Components/Sponsors/Sponsors";
import MakerSpace from "./Components/MakerSpace/MakerSpace";
import Team from "./Components/Team/Team";
import SnowfallComponent from "./Components/Snowfall/SnowfallComponent";
import NameCard from "./Components/Team/NameCard";
import Executives from "./Components/Team/Executives";
import Contact from "./Components/ContactUs/Contact";
import Moon from "./Assets/Moon";

import AboutUs from "./Components/AboutUs/AboutUs";
import Timeline from "./Components/Timeline/Timeline";

import Accordian from "./Components/Faq/Accordian"


function App() {
  const contactUsRef = useRef(null); // Create a ref for the ContactUs component

  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <SnowfallComponent />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      <div className="App ">
        <LandingPage />
        <div className="scroll-down" onClick={scrollToContactUs}>
          <div className="mouse">
            <span></span>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </div>
        <div ref={contactUsRef} id="aboutusnav">
          <AboutUs />
        </div>
        <div id="makerspacenav">
          <MakerSpace />
        </div>
        <div id="eventsnav">
          <Timeline />
        </div>
        <div id="teamnav">
          <Team />
        </div>
        <div id="contactusnav">
          <Contact />
        </div>
        </div> */}
        {/* <div ref={contactUsRef}>
         
        </div> */}
        {/* <MakerSpace /> */}
        <Contact />
        <Team />
        <Accordian/>
    </>
  );
}

export default App;
