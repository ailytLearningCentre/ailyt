import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ITServicesNavbar.css';
import logo from '../assets/images/AILYTLOGOPNG.png';

const ITServicesNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <>
      <nav className="itservices-navbar">
        <div className="itservices-navbar-container">
          <Link to="/" className="itservices-logo">
            <img src={logo} alt="AILYT Logo" className="itservices-logo-img" />
          </Link>

          <ul className="itservices-nav-menu">
            <li className="itservices-nav-item">
              <Link to="/it-services">Home</Link>
            </li>

            <li
              className="itservices-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('services')}
              onMouseLeave={() => toggleDropdown('services')}
            >
              <button className="itservices-link-btn">Services ▾</button>
              {openDropdown === 'services' && (
                <div className="itservices-dropdown-menu">
                  <Link to="/it-services/services">All Services</Link>
                  <Link to="/it-services/services#web">Web Development</Link>
                  <Link to="/it-services/services#mobile">Mobile App Development</Link>
                  <Link to="/it-services/services#mvp">MVP Development</Link>
                  <Link to="/it-services/services#reltio">Reltio / MDM PoCs</Link>
                  <Link to="/it-services/services#data">Data Analytics</Link>
                  <Link to="/it-services/services#automation">Automation & Integrations</Link>
                </div>
              )}
            </li>

            <li
              className="itservices-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('industries')}
              onMouseLeave={() => toggleDropdown('industries')}
            >
              <button className="itservices-link-btn">Industries ▾</button>
              {openDropdown === 'industries' && (
                <div className="itservices-dropdown-menu">
                  <Link to="/it-services/industries">All Industries</Link>
                  <Link to="/it-services/industries#insurance">Insurance</Link>
                  <Link to="/it-services/industries#education">Education</Link>
                  <Link to="/it-services/industries#startups">Startups</Link>
                  <Link to="/it-services/industries#smes">SMEs</Link>
                </div>
              )}
            </li>

            <li className="itservices-nav-item">
             <Link to="/it-services/projects">Projects</Link>
            </li>

             <li className="itservices-nav-item">
                <Link to="/it-services/interns">Interns</Link>
             </li>

             <li className="itservices-nav-item">
               <Link to="/it-services/hire-interns">Hire Interns</Link>
            </li>

            <li className="itservices-nav-item">
              <Link to="/it-services/contact">Contact</Link>
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

export default ITServicesNavbar;

