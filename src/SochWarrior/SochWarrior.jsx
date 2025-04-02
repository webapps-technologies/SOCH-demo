import React from "react";
import "./SochWarrior.css";

const SochWarrior = () => {
  return (
    <section className="soch-warrior">
      <div className="warrior-content">
        <h2>Become a SOCH Warrior</h2>
        <p>
          Contribution options for individuals and co-orporations. Contribution
          options for individuals and corporations.
        </p>
        <button className="register-btn">REGISTER NOW</button>
      </div>
      <div className="warrior-image">
        <img src="/warrior.png" alt="SOCH Warrior" />
      </div>
    </section>
  );
};

export default SochWarrior;
