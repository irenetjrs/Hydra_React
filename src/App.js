import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import './App.scss'
import About from "./routes/About/About";
import Services from "./routes/Services/Services";
import Tech from "./routes/Tech/Tech";

function App() {
  return (
    < >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Services' element={<Services />} />
        <Route path='Tech' element={<Tech />} />
      </Routes>
    </>
  );
}

export default App;
