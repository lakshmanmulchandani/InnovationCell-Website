import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Team from "./Components/Team/Team";
import MakerSpace from "./Components/MakerSpace/MakerSpace";
import Recruitment from "./Components/recruitmentform/Recruitment.jsx";

import curGif from "./Components/cursor/onclick_animation.gif";
import curGif2 from "./Components/cursor/another_onclick_animation.gif";
import AudioPlayer from "./Components/cursor/AudioPlayer.jsx";
import Intro from "./Components/Intro/Intro.jsx";

const App = () => {
  const [gifPosition, setGifPosition] = useState({ x: 0, y: 0 });
  const [showGif, setShowGif] = useState(false);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setGifPosition({ x: clientX, y: clientY });
    setShowGif(true);

    // Reset the state after 1 second (1000 milliseconds)
    setTimeout(() => {
      setShowGif(false);
    }, 1000);
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      onClick={handleClick}
      style={{ height: "100vh", position: "relative" }}
    >
      {showGif && (
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            left: `${position.x + 25}px`,
            top: `${position.y}px`,
            transform: `translate(-50%, -50%) scale(${
              isHovered || isClicked ? 2 : 1
            })`,
          }}
        >
          <img
            src={curGif}
            alt="GIF"
            style={{
              width: "100px", // Set the width of your GIF
              height: "100px", // Set the height of your GIF
              zIndex: 9999,
            }}
          />
        </div>
      )}
      <AudioPlayer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/teams" element={<Team />} />
          <Route exact path="/makerspace" element={<MakerSpace />} />
          <Route exact path="/form" element={<Recruitment />} />
          <Route exact path="/intro" element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
