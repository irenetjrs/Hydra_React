import React from "react";
import './App.scss'
import {Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from "./routes/About/About";
import Services from "./routes/Services/Services";
import Tech from "./routes/Tech/Tech";
import HowTo from "./routes/HowTo/HowTo";
import Join from "./routes/Join/Join";
// import Navbar from "./components/Navbar/Navbar";


const App  = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Services' element={<Services />} />
        <Route path='Tech' element={<Tech />} />
        <Route path='HowTo' element={<HowTo />} />
        <Route path='Join' element={<Join />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
