import React, { useState } from "react";
import "./ImageSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    title: "Daily Quotes",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev.",
    image: "/carousel.jpg",
  },
  {
    title: "Temple Stories",
    text: "Ancient architecture holds timeless wisdom.",
    image: "/insights.jpg",
  },
  {
    title: "Spiritual Vibes",
    text: "Every stone has a story to tell.",
    image: "/carousel.jpg",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === current ? "active" : ""}`}
            key={index}
          >
            <img src={slide.image} alt={slide.title} className="slide-img" />
            <div className="slide-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}

        <button className="nav-button left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button className="nav-button right" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
