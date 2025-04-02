import React from 'react';
import './App.css';
import TopBar from './TopBar/TopBar';
import HeroSection from './HeroSection/HeroSection';
import KeyPillars from './KeyPillars/KeyPillars';
// import GetInvolved from './GetInvolved/GetInvolved';
import KeyInitiatives from './KeyInitiatives/KeyInitiatives';
import SochWarrior from './SochWarrior/SochWarrior';
// import Footer from './Footer/Footer';

function App() {
    return (
        <div>
        <TopBar />
        <HeroSection />
        <KeyPillars />
        {/* <GetInvolved /> */}
        <KeyInitiatives />
        <SochWarrior />
        {/* <Footer /> */}
        </div>
    );
}

export default App;