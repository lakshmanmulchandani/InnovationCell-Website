import { useState, useEffect } from "react";
import "./HomePage.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Sponsor from "./Components/Sponsors/Sponsors";
import SnowfallComponent from "./Components/Snowfall/SnowfallComponent";
import Contact from "./Components/ContactUs/Contact";
import Accordian from "./Components/Faq/Accordian";
import Timeline from "./Components/Timeline/Timeline";
import Footer from "./Components/Footer/Footer";
import Snitch from "./Components/snitch/Snitch";
import Sponsors from "./Components/Sponsors/Sponsors";
import Story from "./Components/story/Story";
import Storyimg from "./Components/story/Storyimg";
import StoryFinal from "./Components/story/StoryFinal";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <>
      <>
        <SnowfallComponent />
        <Snitch />
        <div className="App">
          <div className={scrolled ? "dark-overlay" : ""}></div>
          <LandingPage />
          <a id="" className="scroll-down" href="#aboutusnav">
            <div className="mouse">
              <span></span>
            </div>
            <div className="arrow">
              <span></span>
              <span></span>
            </div>
          </a>
          <StoryFinal />
          <div id="aboutusnav"></div>
          <AboutUs />
          <div id="eventsnav"></div>
          <Timeline />
          <div id="spons"></div>
          <Sponsor />
          <div id="faqnav"></div>
          <Accordian />
          <div id="contactusnav"></div>
          <Contact />
          <Footer />
        </div>
      </>
    </>
  );
}

export default App;
