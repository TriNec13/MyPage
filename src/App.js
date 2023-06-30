import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./view/Landing";
import Prospecto from "./view/Prospecto";
import Nav from "./component/Nav";
import About from './view/About';
import Proyectos from './view/Proyectos.jsx'
//import Modo from "./component/Modo";
import "./App.css";

function App() {
  return (
    <div className={App}>
      <div>
        {/* <Modo /> */}
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/prospecto" element={<Prospecto />} />
        <Route path="/about" element={<About />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </div>
  );
}

export default App;
