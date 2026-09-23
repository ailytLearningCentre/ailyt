import React, { useCallback, useEffect, useState } from 'react';
import '../styles/DataAnalystLanding.css';
import logo from '../assets/images/AILYTLOGOPNG.png';

const WHATSAPP_NUMBER = '91863061232';
const DATA_ANALYST_LEAD_ENDPOINT = process.env.REACT_APP_DATA_ANALYST_LEAD_ENDPOINT || '';
// Place the finalized PDF at public/downloads/ailyt-data-analyst-syllabus.pdf before enabling downloads.
const SYLLABUS_PATH = '/downloads/ailyt-data-analyst-syllabus.pdf';
const courseMessage = 'Hi AILYT, I am interested in the 6-Month Data Analyst Course. Please share the upcoming batch, fee and counselling details.';
const counsellingMessage = 'Hi AILYT, I would like to book a free counselling session for the 6-Month Data Analyst Course.';

const whatsappUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const emptyLead = {
  firstName: '', lastName: '', email: '', phone: '', city: '', state: '', currentStatus: '',
  qualification: '', preferredMode: '', message: '', consent: false, honeypot: '',
};

const statusOptions = ['Student', 'Fresher', 'Working Professional', 'Career Switcher', 'Business Owner / Professional', 'Other'];
const qualificationOptions = ['Class 12', 'Diploma', 'BCA', 'MCA', 'BSc', 'BCom', 'BBA', 'MBA', 'BTech / BE', 'Other'];
const modeOptions = ['Classroom - Dehradun', 'Online', 'Not Sure'];

const submitDataAnalystLead = async (leadType, formData) => {
  if (!DATA_ANALYST_LEAD_ENDPOINT) return { ok: false, reason: 'not-configured' };
  const { honeypot, ...leadData } = formData;
  const response = await fetch(DATA_ANALYST_LEAD_ENDPOINT, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source: 'data-analyst-landing-page', leadType, ...leadData, pageUrl: window.location.href, timestamp: new Date().toISOString() }),
  });
  if (!response.ok) throw new Error('Lead submission failed');
  return { ok: true };
};

const highlights = [
  ['6 Months', 'Comprehensive Learning', '01'],
  ['24 Weeks', 'Structured Curriculum', '02'],
  ['144+ Hours', 'Instructor-Led Training', '03'],
  ['6+ Projects', 'Hands-On Portfolio', '04'],
  ['Beginner Friendly', 'Start From Fundamentals', '05'],
  ['Certificate', 'On Successful Completion', '06'],
];

const audiences = [
  ['Students & Freshers', 'Build a practical foundation alongside your studies.'],
  ['Graduates', 'BCA, MCA, BSc, BCom, BBA, MBA, Engineering and other graduates.'],
  ['Working Professionals', 'Add an analytical toolkit to your current business or technology role.'],
  ['Career Switchers', 'Move toward data work with a structured, beginner-friendly path.'],
  ['Business Professionals', 'Turn everyday business questions into useful insights.'],
];

const whyAnalytics = [
  ['Data-Driven Decision Making', 'Learn to turn business data into clear, defensible decisions.'],
  ['Skills Used Across Industries', 'Analytics supports teams in sales, marketing, finance, HR and operations.'],
  ['Business + Technology', 'Combine commercial context with tools that help teams work with data.'],
  ['Transferable Analytical Skills', 'Practice asking better questions, finding patterns and communicating evidence.'],
];

const learningModules = [
  { number: '01', title: 'Excel & Business Analytics', topics: ['Advanced Excel', 'XLOOKUP', 'INDEX / MATCH', 'Pivot Tables', 'Pivot Charts', 'Power Query', 'Data Cleaning', 'Dashboards'] },
  { number: '02', title: 'SQL & Databases', topics: ['SELECT', 'WHERE', 'GROUP BY', 'HAVING', 'Joins', 'Subqueries', 'CASE', 'CTEs', 'Window Functions', 'Business Queries'] },
  { number: '03', title: 'Power BI & Business Intelligence', topics: ['Power Query', 'Data Transformation', 'Data Modelling', 'Relationships', 'Star Schema', 'DAX', 'Interactive Dashboards', 'Power BI Service Concepts'] },
  { number: '04', title: 'Python for Data Analytics', topics: ['Python Fundamentals', 'NumPy', 'Pandas', 'Data Cleaning', 'Data Manipulation', 'EDA', 'Matplotlib', 'Seaborn', 'Plotly Basics'] },
  { number: '05', title: 'Statistics for Data Analysts', topics: ['Mean', 'Median', 'Mode', 'Variance', 'Standard Deviation', 'Probability', 'Correlation', 'Sampling', 'Confidence Intervals', 'Hypothesis Testing', 'A/B Testing Fundamentals'] },
  { number: '06', title: 'AI-Powered Analytics', topics: ['ChatGPT', 'Copilot Concepts', 'AI-assisted Excel', 'AI-assisted SQL', 'AI-assisted Python', 'Debugging', 'Insight Generation', 'Executive Summaries', 'Responsible AI'] },
];

const tools = [
  ['Microsoft Excel', 'core'], ['SQL', 'core'], ['MySQL', 'core'], ['Power BI', 'core'], ['Python', 'core'],
  ['Power Query', 'support'], ['DAX', 'support'], ['Pandas', 'support'], ['NumPy', 'support'], ['Jupyter Notebook', 'support'], ['Google Colab', 'support'], ['Git', 'support'], ['GitHub', 'support'], ['Kaggle', 'support'], ['ChatGPT', 'support'], ['Microsoft Copilot', 'support'], ['Tableau Basics', 'support'],
];

const roadmap = [
  ['01', 'Month 1', 'Excel & Business Analytics', ['Data Analytics Fundamentals', 'Excel', 'Advanced Excel', 'Data Cleaning', 'Power Query', 'Pivot Tables', 'Dashboards']],
  ['02', 'Month 2', 'SQL & Databases', ['Database Fundamentals', 'SQL Basics', 'Aggregation', 'Joins', 'Subqueries', 'CASE', 'CTEs', 'Window Functions']],
  ['03', 'Month 3', 'Power BI & Business Intelligence', ['Power Query', 'Data Modelling', 'Star Schema', 'DAX', 'Time Intelligence', 'Interactive Dashboards', 'Power BI Service']],
  ['04', 'Month 4', 'Python & Statistics', ['Python', 'NumPy', 'Pandas', 'Data Cleaning', 'EDA', 'Statistics', 'Visualization']],
  ['05', 'Month 5', 'Modern & Business Analytics', ['CSV / JSON', 'APIs', 'Public Datasets', 'AI-assisted Analytics', 'Sales Analytics', 'Marketing Analytics', 'Finance Analytics', 'Customer Analytics', 'HR Analytics']],
  ['06', 'Month 6', 'Portfolio & Career Preparation', ['Git', 'GitHub', 'Portfolio', 'Capstone Project', 'Resume Preparation', 'LinkedIn', 'SQL Interview Practice', 'Power BI Interview Preparation', 'Business Cases', 'Capstone Presentation']],
];

const curriculum = [
  ['Module 01', 'Data Analytics Foundations & Excel', 'Analytics thinking, spreadsheets, formulas, lookups, cleaning, pivots, Power Query and dashboards.'],
  ['Module 02', 'SQL & Database Analytics', 'Relational data, querying, aggregations, joins, subqueries, CASE, CTEs, windows and business questions.'],
  ['Module 03', 'Power BI & Business Intelligence', 'Data transformation, modelling, relationships, star schema, DAX, time intelligence and interactive reporting.'],
  ['Module 04', 'Python for Data Analytics', 'Python foundations, NumPy, Pandas, data manipulation, cleaning, EDA and visual storytelling.'],
  ['Module 05', 'Statistics & Exploratory Data Analysis', 'Descriptive statistics, probability, sampling, confidence intervals, hypothesis testing and A/B testing fundamentals.'],
  ['Module 06', 'AI-Powered Analytics', 'ChatGPT and Copilot concepts, AI-assisted workflows, debugging, insight generation and responsible AI.'],
  ['Module 07', 'Business Analytics', 'Sales, marketing, finance, HR and customer analytics using realistic business scenarios and public datasets.'],
  ['Module 08', 'Projects & Capstone', 'From problem definition and cleaning to analysis, dashboards, recommendations and a final presentation.'],
  ['Module 09', 'Portfolio & Career Preparation', 'GitHub, portfolio structure, resume, LinkedIn, SQL and Power BI interview practice and business cases.'],
];

const projects = [
  ['01', 'Excel Sales Performance Dashboard', ['Excel', 'Pivot Tables', 'Power Query'], 'Track performance in a clear, decision-ready dashboard.'],
  ['02', 'E-Commerce SQL Analysis', ['SQL', 'MySQL'], 'Explore revenue, customers, products, repeat customers, categories and monthly performance.'],
  ['03', 'Power BI Executive Dashboard', ['Power BI', 'Power Query', 'DAX'], 'Build KPI views for revenue, profit, YoY growth, products and regions.'],
  ['04', 'Python Customer Behaviour Analysis', ['Python', 'Pandas', 'Matplotlib / Seaborn'], 'Clean, explore and visualize customer behaviour with code.'],
  ['05', 'Business Analytics Project', ['Sales', 'Marketing', 'Finance', 'HR', 'Retail'], 'Choose one domain and answer a practical business question with evidence.'],
  ['06', 'Final End-to-End Capstone', ['SQL', 'Python', 'Dashboard', 'Presentation'], 'Define the problem, clean data, analyze, recommend and present the complete story.'],
];

const learningMethod = [
  ['Learn', 'Instructor explains the concept.'], ['Practice', 'Guided hands-on exercises.'], ['Apply', 'Independent exercises and assignments.'], ['Build', 'Mini projects and business cases.'], ['Review', 'Trainer feedback and corrections.'], ['Present', 'Explain findings, dashboards and recommendations.'],
];

const reasons = ['Instructor-Led Classes', 'Hands-On Computer Lab', 'Small Batch Learning', 'Practical Business Projects', 'Doubt Solving & Project Reviews', 'Portfolio & Interview Preparation'];
const portfolioItems = ['Project Portfolio', 'GitHub Profile', 'Data Analyst Resume', 'LinkedIn Profile', 'SQL Interview Practice', 'Power BI Interview Preparation', 'Business Case Practice', 'Capstone Presentation'];
const faqs = [
  ['Is this course suitable for beginners?', 'Yes. The curriculum starts with fundamentals and progresses toward intermediate projects.'],
  ['Do I need programming knowledge before joining?', 'No. Basic computer knowledge is the stated prerequisite; Python is introduced during the course.'],
  ['Can students from commerce or non-technical backgrounds join?', 'Yes. Graduates from commerce, management and other backgrounds can join.'],
  ['Which tools will I learn?', 'Excel, SQL, MySQL, Power BI, Python, statistics and AI-assisted analytics tools are included.'],
  ['Is Python included?', 'Yes. Python, NumPy, Pandas, EDA and visualization are covered.'],
  ['Will I work on projects?', 'Yes. The course includes mini projects, business cases and an end-to-end capstone.'],
  ['What is the course duration?', 'The program is designed for 6 months or 24 weeks, with 144+ instructor-led hours.'],
  ['Will I receive a certificate?', 'A certificate is provided on successful completion.'],
  ['Is classroom training available in Dehradun?', 'The learning centre is in Dehradun. Confirm the upcoming classroom batch with AILYT.'],
  ['Are online classes available?', 'The delivery mode is to be confirmed by AILYT for the relevant batch.'],
  ['What are the batch timings?', 'Batch timings will be provided by AILYT when the batch is confirmed.'],
  ['What is the course fee?', 'Contact AILYT for current fee details.'],
  ['Is career guidance included?', 'Portfolio, resume, LinkedIn, interview practice and business case preparation are included.'],
  ['Will I build a portfolio?', 'Yes. Projects, GitHub and portfolio preparation are part of the program.'],
  ['What kind of capstone project will I complete?', 'You will work through a business problem, data cleaning, analysis, dashboard, insights, recommendations and presentation.'],
];

const WhatsAppLink = ({ children, message = courseMessage, className = 'da-btn da-btn-primary' }) => <a className={className} href={whatsappUrl(message)} target="_blank" rel="noreferrer">{children}</a>;
const LeadButton = ({ children, onClick, className = 'da-btn da-btn-primary' }) => <button type="button" className={className} onClick={onClick}>{children}</button>;

function LeadModal({ type, onClose, onSuccess, isClosing = false }) {
  const isSyllabus = type === 'syllabus-download';
  const [formData, setFormData] = useState(emptyLead);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = React.useRef(null);
  const firstFieldRef = React.useRef(null);

  useEffect(() => {
    const previousActive = document.activeElement;
    const focusable = () => modalRef.current?.querySelectorAll('button, input, select, textarea, a[href]') || [];
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const nodes = Array.from(focusable());
      if (!nodes.length) return;
      const first = nodes[0]; const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();
    document.addEventListener('keydown', handleKeyDown);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', handleKeyDown); previousActive?.focus(); };
  }, [onClose]);

  const updateField = (event) => {
    const { name, value, type: inputType, checked } = event.target;
    setFormData((previous) => ({ ...previous, [name]: inputType === 'checkbox' ? checked : value }));
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.honeypot) return;
    if (!formData.firstName || !formData.lastName || !formData.phone || (!isSyllabus && (!formData.city || !formData.currentStatus)) || (isSyllabus && !formData.email)) return setError('Please complete all required fields.');
    if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) return setError('Enter a valid 10-digit Indian mobile number.');
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return setError('Enter a valid email address.');
    if (!formData.consent) return setError('Please agree to course-related contact before continuing.');
    setIsSubmitting(true); setError('');
    try {
      const result = await submitDataAnalystLead(type, { ...formData, phone: `+91${formData.phone.replace(/\D/g, '')}` });
      if (!result.ok) { setError('Lead submission endpoint is not configured yet.'); return; }
      onSuccess();
    } catch (submissionError) { setError('We could not send your request. Please try again.'); }
    finally { setIsSubmitting(false); }
  };

  const select = (name, label, options, required = false) => <label className="da-field"><span>{label}{required && ' *'}</span><select name={name} value={formData[name]} onChange={updateField} required={required}><option value="">Select</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
  return <div className={`da-modal-backdrop${isClosing ? ' is-closing' : ''}`} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="da-lead-modal" role="dialog" aria-modal="true" aria-labelledby="da-modal-title" ref={modalRef}><button type="button" className="da-modal-close" onClick={onClose} aria-label="Close counselling form">×</button><div className="da-modal-heading"><p className="da-kicker">AILYT LEARNING CENTRE</p><h2 id="da-modal-title">{isSyllabus ? 'Download the Complete Data Analyst Syllabus' : 'Free Data Analyst Career Counselling'}</h2><p>{isSyllabus ? 'Enter your details to receive the detailed 6-month course curriculum.' : 'Share your details and the AILYT team will contact you regarding the course, upcoming batches and counselling.'}</p></div><form onSubmit={handleSubmit} noValidate><div className="da-form-grid"><label className="da-field"><span>First Name *</span><input ref={firstFieldRef} name="firstName" value={formData.firstName} onChange={updateField} required autoComplete="given-name" /></label><label className="da-field"><span>Last Name *</span><input name="lastName" value={formData.lastName} onChange={updateField} required autoComplete="family-name" /></label><label className="da-field"><span>Email Address{isSyllabus && ' *'}</span><input type="email" name="email" value={formData.email} onChange={updateField} required={isSyllabus} autoComplete="email" /></label><label className="da-field"><span>Phone / WhatsApp Number *</span><div className="da-phone-field"><b>+91</b><input name="phone" inputMode="numeric" maxLength="10" value={formData.phone} onChange={updateField} required autoComplete="tel-national" /></div></label><label className="da-field"><span>City{!isSyllabus && ' *'}</span><input name="city" value={formData.city} onChange={updateField} required={!isSyllabus} autoComplete="address-level2" /></label>{!isSyllabus && <label className="da-field"><span>State</span><input name="state" value={formData.state} onChange={updateField} autoComplete="address-level1" /></label>}{select('currentStatus', 'Current Status', isSyllabus ? statusOptions.filter((option) => option !== 'Business Owner / Professional') : statusOptions, !isSyllabus)}{!isSyllabus && select('qualification', 'Highest Qualification', qualificationOptions)}{!isSyllabus && select('preferredMode', 'Preferred Learning Mode', modeOptions)}{!isSyllabus && <label className="da-field da-field-wide"><span>Message / Question</span><textarea name="message" value={formData.message} onChange={updateField} rows="3" /></label>}</div><input className="da-honeypot" name="honeypot" tabIndex="-1" autoComplete="off" value={formData.honeypot} onChange={updateField} aria-hidden="true" /><label className="da-consent"><input type="checkbox" name="consent" checked={formData.consent} onChange={updateField} /><span>I agree to be contacted by AILYT via phone, WhatsApp or email regarding this course and related counselling information.</span></label>{error && <p className="da-form-error" role="alert">{error}</p>}<button className="da-btn da-btn-primary da-submit-btn" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : isSyllabus ? 'Get My Syllabus' : 'Request Free Counselling'}</button></form></section></div>;
}

function DataAnalystLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [modalClosing, setModalClosing] = useState(false);
  const [automaticShows, setAutomaticShows] = useState(() => Number(sessionStorage.getItem('da-counselling-shows') || 0));
  const [hasSubmitted, setHasSubmitted] = useState(() => sessionStorage.getItem('da-lead-submitted') === 'true');

  const closeModal = useCallback(() => {
    if (!modalType || modalClosing) return;
    setModalClosing(true);
    window.setTimeout(() => {
      setModalType(null);
      setModalClosing(false);
    }, 220);
  }, [modalClosing, modalType]);

  const openCounselling = useCallback(() => {
    setModalClosing(false);
    setModalType('counselling');
  }, []);

  const openSyllabus = useCallback(() => {
    setModalClosing(false);
    setModalType('syllabus-download');
  }, []);

  const handleLeadSuccess = useCallback(() => {
    setHasSubmitted(true); sessionStorage.setItem('da-lead-submitted', 'true');
    if (modalType === 'syllabus-download') window.open(SYLLABUS_PATH, '_blank', 'noopener,noreferrer');
    closeModal();
  }, [closeModal, modalType]);

  useEffect(() => {
    if (hasSubmitted || automaticShows >= 3 || modalType) return undefined;
    const showTimer = window.setTimeout(() => {
      setAutomaticShows((current) => { const next = current + 1; sessionStorage.setItem('da-counselling-shows', String(next)); return next; });
      setModalType('counselling');
    }, automaticShows === 0 ? 30000 : 120000);
    return () => window.clearTimeout(showTimer);
  }, [automaticShows, hasSubmitted, modalType]);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description ? description.getAttribute('content') : null;
    document.title = 'Data Analyst Course in Dehradun | Excel, SQL, Power BI & Python | AILYT';
    if (description) description.setAttribute('content', "Join AILYT's 6-month Data Analyst Course in Dehradun and learn Excel, SQL, Power BI, Python, Statistics, AI tools and real-world analytics projects.");
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <div className="da-landing">
      <main id="top">
        <section className="da-hero" id="course">
          <div className="da-container da-hero-grid">
            <div className="da-hero-copy">
              <p className="da-eyebrow">AILYT Data Analyst Course <span>• Dehradun</span></p>
              <h1>Become a Job-Ready <em>Data Analyst</em> in 6 Months</h1>
              <p className="da-hero-text">Master Excel, SQL, Power BI, Python, Statistics and AI-assisted analytics through instructor-led training, hands-on practice, real business projects and portfolio development.</p>
              <div className="da-chip-row">{['6 Months', '24 Weeks', '144+ Instructor-Led Hours', '6+ Projects', 'Beginner Friendly'].map((chip) => <span className="da-chip" key={chip}>{chip}</span>)}</div>
              <div className="da-action-row"><LeadButton onClick={openCounselling}>Book Free Counselling <span aria-hidden="true">↗</span></LeadButton><WhatsAppLink className="da-btn da-btn-ghost" message={courseMessage}>Get Course Details on WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink><LeadButton onClick={openSyllabus} className="da-btn da-btn-outline-light">Download Syllabus</LeadButton></div>
              <p className="da-note"><span className="da-pulse" /> Next step: speak with the AILYT team about upcoming batches.</p>
            </div>
            <div className="da-hero-visual" aria-label="Analytics dashboard preview">
              <div className="da-dashboard-top"><span className="da-window-dots">● ● ●</span><span>ailyt / analytics_lab</span><span>•••</span></div>
              <div className="da-dashboard-body"><div className="da-dash-kicker">WEEKLY PERFORMANCE <span>+18.4%</span></div><div className="da-dash-value">₹ 84.6L</div><div className="da-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="da-dash-footer"><span>Revenue trend</span><span>Jan&nbsp;&nbsp; Feb&nbsp;&nbsp; Mar&nbsp;&nbsp; Apr&nbsp;&nbsp; May</span></div></div>
              <div className="da-floating-card da-floating-one"><strong>1,248</strong><span>active customers</span></div><div className="da-floating-card da-floating-two"><span className="da-mini-bar" />SQL query complete</div>
            </div>
          </div>
        </section>

        <section className="da-highlights"><div className="da-container"><div className="da-highlight-grid">{highlights.map(([value, label, number]) => <article className="da-highlight" key={value}><span className="da-index">{number}</span><strong>{value}</strong><span>{label}</span></article>)}</div></div></section>

        <section className="da-section da-section-light"><div className="da-container"><div className="da-section-heading"><p className="da-kicker">YOUR STARTING POINT</p><h2>Is This Course Right for You?</h2><p>One practical path for people who want to understand data and build useful work with it.</p></div><div className="da-audience-grid">{audiences.map(([title, text]) => <article className="da-soft-card" key={title}><span className="da-card-mark">↗</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="da-section da-deep-section"><div className="da-container"><div className="da-section-heading da-heading-light"><p className="da-kicker">THE BIG PICTURE</p><h2>Why Data Analytics?</h2><p>Build a skill set that connects curiosity, business context and technology.</p></div><div className="da-four-grid">{whyAnalytics.map(([title, text], index) => <article className="da-outline-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="da-section da-section-light" id="learn"><div className="da-container"><div className="da-section-heading"><p className="da-kicker">THE TOOLKIT</p><h2>What You Will Learn</h2><p>From the first clean spreadsheet to a confident business presentation.</p></div><div className="da-learning-grid">{learningModules.map((module) => <article className="da-learning-card" key={module.number}><div className="da-module-number">{module.number}</div><h3>{module.title}</h3><div className="da-topic-list">{module.topics.map((topic) => <span key={topic}>{topic}</span>)}</div></article>)}</div></div></section>

        <section className="da-section da-tools-section"><div className="da-container"><div className="da-section-heading da-heading-light"><p className="da-kicker">YOUR WORKBENCH</p><h2>Tools You'll Work With</h2><p>Core tools get the time and depth they deserve, supported by a modern analyst toolkit.</p></div><div className="da-tools-wrap"><div className="da-core-tools">{tools.filter(([, type]) => type === 'core').map(([tool]) => <span key={tool}>{tool}</span>)}</div><div className="da-support-tools">{tools.filter(([, type]) => type === 'support').map(([tool]) => <span key={tool}>{tool}</span>)}</div></div></div></section>

        <section className="da-section da-section-light" id="roadmap"><div className="da-container"><div className="da-section-heading"><p className="da-kicker">A CLEAR SIX-MONTH ARC</p><h2>Learning Roadmap</h2><p>Each month adds a new layer, ending with work you can show.</p></div><div className="da-roadmap">{roadmap.map(([number, month, title, topics]) => <article className="da-roadmap-row" key={month}><div className="da-roadmap-marker"><span>{number}</span></div><div className="da-roadmap-content"><p className="da-month">{month}</p><h3>{title}</h3><div className="da-roadmap-topics">{topics.map((topic) => <span key={topic}>{topic}</span>)}</div></div></article>)}</div></div></section>

        <section className="da-section da-curriculum" id="curriculum"><div className="da-container da-narrow-container"><div className="da-section-heading da-heading-light"><p className="da-kicker">GO DEEPER</p><h2>Detailed Curriculum</h2><p>Open a module to see the learning focus. Everything stays compact until you need the detail.</p></div><div className="da-accordion">{curriculum.map(([number, title, description], index) => <div className={`da-accordion-item ${openFaq === `module-${index}` ? 'is-open' : ''}`} key={number}><button type="button" aria-expanded={openFaq === `module-${index}`} onClick={() => setOpenFaq(openFaq === `module-${index}` ? null : `module-${index}`)}><span><b>{number}</b>{title}</span><i aria-hidden="true">+</i></button>{openFaq === `module-${index}` && <div className="da-accordion-panel"><p>{description}</p></div>}</div>)}</div><div className="da-syllabus-strip"><div><p className="da-kicker">FREE COURSE GUIDE</p><h3>Download the Complete 6-Month Data Analyst Syllabus</h3><p>See the month-by-month curriculum, tools, projects and learning journey before you enrol.</p><ul><li>24-Week Learning Roadmap</li><li>Complete Tools & Curriculum</li><li>Projects & Capstone Overview</li></ul></div><LeadButton onClick={openSyllabus} className="da-btn da-btn-primary">Download Free Syllabus <span aria-hidden="true">↗</span></LeadButton></div></div></section>

        <section className="da-section da-section-light" id="projects"><div className="da-container"><div className="da-section-heading"><p className="da-kicker">MAKE IT REAL</p><h2>Don't Just Learn Tools. Build With Them.</h2><p>Every project is a chance to practice the full analyst workflow and create portfolio-ready evidence.</p></div><div className="da-project-grid">{projects.map(([number, title, tags, text]) => <article className="da-project-card" key={title}><div className="da-project-screen"><span>{number}</span><div className="da-placeholder-lines"><i /><i /><i /></div><small>SCREENSHOT SPACE</small></div><div className="da-project-copy"><h3>{title}</h3><p>{text}</p><div className="da-tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>

        <section className="da-section da-method"><div className="da-container"><div className="da-section-heading"><p className="da-kicker">THE PRACTICAL LOOP</p><h2>A Practical Learning Method</h2></div><div className="da-method-grid">{learningMethod.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>{index < learningMethod.length - 1 && <b aria-hidden="true">→</b>}</article>)}</div></div></section>

        <section className="da-section da-section-light" id="why-ailyt"><div className="da-container"><div className="da-section-heading"><p className="da-kicker">THE AILYT DIFFERENCE</p><h2>Why Learn Data Analytics at AILYT?</h2><p>A focused learning environment where understanding the work matters as much as using the tool.</p></div><div className="da-reasons-grid">{reasons.map((reason, index) => <article className="da-reason" key={reason}><span>0{index + 1}</span><h3>{reason}</h3></article>)}</div></div></section>

        <section className="da-section da-centre-section"><div className="da-container da-centre-grid"><div><p className="da-kicker">THE PLACE TO PRACTICE</p><h2>Learn. Practice. Build.</h2><p>Practical classroom-based learning at AILYT Learning Centre, Dehradun.</p><div className="da-centre-details"><span>AILYT Learning Centre</span><span>6-Karanpur, Dehradun</span><span>Computer lab • Smart classroom</span></div></div><div className="da-centre-placeholder" aria-label="Learning centre image placeholder"><span>AILYT LEARNING CENTRE</span><strong>Future classroom photography</strong><small>Real lab and classroom images will be added here.</small></div></div></section>

        {/* Replace these trainer placeholders with confirmed AILYT profile data before publishing. */}
        <section className="da-section da-section-light"><div className="da-container da-mentor-grid"><div className="da-mentor-placeholder"><span>PROFILE PHOTO</span></div><div><p className="da-kicker">MEET YOUR GUIDE</p><h2>Trainer / Mentor</h2><p className="da-mentor-lead">The mentor profile will be updated with confirmed information before the next batch is announced.</p><div className="da-mentor-facts"><span><b>Trainer Name</b>Placeholder</span><span><b>Designation</b>Placeholder</span><span><b>Experience</b>Placeholder</span><span><b>Specialization</b>Placeholder</span><span><b>Skills</b>Placeholder</span><span><b>LinkedIn</b>Placeholder</span></div></div></div></section>

        <section className="da-section da-glance"><div className="da-container"><div className="da-section-heading da-heading-light"><p className="da-kicker">THE ESSENTIALS</p><h2>Course at a Glance</h2></div><div className="da-glance-grid">{[['Duration', '6 Months'], ['Program Length', '24 Weeks'], ['Instructor-Led Training', '144+ Hours'], ['Level', 'Beginner to Intermediate'], ['Location', 'AILYT Learning Centre, Dehradun'], ['Prerequisites', 'Basic computer knowledge'], ['Certificate', 'On successful completion'], ['Mode', 'Placeholder until confirmed'], ['Batch Timing', 'Placeholder until confirmed'], ['Fee', 'Contact AILYT for current fee details']].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>

        <section className="da-section da-section-light"><div className="da-container"><div className="da-section-heading"><p className="da-kicker">SHOW YOUR WORK</p><h2>Graduate With More Than a Certificate</h2><p>Learn → Build → Showcase. Leave with a body of work that explains what you can do.</p></div><div className="da-portfolio-grid">{portfolioItems.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></div></section>

        <section className="da-section da-work-section"><div className="da-container"><div className="da-section-heading da-heading-light"><p className="da-kicker">REAL WORK, WHEN AVAILABLE</p><h2>Student Work & Learning Experience</h2><p>Genuine project, dashboard, portfolio and classroom imagery will be added as it becomes available.</p></div><div className="da-work-grid">{['Project screenshots', 'Dashboard screenshots', 'Portfolio screenshots', 'Classroom photographs'].map((label) => <div className="da-work-placeholder" key={label}><span>IMAGE PLACEHOLDER</span><strong>{label}</strong></div>)}</div></div></section>

        <section className="da-section da-section-light" id="faqs"><div className="da-container da-narrow-container"><div className="da-section-heading"><p className="da-kicker">GOOD QUESTIONS</p><h2>Frequently Asked Questions</h2></div><div className="da-accordion">{faqs.map(([question, answer], index) => <div className={`da-accordion-item ${openFaq === `faq-${index}` ? 'is-open' : ''}`} key={question}><button type="button" aria-expanded={openFaq === `faq-${index}`} onClick={() => setOpenFaq(openFaq === `faq-${index}` ? null : `faq-${index}`)}><span>{question}</span><i aria-hidden="true">+</i></button>{openFaq === `faq-${index}` && <div className="da-accordion-panel"><p>{answer}</p></div>}</div>)}</div></div></section>

        <section className="da-final-cta"><div className="da-container da-final-inner"><div><p className="da-kicker">YOUR NEXT CHAPTER STARTS HERE</p><h2>Ready to Start Your Data Analytics Journey?</h2><p>Speak with the AILYT team to understand the curriculum, upcoming batches and course structure.</p></div><div className="da-action-row"><LeadButton onClick={openCounselling}>Book Free Counselling <span aria-hidden="true">↗</span></LeadButton><LeadButton onClick={openSyllabus} className="da-btn da-btn-light">Download Syllabus <span aria-hidden="true">↗</span></LeadButton><WhatsAppLink className="da-btn da-btn-light" message={courseMessage}>Chat on WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink></div><div className="da-final-location"><strong>AILYT Learning Centre</strong><span>Dehradun</span></div></div></section>
      </main>

      <footer className="da-footer"><div className="da-container da-footer-inner"><a href="#top" className="da-brand"><img src={logo} alt="AILYT" /></a><p>Practical learning for a changing world.</p><div><a href="mailto:info@ailyt.com">info@ailyt.com</a><a href="tel:+918360611232">+91 8360611232</a></div><small>© 2026 Ailyt. All rights reserved.</small></div></footer>
      <div className="da-mobile-cta"><LeadButton onClick={openCounselling}>Book Free Counselling</LeadButton><WhatsAppLink message={courseMessage} className="da-btn da-btn-whatsapp">WhatsApp</WhatsAppLink></div>
      {modalType && <LeadModal type={modalType} onClose={closeModal} onSuccess={handleLeadSuccess} isClosing={modalClosing} />}
    </div>
  );
}

export default DataAnalystLanding;
