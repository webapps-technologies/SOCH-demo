import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2 className="footer-logo">SAVE OUR CULTURAL HERITAGE FOUNDATION</h2>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>ABOUT SOCH</h3>
            <a href="#">Footer Link</a>
            <a href="#">Footer Link</a>
            <a href="#">Footer Link</a>
            <a href="#">Footer Link</a>
          </div>
          <div className="footer-column">
            <h3>ABOUT SOCH</h3>
            <a href="#">Footer Link</a>
            <a href="#">Footer Link</a>
            <a href="#">Footer Link</a>
            <a href="#">Footer Link</a>
          </div>
          <div className="footer-column">
            <h3>ABOUT SOCH</h3>
            <a href="#">Footer Link</a>
            <a href="#">Footer Link</a>
            <a href="#">Footer Link</a>
            <a href="#">Footer Link</a>
          </div>
        </div>
        <div className="footer-subscribe">
          <div className="subscribe-box">
            <h3>Lipsum generator<br/>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <input type="email" placeholder="Enter Email Address" />
            <button className="subscribe-btn">Subscribe Now</button>
            <small>Your email is secure and won’t send you any spam.</small>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <p>SAVE OUR CULTURAL HERITAGE FOUNDATION is a COMPANY LIMITED BY SHARES NOT FOR PROFIT UNDER SECTION 8 OF THE COMPANIES ACT, 2013.<br/>
        Regd. No. 366126 | Regd address: 206 Ashoka Apartments, Commercial Complex, Ranjeet Nagar, New Delhi – 110008, INDIA</p>
      </div>
      <div className="footer-policy">
        <a href="#">Policy Link</a>
        <a href="#">Policy Link</a>
        <a href="#">Policy Link</a>
        <a href="#">Policy Link</a>
        <a href="#">Policy Link</a>
        <a href="#">Policy Link</a>
      </div>
      <div className="footer-bottom">
        <div className="footer-social-icons">
          <img src="/fb.svg" alt="Facebook" />
          <img src="/ig.svg" alt="Instagram" />
          <img src="/lk.svg" alt="LinkedIn" />
        </div>
        <p className="copyright">© 2020 SAVE OUR CULTURAL HERITAGE FOUNDATION. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;