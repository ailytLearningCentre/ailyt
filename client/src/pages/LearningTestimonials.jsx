import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LearningTestimonials.css';

const testimonials = [
  {
    name: 'Student Name',
    photo: null,
    program: 'Data Analyst Program',
    category: 'Data Analyst',
    batch: 'Batch 2026',
    quote:
      'The learning process was practical and structured. I gained more confidence by working with Excel, dashboards and project-focused tasks.'
  },
  {
    name: 'Student Name',
    photo: null,
    program: 'Python Course',
    category: 'Python',
    batch: 'Batch 2026',
    quote:
      'The trainer guidance helped me understand coding logic better. Small assignments and guided practice made the learning more manageable.'
  },
  {
    name: 'Student Name',
    photo: null,
    program: 'Advanced Excel',
    category: 'Advanced Excel',
    batch: 'Batch 2025',
    quote:
      'Working through practical Excel exercises improved my understanding of formulas, reporting and business-style analysis tasks.'
  },
  {
    name: 'Student Name',
    photo: null,
    program: 'Power BI',
    category: 'Power BI',
    batch: 'Batch 2026',
    quote:
      'The dashboard work and review process helped me connect data handling with visual storytelling and practical reporting.'
  },
  {
    name: 'Student Name',
    photo: null,
    program: 'IGNOU BCA/MCA Support',
    category: 'IGNOU BCA/MCA',
    batch: 'Batch 2025',
    quote:
      'The support structure was useful for concept clearing, assignment practice and staying more consistent with academic work.'
  },
  {
    name: 'Student Name',
    photo: null,
    program: 'Internship Program',
    category: 'Internship',
    batch: 'Batch 2026',
    quote:
      'The internship experience helped me understand how practical software work is broken into tasks, reviews and improvement cycles.'
  }
];

const valuePoints = [
  'Practical Learning',
  'Trainer Guidance',
  'Hands-On Exercises',
  'Project Exposure',
  'Doubt Support',
  'Learning Environment'
];

const testimonialLabels = ['Data Analyst', 'Python', 'Advanced Excel', 'Power BI', 'IGNOU BCA/MCA', 'Internship'];

const faqs = [
  {
    question: 'What do students say about Ailyt Learning Centre?',
    answer:
      'Students often highlight practical learning, trainer support, project-oriented exercises and a more hands-on approach to understanding technical concepts.'
  },
  {
    question: 'Which courses are covered in student testimonials?',
    answer:
      'The current testimonial structure is organized around Data Analytics, Python, Advanced Excel, Power BI, BCA/MCA support and internship-related learning.'
  },
  {
    question: 'Does Ailyt provide practical project-based learning?',
    answer:
      'Yes. The learning approach encourages guided practice, tasks, exercises, assignments and project review to help learners apply concepts more confidently.'
  },
  {
    question: 'Can I speak with the Ailyt team before joining?',
    answer:
      'Yes. Students can contact Ailyt Learning Centre to ask about courses, batches, eligibility, learning style and the next available intake.'
  },
  {
    question: 'How can I enquire about the next batch?',
    answer:
      'Use the contact or enquiry page to send your learning goals and course interest, and the team will guide you on the next available option.'
  }
];

const LearningTestimonials = () => {
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
      'Student Reviews for IT Courses in Dehradun | Ailyt Learning Centre';

    description.setAttribute(
      'content',
      'Read genuine student testimonials and reviews from learners at Ailyt Learning Centre in Dehradun, including experiences with Data Analytics, Python, Excel, BCA/MCA support and internship programs.'
    );

    canonical.setAttribute('href', 'https://ailyt.in/learning/testimonials');

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
    <main className="learning-testimonials-page">
      <section className="learning-testimonials-hero">
        <div className="learning-testimonials-container learning-testimonials-hero-grid">
          <div className="learning-testimonials-hero-copy">
            <span className="learning-testimonials-kicker">
              AILYT LEARNING CENTRE · STUDENT STORIES
            </span>

            <h1>What Our Students Say About Learning at Ailyt</h1>

            <p>
              Students at Ailyt Learning Centre often describe practical learning,
              supportive trainer guidance, hands-on exercises and a clearer understanding of
              how concepts connect to real project work and career growth.
            </p>

            <div className="learning-testimonials-hero-actions">
              <Link to="/learning/courses" className="learning-testimonials-primary-btn">
                Explore Courses
              </Link>

              <Link to="/learning/contact" className="learning-testimonials-secondary-btn">
                Contact / Enquiry
              </Link>
            </div>
          </div>

          <div className="learning-testimonials-hero-panel">
            <div className="learning-testimonials-stat">
              <strong>Practical Learning</strong>
              <span>Students value learning that includes hands-on work and guided practice.</span>
            </div>

            <div className="learning-testimonials-stat">
              <strong>Trainer Support</strong>
              <span>Concept explanation and doubt-solving help learners stay consistent.</span>
            </div>

            <div className="learning-testimonials-stat">
              <strong>Project Exposure</strong>
              <span>Students appreciate the link between learning tasks and applied work.</span>
            </div>

            <div className="learning-testimonials-stat">
              <strong>Learning Environment</strong>
              <span>A focused and encouraging setting helps learners build confidence.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-testimonials-section">
  <div className="learning-testimonials-container">
    <div className="learning-testimonials-section-heading">
      <span className="learning-testimonials-kicker">STUDENT STORIES</span>
      <h2>Featured Student Feedback</h2>
    </div>

    <div className="learning-testimonials-grid">
      {testimonials.map((item) => (
        <article
          className="learning-testimonial-card"
          key={`${item.name}-${item.program}`}
        >
          <div className="learning-testimonial-photo-wrap">
            {item.photo ? (
              <img
                src={item.photo}
                alt={`${item.name} - ${item.program}`}
                className="learning-testimonial-photo"
              />
            ) : (
              <div className="learning-testimonial-avatar">
                {item.name?.charAt(0)?.toUpperCase() || 'S'}
              </div>
            )}
          </div>

          <div className="learning-testimonial-content">
            <div className="learning-testimonial-meta">
              <div>
                <h3>{item.name}</h3>
                <p className="learning-testimonial-program">
                  {item.program}
                </p>
              </div>

              {item.batch && (
                <span className="learning-testimonial-batch">
                  {item.batch}
                </span>
              )}
            </div>

            {item.category && (
              <div className="learning-testimonial-label">
                {item.category}
              </div>
            )}

            <p className="learning-testimonial-quote">
              “{item.quote}”
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section className="learning-testimonials-section learning-testimonials-soft-panel">
        <div className="learning-testimonials-container">
          <div className="learning-testimonials-section-heading">
            <span className="learning-testimonials-kicker">CATEGORIES</span>
            <h2>Testimonials by Learning Focus</h2>
          </div>

          <div className="learning-testimonials-category-row">
            {testimonialLabels.map((item) => (
              <span key={item} className="learning-testimonials-pill">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-testimonials-section">
        <div className="learning-testimonials-container">
          <div className="learning-testimonials-section-heading">
            <span className="learning-testimonials-kicker">WHAT STUDENTS VALUE</span>
            <h2>What Learners Appreciate Most</h2>
          </div>

          <div className="learning-testimonials-value-grid">
            {valuePoints.map((item) => (
              <div key={item} className="learning-testimonials-value-card">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-testimonials-section learning-testimonials-soft-panel">
        <div className="learning-testimonials-container learning-testimonials-internship-box">
          <div>
            <span className="learning-testimonials-kicker">INTERNSHIP FEEDBACK</span>
            <h2>Student Experience with Internship Learning</h2>
          </div>

          <p>
            Learners often describe internship work as a useful way to understand how practical
            coding, review cycles and project tasks connect in everyday development work.
          </p>

          <div className="learning-testimonials-inline-links">
            <Link to="/learning/internship-programs">Internship Program</Link>
            <Link to="/learning/interns">Our Interns</Link>
          </div>
        </div>
      </section>

      <section className="learning-testimonials-section learning-testimonials-soft-panel">
        <div className="learning-testimonials-container">
          <div className="learning-testimonials-section-heading">
            <span className="learning-testimonials-kicker">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="learning-testimonials-faq-list">
            {faqs.map((item) => (
              <div className="learning-testimonials-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-testimonials-section">
        <div className="learning-testimonials-container learning-testimonials-final-cta">
          <span className="learning-testimonials-kicker">START YOUR JOURNEY</span>
          <h2>Ready to Start Your Learning Journey?</h2>

          <div className="learning-testimonials-hero-actions">
            <Link to="/learning/courses" className="learning-testimonials-primary-btn">
              Explore Courses
            </Link>

            <Link to="/learning/contact" className="learning-testimonials-secondary-btn">
              Contact / Enquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearningTestimonials;
