import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ITServicesNavbar.css';
import logo from '../assets/images/AILYTLOGOPNG.png';

const ITServicesNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (key) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleMouseEnter = (key) => {
    if (window.innerWidth > 768) {
      setOpenDropdown(key);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setOpenDropdown(null);
    }
  };

  return (
    <>
      <nav className="itservices-navbar">
        <div className="itservices-navbar-container">

          <Link
            to="/"
            className="itservices-logo"
            onClick={closeMobileMenu}
          >
            <img
              src={logo}
              alt="AILYT Logo"
              className="itservices-logo-img"
            />
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`itservices-mobile-toggle ${
              mobileMenuOpen ? 'is-open' : ''
            }`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle IT Services navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="itservices-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul
            id="itservices-navigation"
            className={`itservices-nav-menu ${
              mobileMenuOpen ? 'itservices-nav-menu-open' : ''
            }`}
          >
            <li className="itservices-nav-item">
              <Link
                to="/it-services"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li
              className="itservices-nav-item dropdown"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="itservices-link-btn"
                onClick={() => toggleDropdown('services')}
                aria-expanded={openDropdown === 'services'}
              >
                Services ▾
              </button>

              {openDropdown === 'services' && (
                <div className="itservices-dropdown-menu">
                  <Link
                    to="/it-services/web-development"
                    onClick={closeMobileMenu}
                  >
                    Web Development
                  </Link>

                  <Link
                    to="/it-services/mobile-app-development"
                    onClick={closeMobileMenu}
                  >
                    Mobile App Development
                  </Link>

                  <Link
                    to="/it-services/mvp-development"
                    onClick={closeMobileMenu}
                  >
                    MVP Development
                  </Link>

                  <Link
                    to="/it-services/reltio-mdm-services"
                    onClick={closeMobileMenu}
                  >
                    Reltio / MDM PoCs
                  </Link>

                  <Link
                    to="/it-services/data-analytics"
                    onClick={closeMobileMenu}
                  >
                    Data Analytics
                  </Link>

                  <Link
                    to="/it-services/automation-integrations"
                    onClick={closeMobileMenu}
                  >
                    Automation & Integrations
                  </Link>
                </div>
              )}
            </li>

            <li
              className="itservices-nav-item dropdown"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="itservices-link-btn"
                onClick={() => toggleDropdown('industries')}
                aria-expanded={openDropdown === 'industries'}
              >
                Industries ▾
              </button>

              {openDropdown === 'industries' && (
                <div className="itservices-dropdown-menu">
                  <Link
                    to="/it-services/industries"
                    onClick={closeMobileMenu}
                  >
                    All Industries
                  </Link>

                  <Link
                    to="/it-services/industries#insurance"
                    onClick={closeMobileMenu}
                  >
                    Insurance
                  </Link>

                  <Link
                    to="/it-services/industries#education"
                    onClick={closeMobileMenu}
                  >
                    Education
                  </Link>

                  <Link
                    to="/it-services/industries#startups"
                    onClick={closeMobileMenu}
                  >
                    Startups
                  </Link>

                  <Link
                    to="/it-services/industries#smes"
                    onClick={closeMobileMenu}
                  >
                    SMEs
                  </Link>
                </div>
              )}
            </li>

            <li className="itservices-nav-item">
              <Link
                to="/it-services/projects"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li className="itservices-nav-item">
              <Link
                to="/it-services/hire-interns"
                onClick={closeMobileMenu}
              >
                Hire Interns
              </Link>
            </li>

            <li className="itservices-nav-item">
              <Link
                to="/it-services/contact"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <a
        href="https://wa.me/918630611232?text=Hi%20AILYT%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-whatsapp-btn"
        title="Chat with us on WhatsApp"
        aria-label="Chat with AILYT on WhatsApp"
      >
        💬
      </a>
    </>
  );
};

export default ITServicesNavbar;
