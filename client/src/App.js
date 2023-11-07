import { useRef } from "react";
import "./App.css";
// import LandingPage from "./Components/LandingPage/LandingPage";
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

function App() {
  const contactUsRef = useRef(null); // Create a ref for the ContactUs component

  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <SnowfallComponent />
      <div className="App ">
        {/* <LandingPage /> */}
        {/* <div className="scroll-down" onClick={scrollToContactUs}>
          <div className="mouse">
            <span></span>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </div> */}
        {/* <div ref={contactUsRef}>
         
        </div> */}
        {/* <MakerSpace /> */}
        <Contact />
        <Team />
      </div>
    </>
  );
}

export default App;
