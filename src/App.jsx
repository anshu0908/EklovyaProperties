import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import PrivacyPolicy from './Components/PrivacyPolicy';
  
import AboutPage from './Components/AboutPage';
import ServicePage from './Components/ServicePage';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
