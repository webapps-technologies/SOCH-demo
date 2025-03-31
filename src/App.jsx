import React from 'react';
import './App.css';
import TopBar from './TopBar/TopBar';
import HeroSection from './HeroSection/HeroSection';
import KeyPillars from './KeyPillars/KeyPillars';
// import Footer from './Footer/Footer';

function App() {
    return (
        <div>
        <TopBar />
        <HeroSection />
        <KeyPillars />
        {/* <Footer /> */}
        </div>
    );
}

export default App;