import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommunityNavbar.css';
import logo from '../assets/images/AILYTLOGOPNG.png';

const CommunityNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <>
      <nav className="community-navbar">
        <div className="community-navbar-container">
          <Link to="/" className="community-logo">
            <img src={logo} alt="AILYT Logo" className="community-logo-img" />
          </Link>

          <ul className="community-nav-menu">
            <li className="community-nav-item">
              <Link to="/community">Home</Link>
            </li>

            <li
              className="community-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('overview')}
              onMouseLeave={() => toggleDropdown('overview')}
            >
              <button className="community-link-btn">Community Overview ▾</button>
              {openDropdown === 'overview' && (
                <div className="community-dropdown-menu">
                  <Link to="/community#community-overview">About Community</Link>
                  <Link to="/community#community-values">Community Values</Link>
                  <Link to="/community#community-impact">Community Impact</Link>
                </div>
              )}
            </li>

            <li
              className="community-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('initiatives')}
              onMouseLeave={() => toggleDropdown('initiatives')}
            >
              <button className="community-link-btn">Initiatives ▾</button>
              {openDropdown === 'initiatives' && (
                <div className="community-dropdown-menu">
                  <Link to="/community#community-initiatives">Mentorship Program</Link>
                  <Link to="/community#community-initiatives">Community Events</Link>
                  <Link to="/community#community-initiatives">Collaborative Projects</Link>
                </div>
              )}
            </li>

            <li
              className="community-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('members')}
              onMouseLeave={() => toggleDropdown('members')}
            >
              <button className="community-link-btn">Members ▾</button>
              {openDropdown === 'members' && (
                <div className="community-dropdown-menu">
                  <Link to="/community#community-members">Member Directory</Link>
                  <Link to="/community#community-members">Success Stories</Link>
                  <Link to="/community#community-members">Community Ambassadors</Link>
                </div>
              )}
            </li>

            <li className="community-nav-item">
              <Link to="/contact">Contact / Join Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <a
        href="https://wa.me/8630611232?text=Hi%20AILYT%2C%20I%20would%20like%20to%20know%20more%20about%20the%20community."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-whatsapp-btn"
        title="Chat with us on WhatsApp"
      >
        💬
      </a>
    </>
  );
};

export default CommunityNavbar;


