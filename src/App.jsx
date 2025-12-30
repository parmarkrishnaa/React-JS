import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Donation from "./components/Donation.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </div>
  );
};

export default App;