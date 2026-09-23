import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LearningNavbar.css';
import logo from '../assets/images/AILYTLOGOPNG.png';

const LearningNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (key) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const closeDesktopDropdown = () => {
    if (window.innerWidth > 768) {
      setOpenDropdown(null);
    }
  };

  return (
    <>
      <nav className="learning-navbar">
        <div className="learning-navbar-container">

          {/* LOGO */}
          <Link
            to="/"
            className="learning-logo"
            onClick={closeMobileMenu}
          >
            <img
              src={logo}
              alt="AILYT Logo"
              className="learning-logo-img"
            />
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            className={`learning-mobile-toggle ${
              mobileMenuOpen ? 'is-open' : ''
            }`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="learning-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul
            id="learning-navigation"
            className={`learning-nav-menu ${
              mobileMenuOpen ? 'learning-nav-menu-open' : ''
            }`}
          >

            {/* HOME */}
            <li className="learning-nav-item">
              <Link
                to="/learning"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            {/* =========================
                COURSES
            ========================== */}
            <li
              className="learning-nav-item dropdown"
              onMouseEnter={() => setOpenDropdown('courses')}
              onMouseLeave={closeDesktopDropdown}
            >
              <button
                type="button"
                className="learning-link-btn"
                onClick={() => toggleDropdown('courses')}
                aria-expanded={openDropdown === 'courses'}
              >
                Courses ▾
              </button>

              {openDropdown === 'courses' && (
                <div className="learning-dropdown-menu">

                  <Link
                    to="/learning/courses/ignou-bca-mca"
                    onClick={closeMobileMenu}
                  >
                    IGNOU BCA/MCA Program
                  </Link>

                  <Link
                    to="/data-analyst-course-dehradun"
                    onClick={closeMobileMenu}
                  >
                    Data Analyst Program
                  </Link>

                  <Link
                    to="/learning/courses#excel"
                    onClick={closeMobileMenu}
                  >
                    Advanced Excel
                  </Link>

                  <Link
                    to="/learning/courses#python"
                    onClick={closeMobileMenu}
                  >
                    Python
                  </Link>

                  <Link
                    to="/learning/courses#tableau"
                    onClick={closeMobileMenu}
                  >
                    Tableau
                  </Link>

                  <Link
                    to="/learning/courses#power-bi"
                    onClick={closeMobileMenu}
                  >
                    Power BI
                  </Link>

                </div>
              )}
            </li>

            {/* =========================
                INTERNSHIP
            ========================== */}
            <li
              className="learning-nav-item dropdown"
              onMouseEnter={() => setOpenDropdown('internship')}
              onMouseLeave={closeDesktopDropdown}
            >
              <button
                type="button"
                className="learning-link-btn"
                onClick={() => toggleDropdown('internship')}
                aria-expanded={openDropdown === 'internship'}
              >
                Internship ▾
              </button>

              {openDropdown === 'internship' && (
                <div className="learning-dropdown-menu">

                  <Link
                    to="/learning/internship-programs"
                    onClick={closeMobileMenu}
                  >
                    Internship Program
                  </Link>

                  <Link
                    to="/learning/interns"
                    onClick={closeMobileMenu}
                  >
                    Our Interns
                  </Link>

                </div>
              )}
            </li>

            {/* =========================
                ABOUT US
            ========================== */}
            <li
              className="learning-nav-item dropdown"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={closeDesktopDropdown}
            >
              <button
                type="button"
                className="learning-link-btn"
                onClick={() => toggleDropdown('about')}
                aria-expanded={openDropdown === 'about'}
              >
                About Us ▾
              </button>

              {openDropdown === 'about' && (
                <div className="learning-dropdown-menu">

                  <Link
                    to="/learning/about"
                    onClick={closeMobileMenu}
                  >
                    About AILYT
                  </Link>

                  <Link
                    to="/learning/trainers"
                    onClick={closeMobileMenu}
                  >
                    Trainer Profiles
                  </Link>

                  <Link
                    to="/learning/testimonials"
                    onClick={closeMobileMenu}
                  >
                    Testimonials
                  </Link>

                </div>
              )}
            </li>

            {/* CONTACT */}
            <li className="learning-nav-item">
              <Link
                to="/learning/contact"
                onClick={closeMobileMenu}
              >
                Contact / Enquiry
              </Link>
            </li>

            {/* COMPANY ENQUIRIES */}
            <li className="learning-nav-item">
              <Link
                to="/learning/enquiries"
                onClick={closeMobileMenu}
              >
                Company Enquiries
              </Link>
            </li>

          </ul>
        </div>
      </nav>

      {/* WHATSAPP */}
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

export default LearningNavbar;