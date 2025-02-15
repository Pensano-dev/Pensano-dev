import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
// import Luiz from "./components/Luiz/Luiz";
// import Juliana from "./components/Juliana/Juliana";
import OurProjects from './components/OurProjects/OurProjects';
import Home from './components/home/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
// import ReactDOM from 'react-dom';

function App() {


  
return (
<Routes>
  <Route path="/" element={<Home />} />
  {/* <Route path="/luiz" element={<Luiz />} />
  <Route path="/juliana" element={<Juliana />} /> */}
  <Route path="/our-projects" element={<OurProjects />} />
</Routes>

)};

export default App;