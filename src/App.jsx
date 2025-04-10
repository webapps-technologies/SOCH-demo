import React from 'react';
import './App.css';
import TopBar from './TopBar/TopBar';
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

function App() {
    return (
        <div>
        <TopBar />
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
        <Footer />
        </div>
    );
}

export default App;