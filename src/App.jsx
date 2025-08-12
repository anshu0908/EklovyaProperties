import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ScrollToTop from "./Components/ScrollToTop";
import ContactUsPage from "./Pages/ContactUsPage";
import ListingPage from "./Pages/ListingPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/properties" element={<ListingPage />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
