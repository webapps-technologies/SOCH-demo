import React, { useState } from "react";
import "./ImpactCarousel.css";

const images = [
  "/insights.jpg",
  "/image2.png",
  "/carousel.jpg",
  "/image4.png",
  "/herosec.png",
];

const ImpactCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <section
      className="impact-carousel"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="carousel-overlay">
        <div className="carousel-content">
          <h1 className="carousel-title">Impact Projects</h1>
          <p className="carousel-subtext">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="carousel-subtext">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer...
          </p>
          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCarousel;
