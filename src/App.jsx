import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductTabs from './components/ProductTabs';
import Home from './pages/Home';
import CCTV from './pages/Cctv';
import Networking from './pages/Networking';
import Security from './pages/Security';
import Hardware from './pages/Hardware';
import Electrical from './pages/Electrical';
import Software from './pages/Software';
import Contact from './pages/Contact';
import About from './pages/About';
// import WhyChooseUs from './components/WhyChooseUs';
// import Testimonials from './components/Testimonials';
// import GoogleReviews from './components/GoogleReviews';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cctv" element={<CCTV />} />
        <Route path="/networking" element={<Networking />} />
        <Route path="/security" element={<Security />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/software" element={<Software />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
