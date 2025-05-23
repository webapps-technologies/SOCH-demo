import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { useLocation } from "react-router-dom";
import "./PartnersContactSection.css";

function ContactUs() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contact-us") {
      const section = document.getElementById("contact-us-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Element name="contact-us">
      <section id="contact-us-section" className="partners-section">
        <div className="partners-intro">
          <div className="intro-text">
            <h2>Our Partners</h2>
            <p>
              We have partnered with some of the most illustrious organisations
              across India,<br />
              who share our vision of preserving our cultural heritage.
            </p>
          </div>
          <button>Meet Our Partners</button>
        </div>

        <section className="contact-section">
          <div className="contact-text">
            <h3>CONTACT US FOR MORE INFORMATION</h3>
            <p>
              Experience the vibrant tapestry of cultures, traditions, and
              landscapes that define this incredible India
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
            <input type="text" placeholder="Phone Number" />

            <div className="input-row">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Country" />
            </div>

            <input type="text" placeholder="How did you find us ?" />
            <input
              type="text"
              placeholder="Destination you would like to visit"
            />

            <div className="checkbox-row">
              <input type="checkbox" id="subscribe" />
              <label htmlFor="subscribe">
                Subscribe to newsletters & specials
              </label>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </section>
    </Element>
  );
}

export default ContactUs;