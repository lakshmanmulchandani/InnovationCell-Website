import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Team from "./Components/Team/Team";
import MakerSpace from "./Components/MakerSpace/MakerSpace";

const App = () => {
  return (
<<<<<<< HEAD
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
        </div> 
        {/* <div ref={contactUsRef}>
         
        </div> */}
        {/* <MakerSpace /> */}
        <Contact />
        <Team />
      <Accordian />
        
    </>
=======
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<HomePage />} />
          <Route exact="true" path="/teams" element={<Team />} />
          <Route exact="true" path="/makerspace" element={<MakerSpace />} />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> c569fa5da955a7a909a61284c133c60a5180496c
  );
};

export default App;
