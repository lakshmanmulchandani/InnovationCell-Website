import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Team from "./Components/Team/Team";
import MakerSpace from "./Components/MakerSpace/MakerSpace";
import Recruitment from "./Components/recruitmentform/Recruitment.jsx";
import Cursor from "./Components/cursor/Cursor.jsx";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<HomePage />} />
          <Route exact="true" path="/teams" element={<Team />} />
          <Route exact="true" path="/makerspace" element={<MakerSpace />} />
          <Route exact="true" path="/form" element={<Recruitment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
