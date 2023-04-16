import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Josh from "./components/Josh/Josh";
import Luiz from "./components/Luiz/Luiz";
import Juliana from "./components/Juliana/Juliana";
import Rachel from "./components/Rachel/Rachel";
import OurProjects from './components/OurProjects/OurProjects';
import Home from './components/home/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {


  
return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/luiz" element={<Luiz />} />
  <Route path="/josh" element={<Josh />} />
  <Route path="/juliana" element={<Juliana />} />
  <Route path="/rachel" element={<Rachel />} />
  <Route path="/our-projects" element={<OurProjects />} />
</Routes>

)};

export default App;