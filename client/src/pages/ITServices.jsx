import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ITServices.css';

const ITServices = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android'
    },
    {
      title: 'MVP Development',
      description: 'Rapid prototyping and MVP development for startups and innovators'
    },
    {
      title: 'Reltio / MDM PoCs',
      description: 'Master Data Management and proof of concept implementations'
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics'
    },
    {
      title: 'Automation & Integrations',
      description: 'Streamline workflows with intelligent automation and API integrations'
    }
  ];

  const industries = [
    {
      name: 'Insurance',
      description: 'Solutions tailored for insurance industry needs'
    },
    {
      name: 'Education',
      description: 'EdTech and educational technology solutions'
    },
    {
      name: 'Startups',
      description: 'Accelerate your startup with our technology expertise'
    },
    {
      name: 'SMEs',
      description: 'Cost-effective solutions for small and medium enterprises'
    }
  ];

  return (
    <div className="itservices-page">
      {/* Hero Section */}
      <section className="itservices-hero">
        <div className="itservices-hero-content">
          <div className="itservices-hero-text">
            <h1>Build. Integrate. Deliver.</h1>
            <p>Enterprise-grade IT solutions designed for your business growth</p>
            <div className="itservices-hero-ctas">
              <button className="cta-primary">Get Consultation</button>
              <button className="cta-secondary">View Portfolio</button>
            </div>
          </div>
          <div className="itservices-hero-visual">
            <div className="hero-box hero-box-1"></div>
            <div className="hero-box hero-box-2"></div>
            <div className="hero-box hero-box-3"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="itservices-services" className="itservices-services-overview">
        <div className="section-container">
          <h2>Our Services</h2>
          <p className="section-subtitle">Comprehensive IT solutions for every business need</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{index + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="service-link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section id="itservices-industries" className="itservices-industries">
        <div className="section-container">
          <h2>Industries Served</h2>
          <p className="section-subtitle">Proven expertise across diverse sectors</p>
          
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">🏢</div>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AILYT IT */}
      <section className="itservices-why">
        <div className="section-container">
          <h2>Why AILYT IT Services</h2>
          <p className="section-subtitle">What sets us apart from the rest</p>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">💡</div>
              <h3>Expert Team</h3>
              <p>Experienced developers and architects with certified expertise</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Agile development methodology for rapid time-to-market</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🔒</div>
              <h3>Security First</h3>
              <p>Industry-standard security practices and compliance</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📊</div>
              <h3>Scalability</h3>
              <p>Solutions designed to grow with your business</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Client Partnership</h3>
              <p>Collaborative approach with transparent communication</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Competitive pricing without compromising quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Case Studies */}
      <section id="itservices-projects" className="itservices-projects">
        <div className="section-container">
          <h2>Projects & Case Studies</h2>
          <p className="section-subtitle">Real-world examples of our work</p>
          
          <div className="projects-grid">
            <div className="project-card">
              <h3>Real Health App</h3>
              <p>Healthcare platform connecting patients and providers</p>
              <Link to="/contact">View Case Study →</Link>
            </div>
            <div className="project-card">
              <h3>Insurance Demos</h3>
              <p>Interactive insurance solutions and prototypes</p>
              <Link to="/contact">View Case Study →</Link>
            </div>
            <div className="project-card">
              <h3>Sample MVPs</h3>
              <p>Successful MVP launches for early-stage companies</p>
              <Link to="/contact">View Case Study →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Interns */}
      <section id="itservices-hire-interns" className="itservices-hire-interns">
        <div className="section-container">
          <div className="hire-content">
            <div className="hire-text">
              <h2>Hire Interns from AILYT</h2>
              <p>Access a pool of talented interns trained in modern tech stacks and industry best practices.</p>
              <ul className="hire-features">
                <li>Pre-trained talent ready to contribute</li>
                <li>Flexible engagement models</li>
                <li>Cost-effective resource augmentation</li>
                <li>Direct oversight and quality assurance</li>
              </ul>
              <Link to="/contact" className="cta-primary">Learn More</Link>
            </div>
            <div className="hire-visual">
              <div className="hire-box hire-box-1"></div>
              <div className="hire-box hire-box-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="itservices-contact" className="itservices-cta">
        <div className="section-container">
          <h2>Ready to Transform Your Digital Infrastructure?</h2>
          <p>Let's work together to build solutions that drive growth</p>
          <div className="cta-buttons">
            <button className="cta-primary">Schedule Consultation</button>
            <Link to="/contact" className="cta-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;

