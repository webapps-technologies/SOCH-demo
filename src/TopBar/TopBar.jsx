import React, { useState } from 'react';
import "./TopBar.css";

function TopBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    return (
      <div className="topbar">
        <div className="logo">SOCH <span>Save Our Cultural Heritage</span></div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li
              className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a href="#">Our Projects ›</a>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#">Project 1</a></li>
                  <li><a href="#">Project 2</a></li>
                  <li><a href="#">Project 3</a></li>
                  <li><a href="#">Project 4</a></li>
                </ul>
              )}
            </li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <button className="login-btn">Login</button>
        </nav>
      </div>
    );
  }
  
  export default TopBar;
  