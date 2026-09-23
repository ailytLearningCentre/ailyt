import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import internsData from '../data/internsData';
import '../styles/LearningInterns.css';

const workAreas = [
  {
    title: 'Coding & Development',
    description:
      'Interns work on practical coding exercises, user-facing features and workflow-based development tasks.'
  },
  {
    title: 'Project Work',
    description:
      'Assignments are shaped around building and improving functional software solutions with real usage scenarios.'
  },
  {
    title: 'Git & GitHub',
    description:
      'Teams learn version control, branching, collaboration, issue tracking and cleaner project workflows.'
  },
  {
    title: 'APIs & Integration',
    description:
      'Students practice connecting interfaces, services and backend logic through hands-on application work.'
  },
  {
    title: 'Testing & Debugging',
    description:
      'Interns review output, identify issues and improve reliability through structured debugging practice.'
  },
  {
    title: 'Documentation',
    description:
      'Clear project notes, implementation records and presentations strengthen communication and technical understanding.'
  }
];

const projectExposurePoints = [
  'Frontend work and interface improvements',
  'Backend logic and data handling',
  'API and service integration',
  'Database and application workflows',
  'Testing, debugging and refinement',
  'Documentation and presentation practice'
];

const technicalPractice = [
  'Technical Practice',
  'Version Control',
  'Problem Solving',
  'Team Collaboration',
  'Documentation',
  'Project Communication'
];

const faqs = [
  {
    question: 'What do interns work on at Ailyt Learning Centre?',
    answer:
      'They work on coding tasks, application features, project assignments, debugging, documentation and review activities that mirror practical software development workflows.'
  },
  {
    question: 'Who can apply for the internship program?',
    answer:
      'Ailyt internship batches are usually open to students and learners who are building technical skills in software development, web applications or related project work.'
  },
  {
    question: 'Do interns work on practical projects?',
    answer:
      'Yes. Interns are guided through practical project tasks where they learn to work with requirements, implementation, testing and project communication.'
  },
  {
    question: 'Does Ailyt provide internship certificates?',
    answer:
      'Eligible interns may receive an Ailyt internship certificate after completing the applicable internship requirements and verification steps.'
  },
  {
    question: 'How can I verify an internship certificate?',
    answer:
      'A verification route is available for internship records, and Ailyt can also confirm details through the current internship process and communication channels.'
  },
  {
    question: 'How can I apply for the next internship batch?',
    answer:
      'Students can explore the current internship program and contact Ailyt Learning Centre for eligibility, schedule, track availability and application details.'
  }
];

const formatProjectSummary = (intern) => {
  const firstProject = intern.projects?.[0];

  if (!firstProject) {
    return 'Worked on practical software development tasks, feature implementation and project review during internship training.';
  }

  const description = firstProject.description || '';
  const shortSentence = description.split('. ')[0];

  if (shortSentence && shortSentence.length <= 120) {
    return `${shortSentence}.`;
  }

  return `Worked on ${firstProject.title} and related project tasks, contributing to implementation, review and practical software development experience.`;
};

const LearningInterns = () => {
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
      'Our Interns | Software Development Students | Ailyt Learning Centre';

    description.setAttribute(
      'content',
      'Meet interns from Ailyt Learning Centre and explore concise student profiles, technical skills, project exposure, internship work and practical software development experience.'
    );

    canonical.setAttribute('href', 'https://ailyt.in/learning/interns');

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
    <main className="learning-interns-page">
      <section className="learning-interns-hero">
        <div className="learning-interns-container learning-interns-hero-grid">
          <div className="learning-interns-hero-copy">
            <span className="learning-interns-kicker">
              AILYT LEARNING CENTRE · INTERNSHIP
            </span>

            <h1>Meet Our Interns &amp; Student Developers</h1>

            <p>
              At Ailyt Learning Centre, interns build practical software skills through
              assignments, coding, project tasks, reviews and documentation. These are
              Software Development Interns at Ailyt Learning Centre learning by solving
              real problems, improving their workflows and contributing to applied project work.
            </p>

            <div className="learning-interns-hero-actions">
              <Link
                to="/learning/internship-programs"
                className="learning-interns-primary-btn"
              >
                Explore Internship Program
              </Link>

              <Link
                to="/learning/contact"
                className="learning-interns-secondary-btn"
              >
                Apply / Enquire
              </Link>
            </div>
          </div>

          <div className="learning-interns-hero-panel">
            <div className="learning-interns-stat">
              <strong>Practical Work</strong>
              <span>Coding, implementation and guided project development.</span>
            </div>

            <div className="learning-interns-stat">
              <strong>Git Workflow</strong>
              <span>Version control, review and collaborative project habits.</span>
            </div>

            <div className="learning-interns-stat">
              <strong>Project Exposure</strong>
              <span>App features, APIs and tasks relevant to software development.</span>
            </div>

            <div className="learning-interns-stat">
              <strong>Professional Growth</strong>
              <span>Documentation, presentation and continuous improvement.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-interns-section">
        <div className="learning-interns-container">
          <div className="learning-interns-section-heading">
            <span className="learning-interns-kicker">LEARNING APPROACH</span>
            <h2>Learning by Building, Reviewing &amp; Improving</h2>
            <p>
              Interns develop professional habits by moving through requirements,
              implementation, debugging, review and documentation. The goal is to
              strengthen practical software development exposure while building
              structured project confidence.
            </p>
          </div>
        </div>
      </section>

     <section className="learning-interns-section learning-interns-grid-section">
  <div className="learning-interns-container">
    <div className="learning-interns-section-heading learning-interns-inline-heading">
      <span className="learning-interns-kicker">OUR INTERNS</span>
      <h2>Meet Our Interns</h2>
      <p>
        Meet some of the learners who have gained practical exposure through
        projects, coding tasks and guided internship work at Ailyt Learning Centre.
      </p>
    </div>

    <div className="learning-interns-grid">
      {internsData.map((intern) => (
        <article
          className="learning-intern-card learning-intern-card-compact"
          key={intern.internId || intern.slug}
        >
          <div className="learning-intern-photo-wrap learning-intern-photo-wrap-small">
            {intern.photo ? (
              <img
                src={intern.photo}
                alt={`${intern.name} profile`}
                className="learning-intern-photo learning-intern-photo-small"
              />
            ) : (
              <div className="learning-intern-avatar learning-intern-avatar-small">
                {intern.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <div className="learning-intern-content learning-intern-content-compact">
            <h3>{intern.name}</h3>

            {intern.role && (
              <p className="learning-intern-role">
                {intern.role}
              </p>
            )}

            <div className="learning-intern-skills learning-intern-skills-compact">
              {(intern.skills || []).slice(0, 3).map((skill) => (
                <span key={`${intern.slug}-${skill}`}>
                  {skill}
                </span>
              ))}
            </div>

            <p className="learning-intern-summary">
              {formatProjectSummary(intern)}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section className="learning-interns-section learning-interns-soft-panel">
        <div className="learning-interns-container">
          <div className="learning-interns-section-heading">
            <span className="learning-interns-kicker">WHAT INTERNS WORK ON</span>
            <h2>What Interns Work On</h2>
          </div>

          <div className="learning-interns-work-grid">
            {workAreas.map((item) => (
              <div className="learning-interns-work-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-interns-section">
        <div className="learning-interns-container learning-interns-two-column">
          <div>
            <span className="learning-interns-kicker">PROJECT EXPOSURE</span>
            <h2>From Learning Tasks to Practical Projects</h2>
          </div>

          <div>
            <p>
              Students in the internship program may gain exposure to frontend work,
              backend logic, APIs, database usage, dashboard tasks and practical software
              workflows. The exact experience will vary by project, batch and technical track.
            </p>
            <ul className="learning-interns-check-list">
              {projectExposurePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="learning-interns-section learning-interns-soft-panel">
        <div className="learning-interns-container">
          <div className="learning-interns-section-heading">
            <span className="learning-interns-kicker">SKILLS &amp; PRACTICE</span>
            <h2>Professional Skills That Support Real Work</h2>
          </div>

          <div className="learning-interns-skill-pills">
            {technicalPractice.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-interns-section">
        <div className="learning-interns-container learning-interns-certificate-box">
          <div>
            <span className="learning-interns-kicker">INTERNSHIP COMPLETION</span>
            <h2>Internship Completion &amp; Verification</h2>
          </div>

          <p>
            Eligible interns may receive an Ailyt internship certificate after completing the
            applicable internship requirements. Verified records can be checked through the
            internship verification pathway and related project records.
          </p>

          <Link to="/verify-intern/8F3K2A91" className="learning-interns-primary-btn small-btn">
            View Verification Record
          </Link>
        </div>
      </section>

      <section className="learning-interns-section learning-interns-soft-panel">
        <div className="learning-interns-container">
          <div className="learning-interns-section-heading">
            <span className="learning-interns-kicker">PREVIOUS BATCHES</span>
            <h2>Previous Internship Batches</h2>
          </div>

          <div className="learning-interns-batch-card">
            <div className="learning-interns-batch-photo">
              <img src={internsData[0].photo} alt="2026 Ailyt internship cohort" />
            </div>

            <div className="learning-interns-batch-content">
              <span className="learning-interns-batch-label">Batch 2026</span>
              <h3>Software Development Internship</h3>
              <p>
                The current internship cohort includes students working on practical software
                development tasks, project-based learning and structured technical review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-interns-section">
        <div className="learning-interns-container">
          <div className="learning-interns-section-heading">
            <span className="learning-interns-kicker">TRANSPARENCY</span>
            <h2>Profiles shown on this page highlight selected internship participation and practical project exposure at Ailyt Learning Centre.</h2>
            <p>
              Individual learning experiences may vary by internship track, project and batch.
              These profiles represent a snapshot of participation and hands-on technical work during the current learning journey.
            </p>
          </div>
        </div>
      </section>

      <section className="learning-interns-section learning-interns-soft-panel">
        <div className="learning-interns-container">
          <div className="learning-interns-section-heading">
            <span className="learning-interns-kicker">FAQ</span>
            <h2>Common Questions</h2>
          </div>

          <div className="learning-interns-faq-list">
            {faqs.map((item) => (
              <div className="learning-interns-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-interns-section">
        <div className="learning-interns-container learning-interns-final-cta">
          <span className="learning-interns-kicker">JOIN THE NEXT BATCH</span>
          <h2>Interested in Joining a Future Internship Batch?</h2>
          <p>
            Students can review the current internship program and contact Ailyt Learning Centre
            to learn about the current track, eligibility, schedule and application process.
          </p>

          <div className="learning-interns-hero-actions">
            <Link
              to="/learning/internship-programs"
              className="learning-interns-primary-btn"
            >
              Explore Internship Program
            </Link>

            <Link
              to="/learning/contact"
              className="learning-interns-secondary-btn"
            >
              Contact / Enquiry
            </Link>
          </div>

          <div className="learning-interns-inline-links">
            <Link to="/learning/internship-programs">Internship Program</Link>
            <Link to="/learning">Learning Centre</Link>
            <Link to="/learning/contact">Contact / Enquiry</Link>
            <Link to="/data-analyst-course-dehradun">Data Analyst Program</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearningInterns;
