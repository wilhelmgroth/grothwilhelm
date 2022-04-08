import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./components/portfolio/portfolio";
import Home from "./components/home/home.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Skills from "./components/skills/skills.jsx";
import Education from "./components/education/education.jsx";
import Employment from "./components/employment/employment.jsx";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <React.Fragment>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/employment" element={<Employment />} />
          </Routes>
    
        <Footer />
    </React.Fragment>
  );
};

export default App;
