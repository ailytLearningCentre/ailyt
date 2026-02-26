import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learning.css';

const Learning = () => {
  const courses = [
    {
      category: 'English Speaking',
      items: [
        'Spoken English',
        'Confidence Building',
        'Interview Skills'
      ]
    },
    {
      category: 'Computer Courses',
      items: [
        'CCC (Course on Computer Concepts)',
        'O-Level',
        'Basic Computers'
      ]
    },
    {
      category: 'Data & Tech',
      items: [
        'Excel',
        'Python',
        'Data Analytics',
        'Tableau'
      ]
    }
  ];

  const whyChoose = [
    {
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      title: 'Hands-on Projects',
      description: 'Work on real-world projects to build practical skills'
    },
    {
      title: 'Flexible Learning',
      description: 'Hybrid classes with both online and in-person options'
    },
    {
      title: 'Career Support',
      description: 'Get guidance and support for your career advancement'
    },
    {
      title: 'Internship Opportunities',
      description: 'Gain valuable experience with our 6-month internship model'
    },
    {
      title: 'Modern Infrastructure',
      description: 'Learn in well-equipped facilities with smart boards'
    }
  ];

  const internshipPrograms = [
    {
      title: '6-Month Internship Model',
      description: 'Comprehensive internship program with real-world experience'
    },
    {
      title: 'Tech Tracks',
      description: 'Specialized tracks in various technology domains'
    },
    {
      title: 'Tools & Workflow',
      description: 'Learn industry-standard tools and workflows'
    }
  ];

  return (
    <div className="learning-page">
      {/* Hero Section */}
      <section className="learning-hero">
        <div className="learning-hero-content">
          <div className="learning-hero-text">
            <h1>Skill → Career</h1>
            <p>Transform your potential into professional expertise with AILYT Learning Centre</p>
            <div className="learning-hero-ctas">
              <button className="cta-primary">Free Counselling</button>
              <button className="cta-secondary">Explore Courses</button>
            </div>
          </div>
          <div className="learning-hero-visual">
            <div className="hero-box hero-box-1"></div>
            <div className="hero-box hero-box-2"></div>
            <div className="hero-box hero-box-3"></div>
          </div>
        </div>
      </section>

      {/* Why AILYT Learning */}
      <section id="learning-why" className="learning-why">
        <div className="section-container">
          <h2>Why AILYT Learning Centre</h2>
          <p className="section-subtitle">We provide the foundation for your success</p>
          
          <div className="why-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-card-icon">
                  <span className="icon-number">{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="learning-courses" className="learning-courses">
        <div className="section-container">
          <h2>Our Courses</h2>
          <p className="section-subtitle">Explore our wide range of professional courses</p>
          
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-category">
                <div className="course-header">
                  <h3>{course.category}</h3>
                </div>
                <ul className="course-items">
                  {course.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="course-item-icon">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="course-link">View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section id="learning-internships" className="learning-internships">
        <div className="section-container">
          <h2>Internship Programs</h2>
          <p className="section-subtitle">Gain real-world experience and accelerate your career</p>
          
          <div className="internship-grid">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="internship-card">
                <div className="internship-number">{index + 1}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Journey */}
      <section className="student-journey">
        <div className="section-container">
          <h2>Your Learning Journey</h2>
          
          <div className="journey-steps">
            <div className="journey-step">
              <div className="step-number">1</div>
              <h3>Counselling</h3>
              <p>Get personalized guidance from our experts</p>
            </div>
            <div className="journey-arrow">→</div>
            <div className="journey-step">
              <div className="step-number">2</div>
              <h3>Enrollment</h3>
              <p>Choose your course and begin your journey</p>
            </div>
            <div className="journey-arrow">→</div>
            <div className="journey-step">
              <div className="step-number">3</div>
              <h3>Learning</h3>
              <p>Learn from experts with hands-on projects</p>
            </div>
            <div className="journey-arrow">→</div>
            <div className="journey-step">
              <div className="step-number">4</div>
              <h3>Certification</h3>
              <p>Earn recognized certificates upon completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Learning Centre */}
      <section id="learning-about" className="learning-about">
        <div className="section-container">
          <div className="about-content">
            <div className="about-text">
              <h2>About AILYT Learning Centre</h2>
              <p>
                AILYT Learning Centre is committed to empowering individuals with industry-relevant skills. 
                Our teaching methodology combines theoretical knowledge with practical application, ensuring 
                our students are job-ready upon completion.
              </p>
              <ul className="about-features">
                <li>Interactive Smart Board Learning</li>
                <li>Small Batch Sizes for Personalized Attention</li>
                <li>Industry Expert Instructors</li>
                <li>Modern Hybrid Learning Infrastructure</li>
                <li>Career Counselling & Job Placement Support</li>
              </ul>
            </div>
            <div className="about-visual">
              <div className="about-box about-box-1"></div>
              <div className="about-box about-box-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="learning-contact" className="learning-cta">
        <div className="section-container">
          <h2>Ready to Transform Your Career?</h2>
          <p>Start your learning journey with AILYT today</p>
          <div className="cta-buttons">
            <button className="cta-primary">Schedule Free Counselling</button>
            <Link to="/contact" className="cta-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
      
      <a
        href="https://wa.me/8630611232?text=Hi%20AILYT%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-whatsapp-btn"
        title="Chat with us on WhatsApp"
      >
        💬
      </a>
    </div>
  );
};

export default Learning;

