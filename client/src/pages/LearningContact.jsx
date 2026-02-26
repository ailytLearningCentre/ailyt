import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learning.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const getFetchErrorMessage = (error, fallbackMessage) => {
  const message = String(error?.message || '').toLowerCase();
  const isNetworkError = error?.name === 'TypeError' || message.includes('failed to fetch');

  if (isNetworkError) {
    return `Cannot reach backend API at ${API_BASE_URL}. Please start server and verify CORS/API URL.`;
  }

  return error?.message || fallbackMessage || 'Unable to submit your enquiry right now.';
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
      <section className="learning-contact-hero">
        <div className="section-container">
          <div className="learning-contact-hero-content">
            <div className="learning-contact-hero-text">
              <span className="contact-kicker">Student Enquiry Desk</span>
              <h1>Connect With Us and Enroll With Confidence</h1>
              <p>
                Fill this enquiry form and our team will guide you to the best-fit course,
                batch timing, and learning path for your career goals.
              </p>
              <div className="contact-live-tags">
                <span>Response within 24 hours</span>
                <span>Course + internship guidance</span>
                <span>Beginner to advanced tracks</span>
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
              <Link to="/learning/courses" className="course-link">
                Explore Courses
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="learning-contact-section">
        <div className="section-container">
          <div className="learning-contact-grid">
            <aside className="learning-contact-sidepanel">
              <h2>Why Students Reach Out</h2>
              <p>
                From course confusion to career planning, we help you make a clear enrollment decision.
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
    </div>
  );
};

export default LearningContact;
