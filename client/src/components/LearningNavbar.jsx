import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LearningNavbar.css';
import logo from '../assets/images/AILYTLOGOPNG.png';

const LearningNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  return (
    <>
      <nav className="learning-navbar">
        <div className="learning-navbar-container">
          <Link to="/" className="learning-logo">
            <img src={logo} alt="AILYT Logo" className="learning-logo-img" />
          </Link>

          <ul className="learning-nav-menu">
            <li className="learning-nav-item">
              <Link to="/learning">Home</Link>
            </li>

            <li
              className="learning-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('courses')}
              onMouseLeave={() => { toggleDropdown('courses'); setOpenSubmenu(null); }}
            >
              <button className="learning-link-btn">Courses ▾</button>
              {openDropdown === 'courses' && (
                <div className="learning-dropdown-menu">
                  <div className="learning-submenu-group">
                    <button 
                      className="learning-submenu-btn"
                      onMouseEnter={() => setOpenSubmenu('english')}
                    >
                      English Speaking ▸
                    </button>
                    {openSubmenu === 'english' && (
                      <div className="learning-submenu">
                        <Link to="/learning#learning-courses">Spoken English</Link>
                        <Link to="/learning#learning-courses">Confidence Building</Link>
                        <Link to="/learning#learning-courses">Interview Skills</Link>
                      </div>
                    )}
                  </div>

                  <div className="learning-submenu-group">
                    <button 
                      className="learning-submenu-btn"
                      onMouseEnter={() => setOpenSubmenu('computer')}
                    >
                      Computer Courses ▸
                    </button>
                    {openSubmenu === 'computer' && (
                      <div className="learning-submenu">
                        <Link to="/learning#learning-courses">CCC</Link>
                        <Link to="/learning#learning-courses">O-Level</Link>
                        <Link to="/learning#learning-courses">Basic Computers</Link>
                      </div>
                    )}
                  </div>

                  <div className="learning-submenu-group">
                    <button 
                      className="learning-submenu-btn"
                      onMouseEnter={() => setOpenSubmenu('data')}
                    >
                      Data & Tech ▸
                    </button>
                    {openSubmenu === 'data' && (
                      <div className="learning-submenu">
                        <Link to="/learning#learning-courses">Excel</Link>
                        <Link to="/learning#learning-courses">Python</Link>
                        <Link to="/learning#learning-courses">Data Analytics</Link>
                        <Link to="/learning#learning-courses">Tableau</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>

            <li
              className="learning-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('internships')}
              onMouseLeave={() => toggleDropdown('internships')}
            >
              <button className="learning-link-btn">Internship Programs ▾</button>
              {openDropdown === 'internships' && (
                <div className="learning-dropdown-menu">
                  <Link to="/learning#learning-internships">6-Month Internship Model</Link>
                  <Link to="/learning#learning-internships">Tech Tracks</Link>
                  <Link to="/learning#learning-internships">Tools & Workflow</Link>
                </div>
              )}
            </li>

            <li
              className="learning-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('about')}
              onMouseLeave={() => toggleDropdown('about')}
            >
              <button className="learning-link-btn">About Learning Centre ▾</button>
              {openDropdown === 'about' && (
                <div className="learning-dropdown-menu">
                  <Link to="/learning#learning-about">Teaching Methodology</Link>
                  <Link to="/learning#learning-about">Infrastructure (Smart Board, Hybrid)</Link>
                </div>
              )}
            </li>

            <li className="learning-nav-item">
              <Link to="/contact">Contact / Enquiry</Link>
            </li>

            <li className="learning-nav-item">
              <Link to="/contact">Company Enquiries</Link>
            </li>
          </ul>
        </div>
      </nav>

      <a
        href="https://wa.me/8630611232?text=Hi%20AILYT%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
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

export default LearningNavbar;

