import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import './App.scss'
import About from "./routes/About/About";

function App() {
  return (
    < >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
