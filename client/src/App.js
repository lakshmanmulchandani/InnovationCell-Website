import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
