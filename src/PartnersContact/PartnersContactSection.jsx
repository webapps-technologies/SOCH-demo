import React from "react";
import "./PartnersContactSection.css";

export default function PartnersContactSection() {
  return (
    <section className="partners-section">
      <div className="partners-intro">
        <div className="intro-text">
          <h2>Our Partners</h2>
          <p>
            We have partnered with some of the most illustrious organisations across India,<br />
            who share our vision of preserving our cultural heritage.
          </p>
        </div>
        <button>Meet Our Partners</button>
      </div>

      <section className="contact-section">
        <div className="contact-text">
          <h3>CONTACT US FOR MORE INFORMATION</h3>
          <p>
            Experience the vibrant tapestry of cultures, traditions, and landscapes that define this incredible India
          </p>
          <p>
            We offer a comprehensive range of consulting and implementation
            services that create opportunities for cultural operators. Through
            regenerative travel, we empower stakeholders to enhance their
            offerings while promoting sustainable practices that benefit both
            communities and the environment.
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="phone number" />

          <div className="input-row">
            <input type="text" placeholder="city" />
            <input type="text" placeholder="country" />
          </div>

          <input type="text" placeholder="How did you find us ?" />
          <input type="text" placeholder="Destination you would like to visit" />

          <div className="checkbox-row">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">Subscribe to newsletters & specials</label>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </section>
  );
}