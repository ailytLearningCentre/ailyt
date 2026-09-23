import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ITServices.css';

const ITServices = () => {
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
      'IT Services & Software Solutions in Dehradun | AILYT Technologies';

    description.setAttribute(
      'content',
      'AILYT Technologies provides IT services and software solutions in Dehradun, including web applications, mobile apps, MVP development, data analytics, automation and API integrations for businesses and startups.'
    );

    canonical.setAttribute('href', 'https://ailyt.in/it-services');

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


  const services = [
    {
      title: 'Web Application Development',
      description:
        'We build responsive business websites, portals, dashboards and custom web applications designed around real operational requirements.'
    },
    {
      title: 'Mobile App Development',
      description:
        'We develop cross-platform mobile applications using technologies such as Flutter, with backend APIs and database integration.'
    },
    {
      title: 'MVP & Prototype Development',
      description:
        'We help businesses turn early-stage ideas into working prototypes and minimum viable products that can be tested before larger investment.'
    },
    {
      title: 'Data & Analytics Solutions',
      description:
        'We create dashboards, reporting solutions and data workflows that help businesses organise information and make better decisions.'
    },
    {
      title: 'Automation & Integrations',
      description:
        'We connect applications, APIs and business processes to reduce repetitive work and create smoother digital workflows.'
    },
    {
      title: 'MDM & Proof of Concepts',
      description:
        'We explore Master Data Management use cases and develop focused proof-of-concept solutions for business and technology teams.'
    }
  ];

  const industries = [
    {
      name: 'Healthcare & Wellness',
      description:
        'Digital platforms for appointments, wellness services, user management, health programmes and customer engagement.'
    },
    {
      name: 'Financial Services',
      description:
        'CRM, lead-management, client servicing and workflow solutions for financial advisory and related businesses.'
    },
    {
      name: 'Education & Training',
      description:
        'Learning platforms, student workflows, internship systems, course websites and digital tools for education providers.'
    },
    {
      name: 'Startups & SMEs',
      description:
        'Practical IT services for small businesses, startups and growing teams that need custom software, automation, digital workflows or new product development.'
    }
  ];

  const technologies = [
    'React',
    'JavaScript',
    'Node.js',
    'Flutter',
    'Python',
    'SQL',
    'MongoDB',
    'MariaDB',
    'REST APIs',
    'Git & GitHub',
    'Cloud Platforms',
    'Workflow Automation'
  ];

  const faqs = [
    {
      question: 'Do you provide IT services for small businesses and startups?',
      answer:
        'Yes. AILYT works with small businesses, startups and growing teams on practical software, automation, web, mobile, data and integration requirements. The scope is planned according to the business need, expected users and budget.'
    },
    {
      question: 'What type of software solutions does AILYT Technologies build?',
      answer:
        'AILYT works on web applications, mobile applications, business dashboards, MVPs, automation workflows, API integrations, data solutions and other custom software requirements.'
    },
    {
      question: 'Can AILYT help a startup develop an MVP?',
      answer:
        'Yes. We can work with an early-stage idea, identify the essential features, select an appropriate technology stack and develop a working MVP that can be tested with users before further expansion.'
    },
    {
      question: 'Can you improve or extend an existing application?',
      answer:
        'Yes. Depending on the existing technology and project requirements, we can review an application and assist with new features, integrations, user-interface improvements, database work, automation or deployment.'
    },
    {
      question: 'Do you develop both web and mobile applications?',
      answer:
        'Yes. Our work can include browser-based applications as well as cross-platform mobile applications, with APIs and databases connecting the different parts of the solution.'
    },
    {
      question: 'How do I discuss a project with AILYT?',
      answer:
        'You can share your business problem, existing process and expected outcome through our contact page. We can then discuss the scope, possible approach and next steps.'
    }
  ];

  return (
    <div className="itservices-page">

      {/* Hero Section */}
      <section className="itservices-hero">
        <div className="itservices-hero-content">

          <div className="itservices-hero-text">
            <h1>
              IT Services & Custom Software Solutions for Modern Businesses
            </h1>

            <p>
              AILYT Technologies provides IT services and custom software solutions
              in Dehradun for businesses, startups and growing teams, including
              web applications, mobile apps, analytics, automation and system
              integrations.
            </p>

            <div className="itservices-hero-ctas">
              <Link
                to="/it-services/contact"
                className="cta-primary"
              >
                Discuss Your Project
              </Link>

              <Link
                to="/it-services/projects"
                className="cta-secondary"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="itservices-hero-visual">
            <div className="hero-box hero-box-1"></div>
            <div className="hero-box hero-box-2"></div>
            <div className="hero-box hero-box-3"></div>
          </div>

        </div>
      </section>


      {/* About IT Services */}
      <section className="itservices-about">
        <div className="section-container">

          <h2>
            IT Solutions Built Around Real Business Requirements
          </h2>

          <p>
            Every business has a different technology challenge. Some need a
            customer-facing application, while others need better internal
            workflows, reporting, automation or integration between existing
            systems. Our IT solutions are planned around the business problem,
            expected users and the outcome the technology needs to support.
          </p>

          <p>
            Our work covers web application development, mobile apps, MVP
            development, data analytics, business automation, API
            integrations and selected Master Data Management use cases.
            Solutions can be developed as new applications or as improvements
            to existing digital systems.
          </p>

          <p>
            We aim to keep technology choices practical. Architecture,
            development tools and hosting options are considered according to
            the expected users, functionality, scalability and budget of the
            project rather than forcing every requirement into the same
            technology stack.
          </p>

          <Link
            to="/it-services/services"
            className="service-link"
          >
            Explore our IT services →
          </Link>

        </div>
      </section>


      {/* Services Overview */}
      <section className="itservices-services-overview">
        <div className="section-container">

          <h2>IT Services & Software Solutions</h2>

          <p className="section-subtitle">
            From an initial idea to a practical, scalable digital solution
          </p>

          <div className="services-grid">

            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
              >

                <div className="service-icon">
                  {index + 1}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link
                  to="/it-services/services"
                  className="service-link"
                >
                  Learn More →
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* Development Process */}
      <section className="itservices-process">
        <div className="section-container">

          <h2>How We Approach a Technology Project</h2>

          <p className="section-subtitle">
            A structured path from business problem to working solution
          </p>

          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon">🔎</div>
              <h3>1. Understand</h3>
              <p>
                We begin by understanding the business problem, users,
                existing processes and the outcome the project should achieve.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🧭</div>
              <h3>2. Plan</h3>
              <p>
                Features, application architecture, technology choices and
                development priorities are defined before implementation.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">💻</div>
              <h3>3. Build</h3>
              <p>
                The application is developed in manageable stages so that
                functionality can be reviewed as the project progresses.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🧪</div>
              <h3>4. Test</h3>
              <p>
                Key user journeys and functionality are tested before the
                application is prepared for production use.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>5. Deploy</h3>
              <p>
                The finished solution is prepared for its hosting or cloud
                environment and released for users.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🔧</div>
              <h3>6. Improve</h3>
              <p>
                Applications can continue evolving through new features,
                integrations and improvements as requirements change.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Technologies */}
      <section className="itservices-technologies">
        <div className="section-container">

          <h2>Technologies We Work With</h2>

          <p className="section-subtitle">
            Modern tools selected according to the needs of each project
          </p>

          <p>
            Our technology work can involve frontend development, mobile
            applications, backend APIs, databases, version control, cloud
            environments and workflow automation. The exact technology stack
            depends on the requirements of the application.
          </p>

          <div className="technologies-grid">

            {technologies.map((technology, index) => (
              <div
                key={index}
                className="technology-card"
              >
                {technology}
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Industries Served */}
      <section className="itservices-industries">
        <div className="section-container">

          <h2>Industries & Business Areas We Work With</h2>

          <p className="section-subtitle">
            Technology requirements vary by industry, workflow and customer
            journey
          </p>

          <div className="industries-grid">

            {industries.map((industry, index) => (
              <div
                key={index}
                className="industry-card"
              >

                <div className="industry-icon">
                  🏢
                </div>

                <h3>{industry.name}</h3>

                <p>{industry.description}</p>

              </div>
            ))}

          </div>

          <Link
            to="/it-services/industries"
            className="service-link"
          >
            Explore industries we serve →
          </Link>

        </div>
      </section>


      {/* Why AILYT */}
      <section className="itservices-why">
        <div className="section-container">

          <h2>Why Work With AILYT Technologies?</h2>

          <p className="section-subtitle">
            Practical development with focus on the business problem
          </p>

          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h3>Requirement Focused</h3>
              <p>
                We start with what the application needs to accomplish rather
                than selecting technology before understanding the problem.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🧩</div>
              <h3>Flexible Technology Stack</h3>
              <p>
                Technologies can be selected according to functionality,
                budget, maintainability and expected growth.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">📱</div>
              <h3>Web & Mobile Capability</h3>
              <p>
                Projects can combine web applications, mobile interfaces,
                backend services and databases within one solution.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🔗</div>
              <h3>Integration Mindset</h3>
              <p>
                Existing applications and services can often be connected
                through APIs and automation instead of rebuilding everything.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">📈</div>
              <h3>Build for Growth</h3>
              <p>
                We consider how an application may evolve so that future
                features and integrations can be added more efficiently.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Collaborative Development</h3>
              <p>
                Regular reviews help keep development aligned with the
                business requirement throughout the project.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Projects */}
      <section className="itservices-projects">
        <div className="section-container">

          <h2>Selected Projects & Solutions</h2>

          <p className="section-subtitle">
            Examples of technology problems being solved through practical
            application development
          </p>

          <div className="projects-grid">

            <div className="project-card">

              <h3>The Real Health</h3>

              <p>
                A mobile-focused wellness platform designed around services
                such as user registration, appointments, health programmes,
                reports and ongoing customer interaction.
              </p>

              <p>
                The solution combines a mobile frontend with backend APIs and
                database-driven functionality.
              </p>

              <Link to="/it-services/projects">
                View Project →
              </Link>

            </div>


            <div className="project-card">

              <h3>Financial Advisory CRM</h3>

              <p>
                A CRM initiative focused on helping a financial advisory
                business organise leads, client interactions, follow-ups and
                operational workflows through a web and mobile solution.
              </p>

              <Link to="/it-services/projects">
                View Project →
              </Link>

            </div>


            <div className="project-card">

              <h3>Business Automation</h3>

              <p>
                Workflow automation projects designed to connect enquiries,
                messaging platforms, forms and business data so that repetitive
                manual activities can be reduced.
              </p>

              <Link to="/it-services/projects">
                View Project →
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* Hire Interns */}
      <section className="itservices-hire-interns">
        <div className="section-container">

          <div className="hire-content">

            <div className="hire-text">

              <h2>Hire Technology Interns from AILYT</h2>

              <p>
                Businesses with suitable project requirements can engage with
                interns who have gained practical exposure to development
                tools, projects and collaborative workflows at AILYT.
              </p>

              <ul className="hire-features">
                <li>
                  Practical exposure to software development projects
                </li>
                <li>
                  Familiarity with modern development tools and Git workflows
                </li>
                <li>
                  Flexible engagement based on project requirements
                </li>
                <li>
                  Opportunities for businesses to evaluate emerging talent
                </li>
              </ul>

              <Link
                to="/it-services/hire-interns"
                className="cta-primary"
              >
                Explore Intern Profiles
              </Link>

            </div>

            <div className="hire-visual">
              <div className="hire-box hire-box-1"></div>
              <div className="hire-box hire-box-2"></div>
            </div>

          </div>

        </div>
      </section>


      {/* FAQ */}
      <section className="itservices-faq">
        <div className="section-container">

          <h2>Frequently Asked Questions</h2>

          <p className="section-subtitle">
            Common questions about AILYT IT services and software solutions
          </p>

          <div className="faq-list">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item"
              >

                <h3>{faq.question}</h3>

                <p>{faq.answer}</p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Final CTA */}
      <section className="itservices-cta">
        <div className="section-container">

          <h2>Have a Technology Project in Mind?</h2>

          <p>
            Tell us about the problem you want to solve and the digital
            solution you are considering. We can discuss the requirements and
            possible next steps.
          </p>

          <div className="cta-buttons">

            <Link
              to="/it-services/contact"
              className="cta-primary"
            >
              Discuss Your Project
            </Link>

            <Link
              to="/it-services/projects"
              className="cta-secondary"
            >
              Explore Our Projects
            </Link>

          </div>

        </div>
      </section>
      </div>

  );
};

export default ITServices;
