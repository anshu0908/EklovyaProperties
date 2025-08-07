import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopp />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
