import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Nav from './Components/Nav';
import Hollywood from "./Components/Hollywood";
import Bollywood from "./Components/Bollywood";
import Food from "./Components/Food";
import SiteName from './Components/toplogo';
import Tourism from "./Components/Tourism";
import Technology from "./Components/Technology";



function App() {
    return (
    <>         
      <SiteName />
        <BrowserRouter>
          <Nav />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Tourism" element={<Tourism />} />
          <Route path="/Technology" element={<Technology />} />
          
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
