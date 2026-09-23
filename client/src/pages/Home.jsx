import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import WhatIsAilyt from '../components/WhatIsAilyt';
import Verticals from '../components/Verticals';
import WhyAilyt from '../components/WhyAilyt';
import Founder from '../components/Founder';

import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    const previousTitle = document.title;

    let description = document.querySelector('meta[name="description"]');
    const createdDescription = !description;
    const previousDescription = description?.getAttribute('content') || '';

    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;
    const previousCanonical = canonical?.getAttribute('href') || '';

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    document.title =
      'IT Courses, Data Analytics & Software Development in Dehradun | AILYT';

    description.setAttribute(
      'content',
      'Explore IT courses, Data Analytics training and software development services in Dehradun with AILYT. Learn practical skills, build real projects, or work with us on web, mobile, automation and custom software solutions.'
    );

    canonical.setAttribute('href', 'https://ailyt.in/');

    return () => {
      document.title = previousTitle;

      if (createdDescription) {
        description.remove();
      } else {
        description.setAttribute('content', previousDescription);
      }

      if (createdCanonical) {
        canonical.remove();
      } else {
        canonical.setAttribute('href', previousCanonical);
      }
    };
  }, []);

  const learningPrograms = [
    {
      title: 'Data Analyst Program',
      description:
        'Build practical analytics skills with Excel, SQL, Power BI, Python, statistics and AI-assisted analytics through guided practice, business projects and portfolio development.',
      link: '/data-analyst-course-dehradun',
      linkText: 'Explore Data Analyst Program'
    },
    {
      title: 'IGNOU BCA & MCA Support',
      description:
        'Combine structured academic support with programming practice, practical labs, live projects, industrial training and career-focused skill development.',
      link: '/learning/courses/ignou-bca-mca',
      linkText: 'Explore BCA/MCA Track'
    },
    {
      title: 'Computer Courses',
      description:
        'Develop essential computer and digital skills through practical learning in computer fundamentals, office productivity, Excel and useful workplace applications.',
      link: '/learning',
      linkText: 'Explore Computer Courses'
    },
    {
      title: 'Programming & Development',
      description:
        'Strengthen programming logic through guided coding, problem solving, practical exercises and project-based development.',
      link: '/learning',
      linkText: 'Explore Programming'
    }
  ];

  const softwareServices = [
    {
      title: 'Web Application Development',
      description:
        'Responsive business websites, portals, dashboards and custom web applications designed around real operational requirements.'
    },
    {
      title: 'Mobile App Development',
      description:
        'Cross-platform mobile applications supported by backend APIs, databases and user-focused digital workflows.'
    },
    {
      title: 'MVP & Prototype Development',
      description:
        'Turn early-stage ideas into working prototypes and minimum viable products that can be tested before larger investment.'
    },
    {
      title: 'Data & Analytics Solutions',
      description:
        'Dashboards, reporting solutions and data workflows that help businesses organise information and understand performance.'
    },
    {
      title: 'Automation & Integrations',
      description:
        'Connect applications, APIs, forms and business workflows to reduce repetitive manual work and improve process flow.'
    },
    {
      title: 'Custom Software Solutions',
      description:
        'Practical software designed around business requirements, users, workflows, maintainability and future growth.'
    }
  ];

  const projects = [
    {
      title: 'Healthcare & Wellness Platform',
      description:
        'A mobile-focused solution supporting user journeys, appointments, wellness services, health programmes and digital interaction.'
    },
    {
      title: 'Financial Advisory CRM',
      description:
        'A digital workflow designed to organise leads, customer interactions, follow-ups and advisory business processes.'
    },
    {
      title: 'Business Automation',
      description:
        'Workflow solutions that connect enquiries, messaging, forms and business information to reduce repetitive activities.'
    }
  ];

  const faqs = [
    {
      question: 'What does AILYT Technologies do?',
      answer:
        'AILYT combines practical technology learning with software development services. Our work includes IT courses, Data Analytics training, programming, software applications, automation and digital solutions.'
    },
    {
      question: 'What IT courses does AILYT offer in Dehradun?',
      answer:
        'AILYT Learning Centre provides learning paths in Data Analytics, computer applications, programming, IGNOU BCA/MCA support and other practical technology skills.'
    },
    {
      question: 'Does AILYT provide Data Analytics training?',
      answer:
        'Yes. Our Data Analyst learning track includes Excel, SQL, Power BI, Python, statistics, AI-assisted analytics, projects and portfolio development.'
    },
    {
      question: 'Does AILYT develop software for businesses?',
      answer:
        'Yes. AILYT works on web applications, mobile apps, MVPs, data solutions, automation, integrations and custom software requirements.'
    },
    {
      question: 'Does AILYT provide industrial training?',
      answer:
        'Selected learning tracks include guided industrial training exposure through project briefs, development workflows, documentation, mentor reviews and presentations.'
    },
    {
      question: 'Where is AILYT based?',
      answer:
        'AILYT Learning Centre and technology operations are based in Dehradun, with learning and software services designed for students, professionals, startups and businesses.'
    }
  ];

  return (
    <main className="home">
      {/* Existing hero stays FIRST. Its current two buttons remain unchanged. */}
      <HeroSection />

      <WhatIsAilyt />
      <Verticals />

      {/* Featured learning programs */}
      <section className="home-section home-learning">
        <div className="home-container">
          <div className="home-section-heading">
            <span className="home-kicker">AILYT LEARNING CENTRE</span>
            <h2>Practical IT Courses & Career-Focused Learning in Dehradun</h2>
            <p>
              Build technical skills through instructor-led learning,
              hands-on practice, projects and structured professional development.
            </p>
          </div>

          <div className="home-learning-grid">
            {learningPrograms.map((program, index) => (
              <article className="home-card" key={program.title}>
                <span className="home-card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to={program.link} className="home-text-link">
                  {program.linkText} →
                </Link>
              </article>
            ))}
          </div>

          <div className="home-center-link">
            <Link to="/learning" className="home-primary-link">
              Explore AILYT Learning Centre
            </Link>
          </div>
        </div>
      </section>

      {/* Software development */}
      <section className="home-section home-software">
        <div className="home-container">
          <div className="home-section-heading">
            <span className="home-kicker">AILYT TECHNOLOGIES</span>
            <h2>Software Development & IT Solutions</h2>
            <p>
              We help businesses, startups and growing teams turn ideas and
              operational requirements into practical digital solutions.
            </p>
          </div>

          <div className="home-software-grid">
            {softwareServices.map((service, index) => (
              <article className="home-service-card" key={service.title}>
                <span className="home-card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="home-center-link">
            <Link to="/it-services" className="home-primary-link">
              Explore Software Development Services
            </Link>
          </div>
        </div>
      </section>

      <WhyAilyt />

      {/* Projects */}
      <section className="home-section home-projects">
        <div className="home-container">
          <div className="home-section-heading">
            <span className="home-kicker">FROM IDEAS TO WORKING SOLUTIONS</span>
            <h2>Projects & Practical Technology Work</h2>
            <p>
              Our technology work focuses on solving practical business
              problems through applications, data workflows and automation.
            </p>
          </div>

          <div className="home-project-grid">
            {projects.map((project, index) => (
              <article className="home-project-card" key={project.title}>
                <span className="home-card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>

          <div className="home-center-link">
            <Link to="/it-services/projects" className="home-primary-link">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Local relevance */}
      <section className="home-section home-dehradun">
        <div className="home-container home-dehradun-grid">
          <div className="home-dehradun-copy">
            <span className="home-kicker">BASED IN DEHRADUN</span>
            <h2>Technology Learning & Software Development in Dehradun</h2>
            <p>
              AILYT brings together a practical learning environment and
              software development capability in Dehradun.
            </p>
            <p>
              Students can build technology and Data Analytics skills through
              guided learning, lab practice, projects and industrial training,
              while businesses can work with AILYT on web applications, mobile
              apps, automation, analytics and custom software solutions.
            </p>
          </div>

          <div className="home-dehradun-points">
            <div>
              <strong>For Students</strong>
              <span>
                IT courses, Data Analytics, programming, projects and career preparation
              </span>
            </div>

            <div>
              <strong>For Businesses</strong>
              <span>
                Web, mobile, automation, analytics and custom software development
              </span>
            </div>
          </div>
        </div>
      </section>

      <Founder />

      {/* FAQs */}
      <section className="home-section home-faq">
        <div className="home-container">
          <div className="home-section-heading">
            <span className="home-kicker">COMMON QUESTIONS</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="home-faq-grid">
            {faqs.map((faq) => (
              <article className="home-faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA. Does NOT replace or move the two existing hero buttons. */}
      <section className="home-final-cta">
        <div className="home-container">
          <h2>Learn with AILYT. Build with AILYT.</h2>
          <p>
            Whether you want to build technology skills or discuss a software
            project, choose the path that fits your goal.
          </p>

          <div className="home-final-actions">
            <Link to="/learning" className="home-final-primary">
              Explore Learning Programs
            </Link>

            <Link to="/it-services/contact" className="home-final-secondary">
              Discuss a Technology Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
