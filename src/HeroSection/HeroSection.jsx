import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="logo-h">SOCH</h1>
        <p className="tagline">SAVE OUR CULTURAL HERITAGE</p>
        <h2 className="headline">SAVE OUR CULTURAL HERITAGE FOUNDATION</h2>
        <p className="description">
          Promote India’s Diverse Cultural Heritage And Regenerative Travel
        </p>
        <button className="explorenow-btn">Explore Now</button>
      </div>
    </div>
  );
}

export default HeroSection;