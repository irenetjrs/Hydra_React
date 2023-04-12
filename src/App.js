import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import './App.scss'

function App() {
  return (
    < >
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
