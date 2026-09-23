import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AutomationIntegrationsServices.css';

const AutomationIntegrationsServices = () => {
  useEffect(() => {
    const previousTitle = document.title;
    let description = document.querySelector('meta[name="description"]');
    const createdDescription = !description;
    const previousDescription = description?.getAttribute('content') || '';
    if (!description) { description = document.createElement('meta'); description.setAttribute('name', 'description'); document.head.appendChild(description); }
    let canonical = document.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;
    const previousCanonical = canonical?.getAttribute('href') || '';
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    document.title = 'Business Automation & Integration Services | AILYT Technologies';
    description.setAttribute('content', 'AILYT Technologies provides business automation and integration services to streamline workflows, connect APIs and applications, automate repetitive processes, synchronize data and improve operational efficiency.');
    canonical.setAttribute('href', 'https://ailyt.in/it-services/automation-integrations');
    return () => { document.title = previousTitle; if (createdDescription) description.remove(); else description.setAttribute('content', previousDescription); if (createdCanonical) canonical.remove(); else canonical.setAttribute('href', previousCanonical); };
  }, []);

  const services = [
    ['01', 'Business Workflow Automation', 'Structure repeatable tasks around triggers, rules, actions, notifications and the systems people already use.'],
    ['02', 'API Integrations', 'Connect applications through requests, responses, authentication, validation and practical error handling.'],
    ['03', 'Application-to-Application Integration', 'Move information between websites, mobile applications, backend services and business systems where a connection is useful.'],
    ['04', 'Data Synchronization', 'Map fields, validate updates and coordinate information between a source system and a destination system.'],
    ['05', 'Form & Lead Automation', 'Route submitted information, create follow-up tasks and keep enquiry data moving through a defined process.'],
    ['06', 'Notification Automation', 'Trigger internal or customer-facing notifications when a relevant event or status change occurs.'],
    ['07', 'Reporting Automation', 'Collect, transform and consolidate data into repeatable reporting workflows where the sources support it.'],
    ['08', 'Approval & Follow-Up Workflows', 'Make ownership, conditions, reminders and next steps clearer without pretending every decision can be automated.'],
    ['09', 'Third-Party Integrations', 'Consider connections with external SaaS platforms and communication, payment or reporting systems as project requirements.'],
    ['10', 'Custom Automation Workflows', 'Combine APIs, data movement and business rules around a specific operational problem.']
  ];

  const workflow = [
    ['Business Process', 'Describe the manual work, handoff or repeated decision to understand first.'],
    ['Trigger', 'Identify the event that starts the workflow, such as a form submission or status change.'],
    ['Data', 'Define the information entering the process and the fields the next system needs.'],
    ['Rules / Conditions', 'Decide which cases follow which path and where human review remains important.'],
    ['Integration', 'Connect the relevant application, API, database or service.'],
    ['Action', 'Create the record, task, update or other next step the workflow requires.'],
    ['Notification', 'Tell the right person or system what happened and what needs attention.'],
    ['Monitoring', 'Check outcomes, failures and exceptions so the workflow can be improved.']
  ];

  const audiences = [
    ['Startups', 'Connect an early set of tools without making every workflow depend on manual copying.'],
    ['Small Businesses', 'Bring structure to enquiries, follow-up, reporting and recurring operational work.'],
    ['Operations Teams', 'Coordinate status changes, approvals, data movement and internal notifications.'],
    ['Sales Teams', 'Route leads, update records and create clear follow-up steps around incoming information.'],
    ['Customer Support Teams', 'Connect forms, status updates, assignments and communication workflows where appropriate.'],
    ['Companies Using Multiple Software Systems', 'Explore application integration when information is spread across different tools.'],
    ['Teams With Repetitive Manual Processes', 'Identify a focused process where automation can reduce unnecessary handoffs without removing useful judgement.']
  ];
  const faqs = [
    ['What is business automation?', 'Business automation uses software and connected systems to handle repeatable tasks or workflows with less manual intervention.'],
    ['What is workflow automation?', 'Workflow automation follows a defined path from a trigger through rules and actions to a result, notification or next step.'],
    ['What are business automation services?', 'They can include workflow design, API integration, application connections, data synchronization, notifications, reporting and custom process automation.'],
    ['What is API integration?', 'API integration allows different applications or systems to exchange information and trigger functions through defined requests and responses.'],
    ['Can AILYT connect existing software applications?', 'Yes. AILYT can discuss application and system integration around the APIs, data structures, authentication and business process involved.'],
    ['Can repetitive business processes be automated?', 'Often, selected repeatable steps can be automated. The right scope depends on the process, exceptions, data quality and where human review is needed.'],
    ['Can automation connect websites, apps and databases?', 'Yes. Websites, mobile applications, backend systems and databases can be considered as parts of an integration or workflow when the project supports it.'],
    ['How can I discuss an automation requirement with AILYT?', 'Share the current manual process, systems involved, data flow, triggers and desired actions through the IT Services contact page.']
  ];

  return (
    <main className="automation-integrations-page">
      <section className="automation-integrations-hero"><div className="automation-integrations-container automation-integrations-hero-grid"><div><span className="automation-integrations-kicker">AILYT TECHNOLOGIES · AUTOMATION &amp; INTEGRATIONS</span><h1>Business Automation &amp; Integration Services for Smarter Workflows</h1><p>AILYT helps businesses connect applications, automate repetitive tasks and build workflows that move information between systems with less manual intervention.</p><div className="automation-integrations-actions"><Link to="/it-services/contact" className="automation-integrations-primary">Discuss Your Automation Requirement</Link><Link to="/it-services" className="automation-integrations-secondary">Explore IT Services</Link></div></div><div className="automation-integrations-hero-panel"><div><strong>Connected Systems</strong><span>Bring applications, APIs and data flows into one understandable process.</span></div><div><strong>Clear Triggers</strong><span>Start workflows from events that matter to the business.</span></div><div><strong>Defined Actions</strong><span>Route information, update records and notify the right people.</span></div><div><strong>Visible Exceptions</strong><span>Monitor failures and keep human review where it adds value.</span></div></div></div></section>

      <section className="automation-integrations-section automation-integrations-definition"><div className="automation-integrations-container automation-integrations-two-column"><div><span className="automation-integrations-kicker">THE FOUNDATION</span><h2>What Is Business Automation?</h2></div><div><p>If you are asking <strong>what is business automation</strong>, it is the use of software and connected systems to handle repeatable tasks or workflows with less manual intervention.</p><p>Examples can include transferring form data, sending notifications, updating records, creating follow-up tasks, synchronizing information and triggering downstream actions. The useful starting point is the process, not the tool.</p></div></div></section>

      <section className="automation-integrations-section"><div className="automation-integrations-container automation-integrations-detail-grid"><article><span className="automation-integrations-kicker">WORKFLOW LOGIC</span><h2>What Is Workflow Automation?</h2><p>A workflow can be understood as <strong>Trigger</strong>, then <strong>Rules / Conditions</strong>, then <strong>Actions</strong>, followed by a result. For example, an enquiry may be submitted, stored, assigned to a team member, followed up and acknowledged.</p></article><article><span className="automation-integrations-kicker">SYSTEM CONNECTIVITY</span><h2>What Is API Integration?</h2><p>APIs allow different applications or systems to exchange information and trigger functions. Possible patterns include a mobile app connecting to a backend, a website sending data to a CRM, a form updating a database or a platform feeding a reporting system.</p><p>AILYT can discuss <strong>API integration services</strong> around authentication, data transfer, validation, request/response handling, errors and webhooks.</p></article></div></section>

      <section className="automation-integrations-section automation-integrations-alt"><div className="automation-integrations-container"><div className="automation-integrations-heading"><span className="automation-integrations-kicker">WHAT WE CAN SUPPORT</span><h2>Business Automation Services for Repeatable Work</h2></div><div className="automation-integrations-card-grid">{services.map(([number, title, description]) => <article className="automation-integrations-card" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="automation-integrations-section"><div className="automation-integrations-container automation-integrations-detail-grid"><article><span className="automation-integrations-kicker">PROCESS DESIGN</span><h2>Turn Repetitive Processes Into Structured Workflows</h2><p>Business process automation can support enquiry handling, follow-up, onboarding, data entry, status updates, alerts, approvals and recurring reporting. Not every process should be automated; the useful candidates are repeatable, clear and worth making more consistent.</p></article><article><span className="automation-integrations-kicker">API CONNECTIVITY</span><h2>Connect Applications Through APIs</h2><p>System integration services may involve REST APIs, authentication, data transfer, validation, error handling and webhooks. The aim is to connect a real business process without hiding important exceptions or ownership.</p></article><article><span className="automation-integrations-kicker">DATA MOVEMENT</span><h2>Keep Information Moving Between Systems</h2><p>Data synchronization can involve a source system, destination system, field mapping, validation, updates, duplicate handling and scheduled or event-driven transfers. The exact behaviour depends on the systems and data involved.</p></article><article><span className="automation-integrations-kicker">CONNECTED TOOLS</span><h2>Third-Party Integrations Around the Workflow</h2><p>Businesses may need to connect CRMs, payment systems, communication platforms, spreadsheets, websites, mobile applications, databases or external SaaS platforms. Each connection should be evaluated against the workflow and available interfaces.</p></article></div></section>

      <section className="automation-integrations-section automation-integrations-process"><div className="automation-integrations-container"><div className="automation-integrations-heading"><span className="automation-integrations-kicker">AUTOMATION WORKFLOW</span><h2>From Business Process to Monitored Result</h2></div><div className="automation-integrations-process-grid">{workflow.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="automation-integrations-section automation-integrations-webhook"><div className="automation-integrations-container"><div className="automation-integrations-heading"><span className="automation-integrations-kicker">EVENT-DRIVEN WORK</span><h2>When a Webhook Starts the Next Step</h2><p>A webhook flow can be understood as: Event Happens → Webhook Fires → Automation Receives Data → Rules Run → Next System Is Updated. This pattern can be useful when a system needs to react to an event rather than wait for a scheduled check.</p></div><div className="automation-integrations-webhook-flow"><span>Event Happens</span><b>→</b><span>Webhook Fires</span><b>→</b><span>Data Received</span><b>→</b><span>Rules Run</span><b>→</b><span>System Updated</span></div></div></section>

      <section className="automation-integrations-section"><div className="automation-integrations-container automation-integrations-two-column"><div><span className="automation-integrations-kicker">BEFORE AND AFTER</span><h2>Manual Process vs Structured Automation</h2></div><div className="automation-integrations-comparison"><article><h3>Manual Process</h3><ul><li>Repeated data entry</li><li>Switching between systems</li><li>Manual follow-up</li><li>Inconsistent handoffs</li><li>Repeated reporting tasks</li></ul></article><article><h3>Automated Workflow</h3><ul><li>Structured trigger</li><li>Defined data movement</li><li>Rules and conditions</li><li>Notifications</li><li>Traceable workflow</li></ul></article></div></div></section>

      <section className="automation-integrations-section automation-integrations-alt"><div className="automation-integrations-container"><div className="automation-integrations-heading"><span className="automation-integrations-kicker">PRACTICAL EXAMPLES</span><h2>Business Processes We Can Help Automate</h2></div><div className="automation-integrations-pill-grid">{['Lead Capture', 'Enquiry Routing', 'Customer Follow-Up', 'Email Notifications', 'WhatsApp Workflow Integration', 'Data Synchronization', 'Report Generation', 'Application Updates', 'API Workflows', 'Internal Notifications'].map((item) => <span key={item}>{item}</span>)}</div></div></section>

      <section className="automation-integrations-section automation-integrations-projects"><div className="automation-integrations-container automation-integrations-two-column"><div><span className="automation-integrations-kicker">CONNECTED SERVICE AREAS</span><h2>Automation Across Websites, Apps and Data</h2></div><div><p>Automation and integration work can support websites, web applications, mobile applications, backend systems and reporting workflows. Automation moves or processes data; analytics examines and interprets it.</p><div className="automation-integrations-inline-links"><Link to="/it-services/web-development">Web Development</Link><Link to="/it-services/mobile-app-development">Mobile App Development</Link><Link to="/it-services/data-analytics">Data Analytics</Link><Link to="/it-services/mvp-development">MVP Development</Link><Link to="/it-services/projects">View Projects</Link></div></div></div></section>

      <section className="automation-integrations-section"><div className="automation-integrations-container"><div className="automation-integrations-heading"><span className="automation-integrations-kicker">WHO WE SUPPORT</span><h2>Automation for Teams Managing Connected Work</h2></div><div className="automation-integrations-audience-grid">{audiences.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="automation-integrations-section automation-integrations-alt"><div className="automation-integrations-container automation-integrations-two-column"><div><span className="automation-integrations-kicker">WHY AILYT</span><h2>Process-First Integration Work</h2></div><div><p>These business automation services are shaped around a specific process, the systems involved and the exceptions that need to remain visible.</p><div className="automation-integrations-approach"><span>Process-First Approach</span><span>Practical Integrations</span><span>API Awareness</span><span>Clear Workflow Design</span><span>Incremental Automation</span><span>Testing &amp; Monitoring</span><span>Direct Collaboration</span></div></div></div></section>

      <section className="automation-integrations-section automation-integrations-faq"><div className="automation-integrations-container"><div className="automation-integrations-heading"><span className="automation-integrations-kicker">COMMON QUESTIONS</span><h2>Automation &amp; Integration FAQs</h2></div><div className="automation-integrations-faq-grid">{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></div></section>

      <section className="automation-integrations-learning"><div className="automation-integrations-container automation-integrations-learning-grid"><div><span className="automation-integrations-kicker">FOR STUDENTS &amp; ASPIRING DEVELOPERS</span><h2>Want to Understand How Software Systems Work Together?</h2><p>Learners interested in automation and integrations can build foundations through programming, APIs, backend development, Git/GitHub, databases, software workflows and project-based development. These are foundational pathways, not a dedicated automation or n8n certification course.</p></div><div className="automation-integrations-learning-options"><Link to="/learning" className="automation-integrations-learning-card"><strong>Explore Learning Programs</strong><span>Browse practical technology learning paths.</span></Link><Link to="/learning/internship-programs/tech-tracks" className="automation-integrations-learning-card"><strong>Explore Software Development Internship</strong><span>See focused project and technology tracks.</span></Link><Link to="/learning/internship-programs/tools-workflow" className="automation-integrations-learning-card"><strong>Development Tools &amp; Workflow</strong><span>Understand the process behind practical software work.</span></Link><Link to="/data-analyst-course-dehradun" className="automation-integrations-learning-link">Explore Data Analyst Program</Link></div></div></section>

      <section className="automation-integrations-final"><div className="automation-integrations-container"><h2>Have a Workflow You Want to Automate?</h2><p>Share the current manual process, systems involved, data flow, triggers, desired actions and integration requirements with AILYT.</p><div className="automation-integrations-actions"><Link to="/it-services/contact" className="automation-integrations-primary">Discuss Your Automation Requirement</Link><Link to="/it-services" className="automation-integrations-secondary">Explore IT Services</Link></div></div></section>
    </main>
  );
};

export default AutomationIntegrationsServices;
