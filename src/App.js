import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import OurProjects from "./components/OurProjects/OurProjects";
import Home from "./components/home/Home";

import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-projects" element={<OurProjects />} />
    </Routes>
  );
}

export default App;
