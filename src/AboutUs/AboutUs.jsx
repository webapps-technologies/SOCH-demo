import React from "react";
import "./AboutUs.css";
import temple from "/temple.jpg"; 
import cofounderImage from "/nakul.jpg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/", { state: { scrollTo: "contact-us" } });
  };

  return (
    <div className="about-us-container">
      <div className="hero-banner" style={{ backgroundImage: `url(${temple})` }}>
        <div className="overlay">
          <h1 className="about-heading">About Us</h1>
        </div>
      </div>

      <div className="about-content">
        <div className="about-column about-text">
          <h2>From SOCH Warrior™, Co-Founder</h2>
          <p>
            <strong>Nakul Anand</strong> is the SOCH WARRIOR™ and Co-Founder of the Save Our Cultural Heritage Foundation (SOCH™), as well as a distinguished tourism entrepreneur leading award-winning experiential travel brands. Driven by a profound passion for India and its rich cultural tapestry, Sachin’s vision seamlessly connects residents and travelers to their cultural roots, encouraging a deep appreciation for local communities and their heritage. He firmly believes that individuals from diverse regions of India can directly benefit from tourism when engaged in meaningful projects that resonate with their identity. By integrating regenerative travel principles into his initiatives, Sachin emphasizes the importance of sustainable practices that not only enrich visitor experiences but also empower local communities through targeted skilling and incubation programs.
          </p>
        </div>

        <div className="about-column about-callout">
          <p>
          Under his leadership, SOCH™ has championed the promotion of cultural heritage as a vital tool for fostering coexistence and dialogue among communities. Sachin is dedicated to raising awareness among citizens and decision-makers about the significance of heritage and culture, while also highlighting the potential of regenerative travel to create lasting economic benefits. He focuses on equipping local populations with the skills necessary to thrive in the tourism sector, thus nurturing a sense of pride and ownership within these communities.
          For more details contact us and know diversity led distinctiveness of India.
          </p>
          <button className="about-contact-btn" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>

        <div className="about-column about-image">
          <img src={cofounderImage} alt="SOCH Co-Founder" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
