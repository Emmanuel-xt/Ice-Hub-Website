import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EssentialClass from "./components/EssentialClass";
import AdvancedClass from "./components/AdvancedClass";
import SkitClass from "./components/Skit";
import ExhibitionClass from "./components/ExhibitionClass";
import React, { useEffect } from 'react';
import WOW from 'wow.js'
import 'animate.css/animate.min.css';

function App() {
  useEffect(() => {
    new WOW().init();
  }, []);


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/essentialclass" element={<EssentialClass/>}/>
        <Route path="/advancedclass" element={<AdvancedClass/>}/>
        <Route path="/skit" element={<SkitClass/>}/>
        <Route path="/exhibition" element={<ExhibitionClass/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
