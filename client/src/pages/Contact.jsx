import React, { useState } from 'react';
import '../styles/Contact.css';

const FALLBACK_EMAIL = 'info@ailyt.com';
const WHATSAPP_API_BASE = 'https://api.callmebot.com/whatsapp.php';
const WHATSAPP_PHONE = process.env.REACT_APP_CALLMEBOT_PHONE || '';
const WHATSAPP_API_KEY = process.env.REACT_APP_CALLMEBOT_API_KEY || '';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const whatsappMessage = [
      'New lead from AILYT website',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${formData.subject}`,
      'Message:',
      formData.message
    ].join('\n');

    const mailSubject = `Website Lead: ${formData.subject}`;
    const mailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message
    ].join('\n');
    const mailtoUrl = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    let sentToWhatsapp = false;

    if (WHATSAPP_PHONE && WHATSAPP_API_KEY) {
      const whatsappApiUrl = `${WHATSAPP_API_BASE}?phone=${encodeURIComponent(WHATSAPP_PHONE)}&text=${encodeURIComponent(whatsappMessage)}&apikey=${encodeURIComponent(WHATSAPP_API_KEY)}`;

      try {
        const response = await fetch(whatsappApiUrl, { method: 'GET' });
        sentToWhatsapp = response.ok;
      } catch (error) {
        sentToWhatsapp = false;
      }
    }

    if (!sentToWhatsapp) {
      window.location.href = mailtoUrl;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">We'd love to hear from you. Get in touch with us today!</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>
                India & USA<br />
                Multiple Cities
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>
                info@ailyt.com<br />
                support@ailyt.com
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>
                +91 1234 567 890<br />
                Mon - Fri, 9am - 6pm IST
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>Chat Support</h3>
              <p>
                Live chat available<br />
                24/7 for quick queries
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! We'll be in touch soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;




