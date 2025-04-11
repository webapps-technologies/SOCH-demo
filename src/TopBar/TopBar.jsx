import React, { useState } from 'react';
import './TopBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function TopBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleScrollTo = (section) => {
    if (isHome) return; 
    navigate('/', { state: { scrollTo: section } });
  };

  return (
    <header className="topbar">
      <div className="logo">
        SOCH <span>Save Our Cultural Heritage</span>
      </div>

      <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="#">Our Mission</Link></li>

          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)}
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

          <li>
            {isHome ? (
              <ScrollLink to="get-involved" smooth={true} duration={600} offset={-80} className="nav-link">
                Get Involved
              </ScrollLink>
            ) : (
              <span onClick={() => handleScrollTo('get-involved')} className="nav-link" style={{ cursor: 'pointer' }}>
                Get Involved
              </span>
            )}
          </li>

          <li>
            {isHome ? (
              <ScrollLink to="contact-us" smooth={true} duration={600} offset={-80} className="nav-link">
                Contact Us
              </ScrollLink>
            ) : (
              <span onClick={() => handleScrollTo('contact-us')} className="nav-link" style={{ cursor: 'pointer' }}>
                Contact Us
              </span>
            )}
          </li>

          <li><Link to="/donate">Donate</Link></li>
        </ul>

        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}

export default TopBar;
