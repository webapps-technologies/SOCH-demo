import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './TopBar/TopBar';
import AboutUs from './AboutUs/AboutUs';
import HeroSection from './HeroSection/HeroSection';
import KeyPillars from './KeyPillars/KeyPillars';
import GetInvolved from './GetInvolved/GetInvolved';
import KeyInitiatives from './KeyInitiatives/KeyInitiatives';
import ImpactCarousel from './ImpactCarousal/ImpactCarousel';
import FoodForThought from './FoodForThought/FoodForThought';
import SochWarrior from './SochWarrior/SochWarrior';
import HotelSection from './HotelSection/HotelSection';
import PartnersContactSection from './PartnersContact/PartnersContactSection';
import ImageSlider from './ImageSlider/ImageSlider';
import NewsInsight from './NewsInsight/NewsInsight';
import Footer from './Footer/Footer';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <KeyPillars />
      <GetInvolved />
      <KeyInitiatives />
      <ImpactCarousel />
      <FoodForThought />
      <SochWarrior />
      <HotelSection />
      <PartnersContactSection />
      <ImageSlider />
      <NewsInsight />
    </>
  );
}

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<ScrollToSection />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
