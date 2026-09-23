import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MobileAppDevelopmentServices.css';

const MobileAppDevelopmentServices = () => {
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

    document.title = 'Mobile App Development Services | AILYT Technologies';
    description.setAttribute('content', 'AILYT Technologies provides custom mobile app development services for startups and businesses, including Android, iOS and cross-platform applications, API integrations, backend connectivity and scalable mobile solutions.');
    canonical.setAttribute('href', 'https://ailyt.in/it-services/mobile-app-development');

    return () => {
      document.title = previousTitle;
      if (createdDescription) description.remove();
      else description.setAttribute('content', previousDescription);
      if (createdCanonical) canonical.remove();
      else canonical.setAttribute('href', previousCanonical);
    };
  }, []);

  const services = [
    ['01', 'Custom Mobile App Development', 'Plan mobile experiences around the users, workflows and product priorities that matter to the business.'],
    ['02', 'Android App Development', 'Plan Android-oriented experiences with attention to navigation, data flow, device behaviour and maintainable implementation.'],
    ['03', 'iOS App Development', 'Discuss iOS-facing requirements as part of a broader product plan, including interface behaviour, backend connectivity and release considerations.'],
    ['04', 'Cross-Platform App Development', 'Use a shared development approach where it suits the product, helping features stay consistent across Android and iOS.'],
    ['05', 'Mobile Backend & API Integration', 'Connect mobile screens to REST APIs, authentication services, databases, business rules and external systems.'],
    ['06', 'Business Application Development', 'Support service platforms, dashboards, forms, profiles, internal tools and customer-facing mobile workflows.'],
    ['07', 'Existing App Enhancement', 'Improve an existing application through focused feature work, interface refinements, integration changes or issue resolution.'],
    ['08', 'MVP Mobile Development', 'Shape an initial mobile product around essential functionality so the first scope remains focused and discussable.']
  ];

  const process = [
    ['Discover', 'Understand the product idea, users, business process and the mobile moments that matter.'],
    ['Define', 'Prioritise the first release, clarify requirements and decide what belongs outside the initial scope.'],
    ['Design', 'Map navigation, screen states, user journeys and the data each interaction needs.'],
    ['Develop', 'Build application interfaces and logic in focused increments that can be reviewed.'],
    ['Integrate', 'Connect APIs, authentication, databases and relevant external services.'],
    ['Test', 'Check navigation, forms, responses, screen sizes, errors and platform-specific behaviour.'],
    ['Release', 'Prepare the agreed handoff with awareness of configuration, platform requirements and support needs.'],
    ['Improve', 'Use feedback and observed issues to plan practical enhancements after the first delivery.']
  ];

  const technologies = ['Flutter', 'Dart', 'Node.js', 'Express', 'REST APIs', 'MongoDB', 'Git', 'GitHub'];
  const productTypes = ['Business Apps', 'Service Booking Apps', 'Customer Portals', 'Health & Wellness Apps', 'Internal Business Apps', 'Data-Driven Applications', 'MVP Mobile Products', 'API-Connected Applications'];
  const audiences = [
    ['Startups', 'Turn a product idea into a focused mobile scope that can be discussed, tested and refined.'],
    ['Small Businesses', 'Give customers or teams a more direct way to access services, information or workflows.'],
    ['Growing Companies', 'Extend an existing digital process into a mobile experience as usage and requirements develop.'],
    ['Product Teams', 'Add mobile capability while keeping application logic, APIs and data responsibilities clear.'],
    ['Businesses Digitising Manual Processes', 'Explore forms, dashboards, status updates and connected workflows for everyday operations.']
  ];
  const faqs = [
    ['What mobile app development services does AILYT provide?', 'AILYT works on custom mobile applications, Android and iOS considerations, cross-platform development, backend/API connectivity, business apps, enhancements and focused MVP scopes.'],
    ['Can AILYT build applications for both Android and iOS?', 'Android and iOS requirements can be considered together, with a cross-platform approach discussed where it fits the product and delivery needs.'],
    ['Does AILYT develop Flutter applications?', 'Flutter is part of the current AILYT application technology experience and can be considered for suitable cross-platform mobile products.'],
    ['Can you connect a mobile app to an existing backend or API?', 'Yes. Mobile applications can connect with REST APIs, authentication services, databases, business rules and external integrations when the project requires it.'],
    ['Can AILYT build an MVP mobile application?', 'Yes. The first release can be planned around essential user journeys and integrations rather than attempting to include every possible feature.'],
    ['Can payment systems be integrated into a mobile app?', 'Payment workflows can be discussed as a project requirement. The appropriate provider, compliance needs and backend handling should be confirmed during scope planning.'],
    ['Can you improve an existing mobile application?', 'Yes. Depending on the current codebase, work may include features, interface improvements, API changes, bug fixes or workflow refinements.'],
    ['How can I discuss an app idea with AILYT?', 'Share the product idea, users, key workflow and desired outcome through the IT Services contact page to begin a scope discussion.']
  ];

  return (
    <main className="mobile-app-page">
      <section className="mobile-app-hero"><div className="mobile-app-container mobile-app-hero-grid"><div className="mobile-app-hero-copy"><span className="mobile-app-kicker">AILYT TECHNOLOGIES · MOBILE APP DEVELOPMENT</span><h1>Custom Mobile App Development for Startups &amp; Businesses</h1><p>AILYT develops mobile applications that connect user-facing interfaces, application logic, APIs, backend systems, databases and digital business processes into a practical product experience.</p><div className="mobile-app-actions"><Link to="/it-services/contact" className="mobile-app-primary">Discuss Your App Idea</Link><Link to="/it-services/projects" className="mobile-app-secondary">Explore Our Projects</Link></div></div><div className="mobile-app-hero-panel"><div><strong>Mobile Experiences</strong><span>Clear flows for customers, teams and service users.</span></div><div><strong>Connected Products</strong><span>Application screens linked to APIs, data and business logic.</span></div><div><strong>Cross-Platform Thinking</strong><span>Android and iOS reach considered with the product context.</span></div><div><strong>Release Awareness</strong><span>Testing, configuration and maintainability considered early.</span></div></div></div></section>

      <section className="mobile-app-section"><div className="mobile-app-container mobile-app-two-column"><div><span className="mobile-app-kicker">THE PRODUCT PERSPECTIVE</span><h2>Mobile Applications Built Around Product &amp; Business Needs</h2></div><div><p>Strong <strong>mobile app development services</strong> are about more than a collection of screens. User experience, functionality, data flow, backend connectivity, performance, scalability and maintainability all shape whether an application supports its purpose.</p><p>AILYT works from the workflow outward: what should a user accomplish, what information is needed, and what systems must respond behind the interface?</p></div></div></section>

      <section className="mobile-app-section mobile-app-alt"><div className="mobile-app-container"><div className="mobile-app-heading"><span className="mobile-app-kicker">CORE SERVICES</span><h2>Mobile App Development Services for Different Product Needs</h2></div><div className="mobile-app-card-grid">{services.map(([number, title, description]) => <article className="mobile-app-card" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="mobile-app-section"><div className="mobile-app-container mobile-app-detail-grid"><article><span className="mobile-app-kicker">CROSS-PLATFORM</span><h2>Cross-Platform Mobile Development</h2><p>A shared development approach can help keep features consistent across Android and iOS while giving the team one maintainable codebase to evolve where appropriate. The right choice depends on the product, device needs and technical constraints.</p></article><article><span className="mobile-app-kicker">FLUTTER</span><h2>Flutter App Development</h2><p>Flutter can suit business applications, service platforms, user dashboards, booking flows, forms, authentication and API-driven mobile experiences. It is one option within a broader mobile application plan, not a claim that every project should use it.</p></article><article><span className="mobile-app-kicker">BACKEND + APIS</span><h2>Mobile Apps Connected to Real Business Systems</h2><p>Applications may connect to REST APIs, authentication services, databases, payment systems, business workflows and external integrations. Clear contracts between the mobile client and backend help keep data movement understandable.</p></article><article><span className="mobile-app-kicker">ACCESS + IDENTITY</span><h2>Registration, Authentication &amp; User Roles</h2><p>Where a product needs it, capabilities can include registration, login, OTP authentication, profile management and role-based experiences. The specific identity flow should match the sensitivity and purpose of the application.</p></article></div></section>

      <section className="mobile-app-section mobile-app-process"><div className="mobile-app-container"><div className="mobile-app-heading"><span className="mobile-app-kicker">HOW WE WORK</span><h2>From Product Idea to a More Reliable Mobile Experience</h2></div><div className="mobile-app-process-grid">{process.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="mobile-app-section mobile-app-testing"><div className="mobile-app-container mobile-app-two-column"><div><span className="mobile-app-kicker">QUALITY CHECKS</span><h2>Testing Across the Mobile Experience</h2><p>Testing can cover navigation, form validation, API responses, authentication, different screen sizes, Android and iOS considerations, error handling and real-device checks where applicable.</p></div><div className="mobile-app-checklist"><span>Navigation and screen states</span><span>Form and input validation</span><span>API and authentication responses</span><span>Responsive and device behaviour</span><span>Error handling and recovery</span><span>Release readiness checks</span></div></div></section>

      <section className="mobile-app-section mobile-app-alt"><div className="mobile-app-container mobile-app-two-column"><div><span className="mobile-app-kicker">TECHNOLOGY</span><h2>Technologies We Work With</h2><p>The technology choice follows the application requirements. These tools reflect AILYT&#39;s current mobile and backend work rather than a promise that every project uses all of them.</p></div><div className="mobile-app-tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></section>

      <section className="mobile-app-section"><div className="mobile-app-container mobile-app-two-column"><div><span className="mobile-app-kicker">PRODUCT CAPABILITIES</span><h2>Mobile Products We Can Help Build</h2></div><div className="mobile-app-pill-grid">{productTypes.map((type) => <span key={type}>{type}</span>)}</div></div></section>

      <section className="mobile-app-section mobile-app-alt"><div className="mobile-app-container"><div className="mobile-app-heading"><span className="mobile-app-kicker">WHO WE WORK WITH</span><h2>Mobile Product Work for Teams at Different Stages</h2></div><div className="mobile-app-audience-grid">{audiences.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="mobile-app-section mobile-app-approach"><div className="mobile-app-container mobile-app-two-column"><div><span className="mobile-app-kicker">WHY AILYT</span><h2>Grounded Mobile Product Collaboration</h2></div><div className="mobile-app-approach-grid"><span>Requirement-Focused Development</span><span>Practical Architecture</span><span>Iterative Delivery</span><span>API &amp; Backend Integration</span><span>Maintainable Development</span><span>Direct Collaboration</span></div></div></section>

      <section className="mobile-app-section mobile-app-projects"><div className="mobile-app-container mobile-app-two-column"><div><span className="mobile-app-kicker">PROJECT CONTEXT</span><h2>Explore AILYT Projects and IT Services</h2></div><div><p>Review the broader service and project areas to understand how mobile applications can sit alongside web products, backend systems, data workflows and integrations.</p><div className="mobile-app-inline-links"><Link to="/it-services/projects">View Our Projects</Link><Link to="/it-services/web-development">Explore Web Development</Link><Link to="/it-services">View IT Services</Link><Link to="/it-services/contact">Discuss a Requirement</Link></div></div></div></section>

      <section className="mobile-app-section mobile-app-faq"><div className="mobile-app-container"><div className="mobile-app-heading"><span className="mobile-app-kicker">COMMON QUESTIONS</span><h2>Mobile App Development FAQs</h2></div><div className="mobile-app-faq-grid">{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></div></section>

      <section className="mobile-app-learning-bridge"><div className="mobile-app-container mobile-app-learning-grid"><div><span className="mobile-app-kicker">FOR STUDENTS &amp; ASPIRING DEVELOPERS</span><h2>Looking to Learn App Development?</h2><p>If you want to learn software or mobile development instead of hiring AILYT, the Learning Centre offers a practical path through programming practice, application concepts, frontend and backend understanding, APIs, Git/GitHub, project workflows and internship exposure.</p></div><div className="mobile-app-learning-options"><Link to="/learning" className="mobile-app-learning-card"><strong>Explore Learning Programs</strong><span>Find practical technology learning paths at AILYT Learning Centre.</span></Link><Link to="/learning/internship-programs/tech-tracks" className="mobile-app-learning-card"><strong>Explore Software Development Internship</strong><span>Review focused tracks and project-based development practice.</span></Link><Link to="/learning/internship-programs/tools-workflow" className="mobile-app-learning-link">View Development Tools &amp; Workflow</Link></div></div></section>

      <section className="mobile-app-final"><div className="mobile-app-container"><h2>Have a Mobile App Idea?</h2><p>Share the idea, requirements, application workflow, integrations or MVP scope you want to discuss with AILYT.</p><div className="mobile-app-actions"><Link to="/it-services/contact" className="mobile-app-primary">Discuss Your App Idea</Link><Link to="/it-services" className="mobile-app-secondary">Explore IT Services</Link></div></div></section>
    </main>
  );
};

export default MobileAppDevelopmentServices;
