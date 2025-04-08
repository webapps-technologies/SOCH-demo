import React from "react";
import "./NewsInsight.css";

const foodData = [
  {
    tag: "Heritage of India",
    title: "How To Feel More Energe Even You’re Stuck with hotel & More",
    image: "/insights.jpg", 
  },
  {
    tag: "Indian Food & Test",
    title: "How To Feel More Energe Even You’re Stuck with hotel & More",
    image: "/insights.jpg", 
  },
  {
    tag: "Palace & Decors",
    title: "How To Feel More Energe Even You’re Stuck with hotel & More",
    image: "/insights.jpg",
  },
];

const FoodForThought = () => {
  return (
    <section className="food-section">
      <div className="food-header">
        <div className="text-blocked">
          <h2>Food For Thought</h2>
          <p><strong>(How You Can Help)</strong> text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's</p>
        </div>
        <button className="know-more-btn">Know More</button>
      </div>

      <div className="food-cards">
        {foodData.map((item, index) => (
          <div key={index} className="food-card">
            <div className="food-image-wrapper">
              <img src={item.image} alt={item.tag} />
            </div>
            <div className="food-tag">{item.tag}</div>
            <h3>{item.title}</h3>
            <p><strong>(How You Can Help)</strong> text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodForThought;
