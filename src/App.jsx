import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductTabs from './components/ProductTabs';
import Home from './pages/Home';
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
      </Routes>
    </Router>
  );
}
