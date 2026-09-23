import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/WebDevelopmentServices.css';

const WebDevelopmentServices = () => {
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

    document.title = 'Web Development Services | AILYT Technologies';
    description.setAttribute(
      'content',
      'AILYT Technologies provides custom web development services for startups and businesses, including responsive websites, web applications, frontend and backend development, API integrations and scalable digital solutions.'
    );
    canonical.setAttribute('href', 'https://ailyt.in/it-services/web-development');

    return () => {
      document.title = previousTitle;
      if (createdDescription) description.remove();
      else description.setAttribute('content', previousDescription);
      if (createdCanonical) canonical.remove();
      else canonical.setAttribute('href', previousCanonical);
    };
  }, []);

  const services = [
    ['01', 'Business Website Development', 'Clear, responsive websites that explain your offer, guide visitors and give your team a maintainable digital foundation.'],
    ['02', 'Custom Web Application Development', 'Browser-based applications for structured workflows, dashboards, portals and data-led processes where a standard website is not enough.'],
    ['03', 'Frontend Development', 'Reusable interfaces with responsive layouts, clear navigation, accessible patterns and API-connected user experiences.'],
    ['04', 'Backend Development', 'Server-side logic, validation, database connectivity, business rules and APIs that support dependable application behaviour.'],
    ['05', 'Full Stack Development', 'Connected frontend and backend work planned together so the interface, data flow and implementation stay aligned.'],
    ['06', 'API & Third-Party Integrations', 'Practical connections between applications, APIs and external services to reduce manual handoffs and keep information moving.'],
    ['07', 'Website Redesign & Modernisation', 'Improve an existing website through clearer structure, responsive behaviour, updated interfaces and more manageable implementation.'],
    ['08', 'Ongoing Website Enhancements', 'Extend an existing digital product with focused features, fixes, integrations and refinements as requirements develop.']
  ];

  const process = [
    ['Discover', 'Understand the business context, users, existing process and outcome the project needs to support.'],
    ['Plan', 'Define scope, priorities, technical direction and the smallest useful first delivery.'],
    ['Design', 'Shape information hierarchy, user journeys and reusable interface patterns before implementation.'],
    ['Develop', 'Build the frontend, backend or full stack pieces in focused, reviewable increments.'],
    ['Integrate', 'Connect APIs, data sources and business rules so the product works beyond a static screen.'],
    ['Test', 'Check behaviour, validation, responsive layouts, integrations and the paths users rely on.'],
    ['Launch', 'Prepare the agreed release or handoff with practical awareness of the target environment.'],
    ['Improve', 'Use feedback and observed needs to prioritise sensible follow-up enhancements.']
  ];

  const technologies = ['React', 'JavaScript', 'Node.js', 'Flutter', 'Python', 'SQL', 'MongoDB', 'MariaDB', 'REST APIs', 'Git & GitHub', 'Cloud Platforms', 'Workflow Automation'];
  const projectTypes = ['Corporate Websites', 'Business Websites', 'Web Applications', 'Customer Portals', 'Admin Dashboards', 'MVP Web Platforms', 'Data Dashboards', 'API-Connected Applications', 'Internal Business Tools'];
  const audiences = [
    ['Startups', 'Turn an early product direction into a focused digital experience or testable web platform.'],
    ['Small Businesses', 'Replace disconnected manual steps with a clearer website, workflow or customer-facing tool.'],
    ['Growing Companies', 'Extend existing systems as teams, users and operational requirements become more complex.'],
    ['Professional Services', 'Present expertise clearly and support enquiries, client interactions or internal processes online.'],
    ['Teams Modernising Manual Processes', 'Explore practical applications, dashboards and integrations that fit the way work actually happens.']
  ];
  const faqs = [
    ['What web development services does AILYT provide?', 'AILYT works on business websites, custom web applications, frontend and backend systems, full stack features, API integrations, redesigns and ongoing enhancements.'],
    ['Can AILYT build custom web applications?', 'Yes. Custom web application development can support dashboards, portals, workflow tools, data-driven applications and other browser-based business requirements.'],
    ['Do you develop both frontend and backend systems?', 'Yes. Projects can include responsive frontend interfaces, server-side logic, databases, validation, APIs and the integration between those layers.'],
    ['Can you integrate APIs into an existing website or application?', 'Yes. API integrations can be planned for existing or new products when they support a clear business workflow or exchange of information.'],
    ['Do you build responsive websites?', 'Yes. Responsive behaviour, mobile compatibility, clear navigation and practical accessibility awareness are considered during frontend implementation.'],
    ['Can AILYT work with startups on MVP web development?', 'Yes. AILYT can discuss an early product idea, prioritise essential functionality and plan a focused MVP scope without assuming every feature belongs in the first release.'],
    ['Can you improve or extend an existing web application?', 'Yes. Depending on the technology and project context, work can include interface improvements, new features, integrations, database changes or workflow refinements.'],
    ['How can I discuss a web development project with AILYT?', 'Share the business problem, current process, users and expected outcome through the IT Services contact page. The team can then discuss scope and possible next steps.']
  ];

  return (
    <main className="web-development-page">
      <section className="web-development-hero">
        <div className="web-development-container web-development-hero-grid">
          <div className="web-development-hero-copy">
            <span className="web-development-kicker">AILYT TECHNOLOGIES · WEB DEVELOPMENT</span>
            <h1>Custom Web Development Services for Startups &amp; Businesses</h1>
            <p>AILYT builds responsive websites, business web applications, customer-facing platforms, frontend interfaces, backend systems and API-connected digital solutions around the way a business needs to work.</p>
            <div className="web-development-actions">
              <Link to="/it-services/contact" className="web-development-primary">Discuss Your Project</Link>
              <Link to="/it-services/projects" className="web-development-secondary">Explore Our Projects</Link>
            </div>
          </div>
          <div className="web-development-hero-panel">
            <div><strong>Web Experiences</strong><span>Clear interfaces for customers, teams and everyday business use.</span></div>
            <div><strong>Connected Systems</strong><span>Frontend, backend, data and integrations considered as one product.</span></div>
            <div><strong>Practical Scope</strong><span>Focused delivery shaped around the requirements that matter now.</span></div>
            <div><strong>Room to Grow</strong><span>Maintainable foundations for sensible future improvements.</span></div>
          </div>
        </div>
      </section>

      <section className="web-development-section">
        <div className="web-development-container web-development-two-column">
          <div><span className="web-development-kicker">THE FOUNDATION</span><h2>Web Development Built Around Real Business Needs</h2></div>
          <div><p>Good <strong>web development services</strong> are not only about visual design. Usability, maintainability, performance, business workflows, integrations and future expansion all affect whether a digital product remains useful after launch.</p><p>AILYT starts by understanding what the website or application should help people do, then shapes the interface and technical implementation around that outcome.</p></div>
        </div>
      </section>

      <section className="web-development-section web-development-alt">
        <div className="web-development-container">
          <div className="web-development-heading"><span className="web-development-kicker">WHAT WE DO</span><h2>Web Development Services for Different Digital Needs</h2></div>
          <div className="web-development-card-grid">{services.map(([number, title, description]) => <article className="web-development-card" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="web-development-section">
        <div className="web-development-container web-development-detail-grid">
          <article><span className="web-development-kicker">APPLICATIONS</span><h2>Custom Web Applications for Business Workflows</h2><p>Web application development can support internal dashboards, customer portals, booking systems, workflow applications, admin panels, data-driven applications and business management tools. These are capabilities to discuss against a real requirement, not a claim that every project includes every pattern.</p></article>
          <article><span className="web-development-kicker">FRONTEND</span><h2>Responsive Frontend Development</h2><p>Frontend work brings together responsive layouts, mobile compatibility, reusable interfaces, clear navigation, accessibility awareness and API-connected screens. React can be used where it fits the project and existing technology direction.</p></article>
          <article><span className="web-development-kicker">BACKEND</span><h2>Backend Systems &amp; API Development</h2><p>Backend implementation may include server-side logic, database connectivity, validation, authentication architecture, APIs, business rules and integrations. Node.js and Express are part of the technology patterns reflected in AILYT&#39;s current work.</p></article>
          <article><span className="web-development-kicker">DESIGN + BUILD</span><h2>Web Design and Development Working Together</h2><p>Information hierarchy, responsive design, reusable UI and user journeys need to meet technical implementation. Bringing those decisions together creates a more coherent experience than treating design and development as disconnected steps.</p></article>
        </div>
      </section>

      <section className="web-development-section web-development-process">
        <div className="web-development-container"><div className="web-development-heading"><span className="web-development-kicker">HOW WE WORK</span><h2>From the First Requirement to the Next Improvement</h2></div><div className="web-development-process-grid">{process.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div>
      </section>

      <section className="web-development-section web-development-alt">
        <div className="web-development-container web-development-two-column"><div><span className="web-development-kicker">TECHNOLOGY</span><h2>Technologies We Work With</h2><p>The right stack depends on the product, team and constraints. These technologies reflect the current AILYT project and service capability rather than a promise that every project uses all of them.</p></div><div className="web-development-tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
      </section>

      <section className="web-development-section">
        <div className="web-development-container web-development-two-column"><div><span className="web-development-kicker">PROJECT CAPABILITIES</span><h2>What We Can Build</h2></div><div className="web-development-pill-grid">{projectTypes.map((type) => <span key={type}>{type}</span>)}</div></div>
      </section>

      <section className="web-development-section web-development-alt">
        <div className="web-development-container"><div className="web-development-heading"><span className="web-development-kicker">WHO WE WORK WITH</span><h2>A Practical Partner for Digital Product Work</h2></div><div className="web-development-audience-grid">{audiences.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div><p className="web-development-company-note">Choosing a <strong>web development company</strong> or website development company should begin with how the team approaches requirements, architecture, communication and long-term maintainability. AILYT supports remote collaboration, online project discussions and distributed delivery conversations.</p></div>
      </section>

      <section className="web-development-section web-development-approach"><div className="web-development-container web-development-two-column"><div><span className="web-development-kicker">WHY AILYT</span><h2>Clear, Practical Collaboration</h2></div><div className="web-development-approach-grid"><span>Practical Development</span><span>Clear Scope</span><span>Iterative Delivery</span><span>Maintainable Code</span><span>Business-Focused Solutions</span><span>Direct Collaboration</span></div></div></section>

      <section className="web-development-section web-development-projects"><div className="web-development-container web-development-two-column"><div><span className="web-development-kicker">SEE THE BROADER CAPABILITY</span><h2>Explore AILYT Projects and IT Services</h2></div><div><p>Review the existing project and service areas to understand how web applications, mobile work, analytics, automation and integrations fit within AILYT&#39;s broader technology capability.</p><div className="web-development-inline-links"><Link to="/it-services/projects">View Our Projects</Link><Link to="/it-services">View IT Services</Link><Link to="/it-services/contact">Discuss a Requirement</Link></div></div></div></section>

      <section className="web-development-section web-development-faq"><div className="web-development-container"><div className="web-development-heading"><span className="web-development-kicker">COMMON QUESTIONS</span><h2>Web Development FAQs</h2></div><div className="web-development-faq-grid">{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></div></section>

      <section className="webdev-learning-bridge">
        <div className="web-development-container webdev-learning-bridge-grid">
          <div>
            <span className="web-development-kicker">FOR STUDENTS &amp; ASPIRING DEVELOPERS</span>
            <h2>Looking to Learn Web Development?</h2>
            <p>If your goal is to build practical web development skills rather than hire a development team, AILYT Learning Centre offers a connected path through coding practice, frontend and backend work, project-based learning, Git and GitHub workflows, software development practices and internship opportunities.</p>
          </div>
          <div className="webdev-learning-bridge-options">
            <Link to="/learning" className="webdev-learning-bridge-card"><strong>Explore Web Development Learning</strong><span>See the Learning Centre programs and practical technology paths.</span></Link>
            <Link to="/learning/internship-programs/tech-tracks" className="webdev-learning-bridge-card"><strong>Explore Software Development Internship</strong><span>Compare focused tracks for building project experience.</span></Link>
            <Link to="/learning/internship-programs/tools-workflow" className="webdev-learning-bridge-link">View Internship Tools &amp; Workflow</Link>
          </div>
        </div>
      </section>

      <section className="web-development-final"><div className="web-development-container"><h2>Have a Web Project in Mind?</h2><p>Share the problem you are trying to solve, the people who will use the product and the outcome you want to discuss.</p><div className="web-development-actions"><Link to="/it-services/contact" className="web-development-primary">Discuss Your Project</Link><Link to="/it-services" className="web-development-secondary">View IT Services</Link></div></div></section>
    </main>
  );
};

export default WebDevelopmentServices;
