import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learning.css';
import '../styles/LearningContactSEO.css';

const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '');

const getFetchErrorMessage = (error, fallbackMessage) => {
  const message = String(error?.message || '').toLowerCase();
  const isNetworkError = error?.name === 'TypeError' || message.includes('failed to fetch');

  if (isNetworkError) {
    return 'We could not submit your enquiry right now. Please try again or contact us on WhatsApp.';
  }

  return fallbackMessage || 'We could not submit your enquiry right now. Please try again or contact us on WhatsApp.';
};

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  courseInterest: '',
  learningMode: '',
  startPlan: '',
  qualification: '',
  message: '',
  consent: false
};

const contactReasons = [
  {
    title: 'Personal Counselling',
    description: 'Get the right course roadmap based on your current skills and goals.'
  },
  {
    title: 'Flexible Learning Plans',
    description: 'Choose classroom or hybrid support that matches your weekly schedule.'
  },
  {
    title: 'Career-first Guidance',
    description: 'Understand how each course connects with internships and job roles.'
  }
];

const nextSteps = [
  'Our team reviews your enquiry and learning goals.',
  'A counsellor connects with you for a quick discussion.',
  'You receive a recommended course and enrollment plan.'
];

const LearningContact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

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

    document.title = 'Contact AILYT Learning Centre in Dehradun | Course Enquiry';
    description.setAttribute(
      'content',
      'Contact AILYT Learning Centre in Dehradun for course counselling, batch timings, fees and enrollment guidance for Data Analytics, BCA/MCA support, computer courses and IT training programs.'
    );
    canonical.setAttribute('href', 'https://ailyt.in/learning/contact');

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

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value
    }));

    setSubmitError('');
    setSubmitSuccess('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess('');

    try {
      if (!API_BASE_URL) {
        throw new Error('The enquiry service is not configured.');
      }

      const response = await fetch(`${API_BASE_URL}/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      let result = {};
      try {
        result = await response.json();
      } catch (parseError) {
        result = {};
      }

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your enquiry right now.');
      }

      const enquiryId = result?.data?.enquiryId || '';
      const enquiryRef = enquiryId ? `Ref: ${String(enquiryId).slice(-6).toUpperCase()}` : '';
      setSubmitSuccess(
        enquiryRef
          ? `Thank you. Your enquiry was submitted successfully. ${enquiryRef}`
          : 'Thank you. Your enquiry was submitted successfully.'
      );
      setFormData(initialFormData);
    } catch (error) {
      setSubmitError(getFetchErrorMessage(error, 'Unable to submit your enquiry right now.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="learning-contact-page">
      <section className="learning-contact-hero learning-contact-seo-hero">
        <div className="section-container">
          <div className="learning-contact-hero-content">
            <div className="learning-contact-hero-text">
              <span className="contact-kicker">AILYT LEARNING CENTRE · DEHRADUN</span>
              <h1>Contact AILYT Learning Centre in Dehradun</h1>
              <p>
                Connect with us and enroll with confidence. Ask about course selection, current batch timings, learning mode, fees, practical training, Data Analytics, BCA/MCA support, computer courses or internships.
              </p>
              <div className="contact-live-tags">
                <span>Course guidance</span>
                <span>Batch and fee guidance</span>
                <span>Classroom or hybrid support</span>
              </div>
            </div>

            <aside className="learning-contact-hero-card">
              <h3>What Happens Next</h3>
              <ul className="contact-next-steps">
                {nextSteps.map((step, index) => (
                  <li key={step}>
                    <span>{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ul>
              <Link to="/learning" className="course-link">
                Explore Learning Programs
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="learning-contact-section">
        <div className="section-container">
          <div className="learning-contact-grid">
            <aside className="learning-contact-sidepanel">
                <h2>Course Guidance for Your Next Step</h2>
              <p>
                AILYT Learning Centre in Dehradun helps students, graduates and working learners compare learning programs, understand course expectations and make a clear enrollment decision.
              </p>

              <div className="learning-contact-reason-list">
                {contactReasons.map((reason) => (
                  <div key={reason.title} className="learning-contact-reason-card">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                ))}
              </div>
            </aside>

            <form className="learning-enroll-form" onSubmit={handleSubmit}>
              <div className="learning-enroll-form-header">
                <h2>Student Contact Form</h2>
                <p>Share your details and we will connect you with enquiry support.</p>
              </div>

              <div className="learning-enroll-form-grid">
                <div className="learning-form-field">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="learning-form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>

                <div className="learning-form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="learning-form-field">
                  <label htmlFor="courseInterest">Course Interest</label>
                  <select
                    id="courseInterest"
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="spoken-english">Spoken English</option>
                    <option value="confidence-building">Confidence Building</option>
                    <option value="interview-skills">Interview Skills</option>
                    <option value="ccc">CCC</option>
                    <option value="o-level">O-Level</option>
                    <option value="basic-computers">Basic Computers</option>
                    <option value="excel">Excel</option>
                    <option value="python">Python</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="tableau">Tableau</option>
                    <option value="ignou-bca-mca-support">IGNOU BCA / MCA Support</option>
                    <option value="software-development-internship">Software Development Internship</option>
                  </select>
                </div>

                <div className="learning-form-field">
                  <label htmlFor="learningMode">Preferred Learning Mode</label>
                  <select
                    id="learningMode"
                    name="learningMode"
                    value={formData.learningMode}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select mode</option>
                    <option value="classroom">Classroom</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="online-support">Online with mentor support</option>
                  </select>
                </div>

                <div className="learning-form-field">
                  <label htmlFor="startPlan">When do you want to start?</label>
                  <select
                    id="startPlan"
                    name="startPlan"
                    value={formData.startPlan}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select timeline</option>
                    <option value="immediately">Immediately</option>
                    <option value="within-2-weeks">Within 2 weeks</option>
                    <option value="within-1-month">Within 1 month</option>
                    <option value="just-exploring">Just exploring options</option>
                  </select>
                </div>

                <div className="learning-form-field">
                  <label htmlFor="qualification">Current Qualification</label>
                  <input
                    id="qualification"
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="Class 12, Graduate, Working professional, etc."
                    required
                  />
                </div>

                <div className="learning-form-field learning-form-field-full">
                  <label htmlFor="message">Your Goal / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you want to learn and your career target."
                    rows="4"
                    required
                  />
                </div>
              </div>

              <label className="learning-form-consent">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                I agree to be contacted by phone, email, or WhatsApp for enrollment guidance.
              </label>

              <button
                type="submit"
                className="cta-primary learning-enroll-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Enquiry...' : 'Submit Enrollment Enquiry'}
              </button>

              {submitSuccess && (
                <p className="learning-enroll-success">
                  {submitSuccess}
                </p>
              )}

              {submitError && <p className="learning-enroll-error">{submitError}</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="learning-contact-seo-section">
        <div className="section-container learning-contact-seo-two-column">
          <div>
            <span className="contact-kicker">PERSONAL GUIDANCE</span>
            <h2>Course Counselling &amp; IT Training Enquiries</h2>
          </div>
          <div>
            <p>AILYT supports students, graduates and working learners looking for practical IT training, Data Analytics, programming, computer courses, BCA/MCA support and internship opportunities.</p>
            <p>Ask about program selection, course fees, classroom learning, hybrid learning and the next available batch before you decide.</p>
            <a className="learning-contact-whatsapp" href="https://wa.me/918630611232" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="learning-contact-seo-section learning-contact-explore">
        <div className="section-container">
          <div className="learning-contact-seo-heading"><span className="contact-kicker">PLAN YOUR ENQUIRY</span><h2>Explore Before You Enquire</h2></div>
          <div className="learning-contact-explore-grid">
            <Link to="/data-analyst-course-dehradun">Data Analyst Program</Link>
            <Link to="/learning/courses/ignou-bca-mca">BCA + MCA Professional Track</Link>
            <Link to="/learning/internship-programs">Software Development Internship</Link>
            <Link to="/learning/about#methodology">Teaching Methodology</Link>
            <Link to="/learning/infrastructure">Learning Infrastructure</Link>
            <Link to="/learning">Learning Centre</Link>
          </div>
        </div>
      </section>

      <section className="learning-contact-seo-section learning-contact-faq">
        <div className="section-container">
          <div className="learning-contact-seo-heading"><span className="contact-kicker">QUESTIONS BEFORE YOU START</span><h2>Course Enquiry FAQs</h2></div>
          <div className="learning-contact-faq-grid">
            <article><h3>How can I contact AILYT Learning Centre in Dehradun?</h3><p>Submit the enquiry form, use WhatsApp, or contact the Learning Centre team through the details shared on the contact page.</p></article>
            <article><h3>Can I ask about Data Analytics courses?</h3><p>Yes. You can ask about course content, learning level, batch timings, fees and the practical work included in the Data Analytics program.</p></article>
            <article><h3>Can BCA and MCA students contact AILYT for support?</h3><p>Yes. BCA and MCA learners can enquire about academic support, programming practice, projects and practical learning guidance.</p></article>
            <article><h3>Can I ask about computer courses and IT training?</h3><p>Yes. The team can explain available computer courses, programming options, practical IT training and suitable learning paths.</p></article>
            <article><h3>Does AILYT offer classroom and hybrid learning?</h3><p>Available learning modes depend on the program and batch. Ask the team about current classroom, hybrid or mentor-supported options.</p></article>
            <article><h3>How quickly will AILYT respond to my enquiry?</h3><p>The team reviews submitted details and responds as soon as possible during working hours. WhatsApp is also available for a direct follow-up.</p></article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningContact;
