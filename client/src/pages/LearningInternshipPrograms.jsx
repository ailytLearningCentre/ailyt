import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LearningInternshipPrograms.css';

const LearningInternshipPrograms = () => {
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
      'Software Development Internship in Dehradun | Ailyt Learning Centre';

    description.setAttribute(
      'content',
      'Join AILYT’s software development internship in Dehradun with live projects, coding practice, Git/GitHub workflows, documentation, mentor guidance and practical development experience.'
    );

    canonical.setAttribute(
      'href',
      'https://ailyt.in/learning/internship-programs'
    );

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

  const learningAreas = [
    {
      title: 'Programming Foundations',
      description:
        'Strengthen logic, coding habits and problem-solving through guided programming tasks before moving into larger development work.'
    },
    {
      title: 'Web Development',
      description:
        'Work with frontend and backend concepts while learning how interfaces, APIs, databases and application logic fit together.'
    },
    {
      title: 'Project Development',
      description:
        'Build structured mini-projects and larger practical assignments that move from requirement understanding to implementation and review.'
    },
    {
      title: 'Git & GitHub Workflow',
      description:
        'Learn version control, branches, commits, pull requests and collaborative workflows used in modern software development.'
    },
    {
      title: 'Testing & Debugging',
      description:
        'Practise identifying issues, validating functionality and improving code through systematic debugging and review.'
    },
    {
      title: 'Documentation & Presentation',
      description:
        'Learn to document project decisions, explain your work clearly and present completed features with greater confidence.'
    }
  ];

  const workflowSteps = [
    {
      number: '01',
      title: 'Understand',
      description:
        'Read the requirement, clarify the expected outcome and identify the user or business problem.'
    },
    {
      number: '02',
      title: 'Plan',
      description:
        'Break the work into manageable tasks, decide the tools required and define a practical implementation approach.'
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Develop the assigned feature, program or project with mentor guidance and regular checkpoints.'
    },
    {
      number: '04',
      title: 'Review',
      description:
        'Review code, functionality, documentation and project decisions, then improve the work based on feedback.'
    },
    {
      number: '05',
      title: 'Present',
      description:
        'Explain what was built, how it works, what challenges were faced and what could be improved next.'
    }
  ];

  const suitableFor = [
    'BCA students who want practical software development exposure',
    'MCA students preparing for project work and technical roles',
    'B.Tech / B.Sc. students building programming and development skills',
    'Beginners who understand basic programming and want structured practice',
    'Learners who want live project exposure, Git/GitHub practice and mentor reviews'
  ];

  const faqs = [
    {
      question: 'What is the software development internship at AILYT?',
      answer:
        'It is a structured practical learning program designed to help students move beyond theory through coding practice, development tasks, project workflows, documentation, mentor reviews and project presentations.'
    },
    {
      question: 'Is this software development internship available in Dehradun?',
      answer:
        'Yes. AILYT Learning Centre is based in Dehradun. Contact the team for current batch schedules, mode of delivery and seat availability.'
    },
    {
      question: 'Can BCA and MCA students join this internship?',
      answer:
        'Yes. The program is suitable for BCA and MCA students who want practical development exposure alongside their academic learning, subject to their current skill level and chosen track.'
    },
    {
      question: 'Does the internship include live projects?',
      answer:
        'Selected internship tracks include practical project work and live-project style assignments where learners work through requirements, coding, testing, documentation and review.'
    },
    {
      question: 'Will I learn Git and GitHub during the internship?',
      answer:
        'Yes. Git and GitHub can be included as part of the workflow so learners understand version control, commits, branches and collaborative development practices.'
    },
    {
      question: 'Does AILYT guarantee a job after the internship?',
      answer:
        'No. The internship focuses on practical skill development, project exposure and professional preparation. Employment outcomes depend on the learner’s skills, performance, opportunities and hiring processes.'
    }
  ];

  return (
      <main className="internship-page">

        {/* HERO */}
        <section className="internship-hero" id="internship-program">
          <div className="internship-container internship-hero-grid">

            <div className="internship-hero-copy">
              <span className="internship-kicker">
                AILYT LEARNING CENTRE · DEHRADUN
              </span>

              <h1>
                Software Development Internship
                with Live Projects & Practical Training
              </h1>

              <p>
                AILYT’s software development internship in Dehradun is designed
                for students who want structured practical exposure to coding,
                project development, Git/GitHub workflows, testing, debugging,
                documentation and mentor-led reviews.
              </p>

              <div className="internship-hero-actions">
                <Link
                  to="/learning/contact"
                  className="internship-primary-btn"
                >
                  Enquire About Internship
                </Link>

                <a
                  href="#tracks"
                  className="internship-secondary-btn"
                >
                  Explore Internship Tracks
                </a>
              </div>
            </div>

            <div className="internship-hero-panel">
              <div className="internship-stat">
                <strong>Practical Training</strong>
                <span>Structured practical learning</span>
              </div>

              <div className="internship-stat">
                <strong>Live Projects</strong>
                <span>Build and review practical work</span>
              </div>

              <div className="internship-stat">
                <strong>Mentor Guidance</strong>
                <span>Regular feedback and improvement</span>
              </div>

              <div className="internship-stat">
                <strong>Git & GitHub</strong>
                <span>Professional development workflow</span>
              </div>
            </div>

          </div>
        </section>


        {/* INTRO */}
        <section className="internship-section">
          <div className="internship-container">

            <div className="internship-section-heading">
              <span className="internship-kicker">WHY THIS PROGRAM</span>

              <h2>
                Move from Classroom Concepts to Practical Software Development
              </h2>

              <p>
                Academic learning gives you the foundation. Practical software
                development requires another layer: understanding requirements,
                writing code, working with tools, fixing issues, documenting
                decisions and explaining what you built.
              </p>

              <p>
                This internship program is designed to help learners
                practise those skills in a structured environment rather than
                jumping directly into disconnected tasks. The focus is on
                repeated practice, guided projects and professional-style
                workflows.
              </p>
            </div>

            <div className="internship-page-links">
              <Link to="/learning/internship-programs/tech-tracks">Explore Tech Tracks</Link>
              <Link to="/learning/internship-programs/tools-workflow">Explore Tools &amp; Workflow</Link>
            </div>

          </div>
        </section>


        {/* LEARNING AREAS */}
        <section
          className="internship-section internship-tracks"
          id="tracks"
        >
          <div className="internship-container">

            <div className="internship-section-heading">
              <span className="internship-kicker">TECH TRACKS</span>

              <h2>
                What You Can Learn During the Software Development Internship
              </h2>

              <p>
                The exact learning path can vary according to the learner’s
                current skills and selected track, but the internship is built
                around practical development activities.
              </p>
            </div>

            <div className="internship-card-grid">
              {learningAreas.map((item, index) => (
                <article
                  className="internship-card"
                  key={item.title}
                >
                  <span className="internship-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

          </div>
        </section>


        {/* WORKFLOW */}
        <section
          className="internship-section internship-workflow"
          id="workflow"
        >
          <div className="internship-container">

            <div className="internship-section-heading">
              <span className="internship-kicker">TOOLS & WORKFLOW</span>

              <h2>
                Learn How Software Work Moves from Requirement to Review
              </h2>

              <p>
                The internship introduces learners to a repeatable development
                process so that coding is connected to planning, testing,
                documentation and presentation.
              </p>
            </div>

            <div className="internship-workflow-grid">
              {workflowSteps.map((step) => (
                <article
                  className="internship-workflow-card"
                  key={step.number}
                >
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

          </div>
        </section>


        {/* PRACTICAL EXPERIENCE */}
        <section className="internship-section internship-experience">
          <div className="internship-container internship-two-column">

            <div>
              <span className="internship-kicker">PRACTICAL EXPERIENCE</span>

              <h2>
                Build Work You Can Explain, Review and Improve
              </h2>

              <p>
                A good software development internship should do more than give
                students a list of technologies. Learners need opportunities
                to build, receive feedback, correct mistakes and understand why
                a particular development approach was used.
              </p>

              <p>
                Depending on the selected track, students may work on web
                applications, backend logic, databases, dashboards, automation,
                API-based features or other practical software assignments.
              </p>
            </div>

            <div className="internship-checklist">
              <div>✓ Requirement understanding</div>
              <div>✓ Coding and implementation</div>
              <div>✓ Git / GitHub workflow</div>
              <div>✓ Testing and debugging</div>
              <div>✓ Project documentation</div>
              <div>✓ Mentor review</div>
              <div>✓ Project presentation</div>
              <div>✓ Portfolio-ready project stories</div>
            </div>

          </div>
        </section>


        {/* WHO IT IS FOR */}
        <section className="internship-section internship-audience">
          <div className="internship-container">

            <div className="internship-section-heading">
              <span className="internship-kicker">WHO CAN JOIN</span>

              <h2>
                Suitable for Students Building Practical Development Skills
              </h2>
            </div>

            <div className="internship-audience-list">
              {suitableFor.map((item) => (
                <div
                  className="internship-audience-item"
                  key={item}
                >
                  <span>→</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* DEHRADUN LOCAL SECTION */}
        <section className="internship-section internship-local">
          <div className="internship-container internship-two-column">

            <div>
              <span className="internship-kicker">
                SOFTWARE DEVELOPMENT INTERNSHIP IN DEHRADUN
              </span>

              <h2>
                Practical Technology Learning at AILYT Learning Centre
              </h2>

              <p>
                AILYT Learning Centre provides a practical environment for
                students in Dehradun who want to strengthen programming,
                software development and project skills through guided learning
                and hands-on work.
              </p>
            </div>

            <div>
              <p>
                The internship can complement academic study for BCA, MCA,
                B.Tech, B.Sc. and other technology learners who want more
                exposure to development tools, live-project style work,
                professional workflows and project presentation.
              </p>

              <p>
                Students should contact AILYT for the current internship track,
                eligibility, schedule and delivery mode before enrolling.
              </p>
            </div>

          </div>
        </section>


        {/* FAQ */}
        <section className="internship-section internship-faq">
          <div className="internship-container">

            <div className="internship-section-heading">
              <span className="internship-kicker">COMMON QUESTIONS</span>

              <h2>
                Software Development Internship FAQs
              </h2>
            </div>

            <div className="internship-faq-grid">
              {faqs.map((faq) => (
                <article
                  className="internship-faq-card"
                  key={faq.question}
                >
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>

          </div>
        </section>


        {/* FINAL CTA */}
        <section className="internship-final-cta">
          <div className="internship-container">
            <h2>
              Ready to Build Practical Software Development Experience?
            </h2>

            <p>
              Speak with the AILYT team to understand the current internship
              track, schedule, learning requirements and enrolment process.
            </p>

            <div className="internship-final-actions">
              <Link
                to="/learning/contact"
                className="internship-primary-btn"
              >
                Contact AILYT Learning Centre
              </Link>

              <Link
                to="/learning"
                className="internship-secondary-btn"
              >
                Explore Learning Programs
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
};

export default LearningInternshipPrograms;
