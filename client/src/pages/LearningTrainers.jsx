import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LearningTrainers.css';

const trainers = [
  {
    name: 'Trainer Name',
    photo: null,
    role: 'Data Analytics Trainer',
    expertise: ['Data Analytics', 'Excel', 'Power BI', 'Dashboards', 'Reporting'],
    courses: ['Data Analyst Program', 'Advanced Excel', 'Power BI'],
    background:
      'Verified trainer profile details are pending publication. This card will be updated with official mentor information once Ailyt confirms the profile.'
  },
  {
    name: 'Trainer Name',
    photo: null,
    role: 'Python & Programming Trainer',
    expertise: ['Python', 'Programming Logic', 'Assignments', 'Problem Solving', 'Projects'],
    courses: ['Python', 'BCA/MCA Learning Support', 'Project Guidance'],
    background:
      'Profile details are not yet published. Ailyt will add confirmed trainer information after verification, subject to the stated teaching assignment.'
  },
  {
    name: 'Trainer Name',
    photo: null,
    role: 'BCA/MCA Learning Support Faculty',
    expertise: ['BCA/MCA Support', 'Concept Clarity', 'Programming', 'Reviews', 'Mentoring'],
    courses: ['IGNOU BCA/MCA Program', 'Academic Support', 'Project Reviews'],
    background:
      'This profile is intentionally left as a placeholder until official faculty information becomes available for publication.'
  }
];

const expertiseAreas = [
  'Data Analytics',
  'Python',
  'Advanced Excel',
  'Tableau',
  'Power BI',
  'BCA/MCA Learning Support'
];

const faqItems = [
  {
    question: 'Who teaches at Ailyt Learning Centre?',
    answer:
      'Ailyt Learning Centre works with subject-focused trainers and mentors who guide students through practical learning, assignments and project-based review.'
  },
  {
    question: 'What subjects do Ailyt trainers teach?',
    answer:
      'Subjects supported by the current learning programs include Data Analytics, Python, Advanced Excel, Tableau, Power BI and BCA/MCA learning support.'
  },
  {
    question: 'Do trainers provide practical project guidance?',
    answer:
      'Yes. The learning approach includes guided practice, assignments, project exercises and review feedback to strengthen application-based learning.'
  },
  {
    question: 'Can students get doubt-solving support?',
    answer:
      'Students can seek clarification through course instruction, workshop interaction, assignments and mentor review as part of the learning process.'
  },
  {
    question: 'How can I enquire about a course?',
    answer:
      'You can contact Ailyt Learning Centre through the enquiry form or the contact page to ask about current tracks, batches and eligibility.'
  }
];

const LearningTrainers = () => {
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

    document.title = 'IT Trainers in Dehradun | Ailyt Learning Centre';

    description.setAttribute(
      'content',
      'Meet the trainers at Ailyt Learning Centre in Dehradun and explore their expertise in Data Analytics, Python, Advanced Excel, Tableau, Power BI and BCA/MCA learning support.'
    );

    canonical.setAttribute('href', 'https://ailyt.in/learning/trainers');

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

  return (
    <main className="learning-trainers-page">
      <section className="learning-trainers-hero">
        <div className="learning-trainers-container learning-trainers-hero-grid">
          <div className="learning-trainers-hero-copy">
            <span className="learning-trainers-kicker">
              AILYT LEARNING CENTRE · TRAINERS
            </span>

            <h1>Meet Our Trainers at Ailyt Learning Centre</h1>

            <p>
              Our trainers support practical, mentor-led learning across key IT and analytics
              subjects. The focus is on clear concept understanding, guided practice,
              assignments, tool-based learning and review support for students pursuing
              stronger technical confidence.
            </p>

            <div className="learning-trainers-hero-actions">
              <Link to="/learning/courses" className="learning-trainers-primary-btn">
                Explore Courses
              </Link>

              <Link to="/learning/contact" className="learning-trainers-secondary-btn">
                Contact / Enquiry
              </Link>
            </div>
          </div>

          <div className="learning-trainers-hero-panel">
            <div className="learning-trainers-stat">
              <strong>Mentor-Led</strong>
              <span>Concept support with guided lessons and regular learning review.</span>
            </div>

            <div className="learning-trainers-stat">
              <strong>Practical Learning</strong>
              <span>Hands-on work, exercises and application-based practice.</span>
            </div>

            <div className="learning-trainers-stat">
              <strong>Project Guidance</strong>
              <span>Assignments and project review help strengthen real implementation skills.</span>
            </div>

            <div className="learning-trainers-stat">
              <strong>Subject Support</strong>
              <span>Course guidance across analytics, Python, Excel, Tableau and more.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-trainers-section">
        <div className="learning-trainers-container">
          <div className="learning-trainers-section-heading">
            <span className="learning-trainers-kicker">MEET THE TEAM</span>
            <h2>Meet Our Trainers</h2>
          </div>

          <div className="learning-trainers-grid">
            {trainers.map((trainer) => (
              <article className="learning-trainer-card" key={`${trainer.role}-${trainer.name}`}>
                <div className="learning-trainer-photo-wrap">
                  {trainer.photo ? (
                    <img src={trainer.photo} alt={trainer.name} className="learning-trainer-photo" />
                  ) : (
                    <div className="learning-trainer-avatar">T</div>
                  )}
                </div>

                <div className="learning-trainer-content">
                  <h3>{trainer.name}</h3>
                  <p className="learning-trainer-role">{trainer.role}</p>

                  <div className="learning-trainer-expertise">
                    {trainer.expertise.map((item) => (
                      <span key={`${trainer.name}-${item}`}>{item}</span>
                    ))}
                  </div>

                  <div className="learning-trainer-course-box">
                    <span>Courses Taught</span>
                    <p>{trainer.courses.join(' · ')}</p>
                  </div>

                  <p className="learning-trainer-background">{trainer.background}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-trainers-section learning-trainers-soft-panel">
        <div className="learning-trainers-container">
          <div className="learning-trainers-section-heading">
            <span className="learning-trainers-kicker">AREAS OF EXPERTISE</span>
            <h2>Subjects Taught at Ailyt</h2>
          </div>

          <div className="learning-trainers-tag-grid">
            {expertiseAreas.map((item) => (
              <span key={item} className="learning-trainers-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-trainers-section">
        <div className="learning-trainers-container learning-trainers-two-column">
          <div>
            <span className="learning-trainers-kicker">HOW WE TEACH</span>
            <h2>Concept Understanding → Guided Practice → Practical Exercises → Projects → Review &amp; Feedback</h2>
          </div>

          <div>
            <p>
              Ailyt’s learning approach is designed to help students move from concept clarity
              to guided practice and project-based application. Trainers explain core ideas,
              support practice sessions, review work and help learners improve through feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="learning-trainers-section learning-trainers-soft-panel">
        <div className="learning-trainers-container">
          <div className="learning-trainers-section-heading">
            <span className="learning-trainers-kicker">PRACTICAL LEARNING</span>
            <h2>Support That Builds Practical Confidence</h2>
          </div>

          <div className="learning-trainers-practical-grid">
            <div className="learning-trainers-practical-card">
              <h3>Hands-on Exercises</h3>
              <p>Students work through guided tasks to strengthen understanding and tool usage.</p>
            </div>

            <div className="learning-trainers-practical-card">
              <h3>Software &amp; Tools Practice</h3>
              <p>Practical sessions help learners apply real workflows in Excel, Python, Tableau and Power BI.</p>
            </div>

            <div className="learning-trainers-practical-card">
              <h3>Assignments &amp; Projects</h3>
              <p>Short exercise-based learning and project work help connect theory to application.</p>
            </div>

            <div className="learning-trainers-practical-card">
              <h3>Doubt Solving &amp; Review</h3>
              <p>Mentor feedback helps learners improve accuracy, understanding and presentation quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-trainers-section">
        <div className="learning-trainers-container">
          <div className="learning-trainers-section-heading">
            <span className="learning-trainers-kicker">COURSES SUPPORTED</span>
            <h2>Learning Tracks Supported by Ailyt Trainers</h2>
          </div>

          <div className="learning-trainers-course-links">
            <Link to="/data-analyst-course-dehradun">Data Analyst Program</Link>
            <Link to="/learning/courses#excel">Advanced Excel</Link>
            <Link to="/learning/courses#python">Python</Link>
            <Link to="/learning/courses#tableau">Tableau</Link>
            <Link to="/learning/courses#power-bi">Power BI</Link>
            <Link to="/learning/courses/ignou-bca-mca">IGNOU BCA/MCA Program</Link>
          </div>
        </div>
      </section>

      <section className="learning-trainers-section learning-trainers-soft-panel">
        <div className="learning-trainers-container">
          <div className="learning-trainers-section-heading">
            <span className="learning-trainers-kicker">FAQ</span>
            <h2>Common Questions</h2>
          </div>

          <div className="learning-trainers-faq-list">
            {faqItems.map((item) => (
              <div className="learning-trainers-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-trainers-section">
        <div className="learning-trainers-container learning-trainers-final-cta">
          <span className="learning-trainers-kicker">LEARN WITH GUIDANCE</span>
          <h2>Learn with Practical Guidance at Ailyt Learning Centre</h2>

          <div className="learning-trainers-hero-actions">
            <Link to="/learning/courses" className="learning-trainers-primary-btn">
              Explore Courses
            </Link>

            <Link to="/learning/contact" className="learning-trainers-secondary-btn">
              Contact / Enquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearningTrainers;
