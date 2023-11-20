import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Team from "./Components/Team/Team";
import MakerSpace from "./Components/MakerSpace/MakerSpace";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<HomePage />} />
          <Route exact="true" path="/teams" element={<Team />} />
          <Route exact="true" path="/makerspace" element={<MakerSpace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
