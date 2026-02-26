import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Community.css';

const Community = () => {
  const confidencePathways = [
    {
      title: 'Spoken English',
      focus: 'Confidence',
      description: 'Not grammar'
    },
    {
      title: 'Confidence Building',
      focus: 'Confidence',
      description: 'Not grammar'
    },
    {
      title: 'Thinking on Feet',
      focus: 'Confidence',
      description: 'Not grammar'
    },
    {
      title: 'Constructive Feedback',
      focus: 'Confidence',
      description: 'Not grammar'
    },
    {
      title: 'Speak Without Fear',
      focus: 'Confidence',
      description: 'Not grammar'
    },
    {
      title: 'Roles + Rules',
      focus: 'Confidence',
      description: 'Not grammar'
    }
  ];

  const clubRoles = [
    {
      title: 'Session Host',
      description: 'Runs the meeting, introduces speakers, keeps energy positive, ensures time discipline'
    },
    {
      title: 'Prepared Speaker',
      description: 'Delivers a 3–5 minute speech aligned to the current level. Focus on clarity, not perfection'
    },
    {
      title: 'Quick Talk Leader',
      description: 'Runs impromptu speaking. Gives short prompts and encourages everyone (30–60 sec)'
    },
    {
      title: 'Time Keeper',
      description: 'Tracks time and signals Green (safe), Yellow (wrap up), Red (stop)'
    },
    {
      title: 'Feedback Coach',
      description: 'Highlights strengths first and gives only 1–2 improvement tips. Encouraging always'
    },
    {
      title: 'Word Watcher',
      description: 'Notes good vocabulary and common fillers like "uh, um, you know"'
    }
  ];

  const meetingFlow = [
    { segment: 'Welcome & Agenda', time: '5 min' },
    { segment: 'Prepared Speeches', time: '20 min' },
    { segment: 'Quick Talk (Impromptu)', time: '15 min' },
    { segment: 'Short Break', time: '5 min' },
    { segment: 'Feedback & Evaluations', time: '25 min' },
    { segment: 'Awards & Closing', time: '5 min' }
  ];

  const clubRules = [
    'Respect every speaker. No laughing at mistakes',
    'All feedback must be constructive and encouraging',
    'English only during speaking slots for proper practice',
    'Everyone speaks at least once to build confidence',
    'Keep phones on silent to avoid distractions',
    'Growth mindset over grammar obsession'
  ];

  return (
    <div className="community-page">
      {/* Hero Section */}
      <section className="community-hero">
        <div className="community-hero-content">
          <div className="community-hero-text">
            <h1>AILYT Speaking & Confidence Club</h1>
            <p>A free, fortnightly speaking forum where learners practice spoken English, build confidence, and learn to think on their feet in a friendly, beginner-safe environment</p>
            <div className="community-hero-ctas">
              <button className="cta-primary">Join the Club</button>
              <button className="cta-secondary">Learn More</button>
            </div>
          </div>
          <div className="community-hero-visual">
            <div className="hero-box hero-box-1"></div>
            <div className="hero-box hero-box-2"></div>
            <div className="hero-box hero-box-3"></div>
          </div>
        </div>
      </section>

      {/* Confidence Pathways */}
      <section id="community-overview" className="community-about">
        <div className="section-container">
          <h2>AILYT Confidence Pathway</h2>
          <p className="section-subtitle">Focus on confidence, not grammar. Build practical speaking skills through practice and supportive feedback</p>
          
          <div className="about-grid">
            {confidencePathways.map((pathway, index) => (
              <div key={index} className="about-card">
                <div className="about-card-icon">
                  <span>{index + 1}</span>
                </div>
                <h3>{pathway.title}</h3>
                <p><strong>Focus:</strong> {pathway.focus}</p>
                <p className="help-text">{pathway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Roles Section */}
      <section id="community-initiatives" className="community-initiatives">
        <div className="section-container">
          <h2>🎭 Club Roles</h2>
          <p className="section-subtitle">Every meeting works smoothly because members take simple, rotating roles</p>
          
          <div className="initiatives-grid">
            {clubRoles.map((role, index) => (
              <div key={index} className="initiative-card">
                <div className="initiative-header">
                  <h3>{role.title}</h3>
                </div>
                <p className="role-description">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Details */}
      <section id="community-members" className="community-members">
        <div className="section-container">
          <h2>Meeting Details & Structure</h2>
          <p className="section-subtitle">Frequency, duration, and standard meeting flow</p>
          
          <div className="meeting-details-grid">
            <div className="detail-card">
              <div className="detail-header">
                <h3>Meeting Frequency</h3>
              </div>
              <ul className="detail-list">
                <li><strong>Frequency:</strong> Fortnightly (once every 2 weeks)</li>
                <li><strong>Duration:</strong> 75–90 minutes</li>
                <li><strong>Mode:</strong> In-person at AILYT Learning Centre (hybrid later)</li>
              </ul>
            </div>

            <div className="detail-card">
              <div className="detail-header">
                <h3>Standard Meeting Flow (90 min)</h3>
              </div>
              <div className="meeting-table-wrapper">
                <table className="meeting-table">
                  <thead>
                    <tr>
                      <th>Segment</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {meetingFlow.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.segment}</td>
                        <td>{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club Rules Section */}
      <section id="community-values" className="community-about">
        <div className="section-container">
          <h2>Club Rules & Values</h2>
          <p className="section-subtitle">Principles that make our community safe, supportive, and effective</p>
          
          <div className="rules-grid">
            {clubRules.map((rule, index) => (
              <div key={index} className="rule-card">
                <div className="rule-icon">✓</div>
                <p>{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Purpose Section */}
      <section id="community-impact" className="community-features">
        <div className="section-container">
          <h2>Club Purpose & Benefits</h2>
          <p className="section-subtitle">What you'll gain from joining AILYT Speaking & Confidence Club</p>
          
          <div className="purpose-grid">
            <div className="purpose-card">
              <div className="purpose-icon">🗣️</div>
              <h3>Spoken English Practice</h3>
              <p>Regular opportunities to practice speaking English in a supportive environment with peer feedback</p>
            </div>
            <div className="purpose-card">
              <div className="purpose-icon">💪</div>
              <h3>Confidence Building</h3>
              <p>Overcome speaking anxiety and build self-assurance through consistent practice and encouragement</p>
            </div>
            <div className="purpose-card">
              <div className="purpose-icon">⚡</div>
              <h3>Think on Your Feet</h3>
              <p>Develop the ability to respond quickly and thoughtfully to impromptu speaking challenges</p>
            </div>
            <div className="purpose-card">
              <div className="purpose-icon">🤝</div>
              <h3>Supportive Feedback</h3>
              <p>Receive constructive, encouraging feedback focused on growth rather than criticism</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="community-contact" className="community-cta">
        <div className="section-container">
          <h2>Join the AILYT Speaking & Confidence Club</h2>
          <p>Want to participate in the next meeting? Send us your details and we'll share the schedule and speaking slots</p>
          <div className="cta-buttons">
            <button className="cta-primary">Register Now</button>
            <Link to="/contact" className="cta-secondary">Contact Us</Link>
          </div>
          
          <div className="contact-info mt-50">
            <h4>Meeting Location</h4>
            <p>AILYT Learning Centre, Dehradun</p>
            <h4 className="mt-30">Contact</h4>
            <p><a href="mailto:info@ailyt.in">info@ailyt.in</a></p>
            <p className="tip-text">💡 Tip: Mention your current level (Beginner / Intermediate) so we can guide you properly</p>
          </div>
        </div>
      </section>
      
      <a
        href="https://wa.me/8630611232?text=Hi%20AILYT%2C%20I%20would%20like%20to%20know%20more%20about%20the%20Speaking%20%26%20Confidence%20Club."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-whatsapp-btn"
        title="Chat with us on WhatsApp"
      >
        💬
      </a>
    </div>
  );
};

export default Community;



