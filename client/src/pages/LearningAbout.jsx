import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LearningAbout.css';

const LearningAbout = () => {
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
      'IT Training in Dehradun | Practical Learning at AILYT';

    description.setAttribute(
      'content',
      'Discover AILYT’s practical IT training in Dehradun with instructor-led classes, hands-on labs, live projects, smart-board learning, industrial training and career-focused skill development.'
    );

    canonical.setAttribute(
      'href',
      'https://ailyt.in/learning/about'
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

  const methodology = [
    {
      title: 'Concept First',
      description:
        'Each topic begins with clear explanation and examples so learners understand the logic before moving into exercises or software tools.'
    },
    {
      title: 'Hands-On Practice',
      description:
        'Students apply concepts through guided computer-lab work, coding exercises, analytics tasks and practical assignments.'
    },
    {
      title: 'Project-Based Learning',
      description:
        'Learning is connected with practical outcomes such as dashboards, programs, websites, applications and structured project work.'
    },
    {
      title: 'Review & Improvement',
      description:
        'Learners receive mentor feedback, identify gaps, correct mistakes and improve their approach through repeated review.'
    },
    {
      title: 'Industrial Training Exposure',
      description:
        'Selected programs introduce professional-style workflows such as task planning, Git/GitHub, documentation, debugging and presentations.'
    },
    {
      title: 'Career Preparation',
      description:
        'Students learn to explain their work, present projects confidently and strengthen portfolios, resumes and interview readiness.'
    }
  ];

  const infrastructure = [
    {
      title: 'Smart Board Classroom',
      description:
        'Visual explanations, live demonstrations and interactive teaching help make technical concepts easier to understand.'
    },
    {
      title: 'Computer Lab',
      description:
        'Students practise programming, analytics, office applications and other technology skills directly on computers.'
    },
    {
      title: 'Small Batch Learning',
      description:
        'Focused batches create more room for questions, individual guidance and regular feedback from instructors.'
    },
    {
      title: 'Hybrid Learning Support',
      description:
        'Where suitable, classroom learning can be supported with online interaction, digital resources and remote guidance.'
    },
    {
      title: 'Project Workspace',
      description:
        'Learners can work on practical assignments, team activities and structured projects in a focused environment.'
    },
    {
      title: 'Mentor Guidance',
      description:
        'Regular interaction helps learners review progress, solve difficulties and plan the next stage of their learning.'
    }
  ];

  const journey = [
    {
      step: '01',
      title: 'Understand',
      description:
        'Learn the concept with simple explanations, examples and demonstrations.'
    },
    {
      step: '02',
      title: 'Practise',
      description:
        'Apply the concept through guided exercises and computer-lab work.'
    },
    {
      step: '03',
      title: 'Build',
      description:
        'Turn learning into a practical task, mini-project or larger assignment.'
    },
    {
      step: '04',
      title: 'Review',
      description:
        'Receive feedback, correct mistakes and improve the quality of the work.'
    },
    {
      step: '05',
      title: 'Present',
      description:
        'Explain your approach, tools, decisions and outcome with confidence.'
    }
  ];

  const faqs = [
    {
      question: 'What type of IT training does AILYT provide in Dehradun?',
      answer:
        'AILYT Learning Centre offers practical IT training across areas such as Data Analytics, programming, computer applications and selected IGNOU BCA/MCA support tracks.'
    },
    {
      question: 'What teaching methodology does AILYT use?',
      answer:
        'AILYT combines concept teaching, guided practice, computer-lab work, project-based learning, mentor feedback and project presentation.'
    },
    {
      question: 'Does AILYT provide hands-on IT training?',
      answer:
        'Yes. Practical exercises, lab work and projects are built into relevant programs so learners can apply concepts instead of only studying theory.'
    },
    {
      question: 'Does AILYT offer live projects and industrial training?',
      answer:
        'Selected programs include live-project style work and guided industrial training exposure involving project briefs, task planning, documentation, debugging and review.'
    },
    {
      question: 'Is hybrid learning available?',
      answer:
        'Where appropriate, classroom learning can be supported with online interaction, digital resources and remote guidance. Current delivery modes should be confirmed with the centre.'
    },
    {
      question: 'Who can join AILYT IT training programs?',
      answer:
        'Programs are designed for students, graduates, working learners and beginners depending on the course. The right starting point depends on current knowledge and learning goals.'
    }
  ];

  return (
    <main className="learning-about-page">

      {/* HERO */}
      <section className="about-learning-hero">
        <div className="about-learning-container about-learning-hero-grid">

          <div className="about-learning-hero-copy">
            <span className="about-learning-kicker">
              AILYT LEARNING CENTRE · DEHRADUN
            </span>

            <h1>
              Practical IT Training in Dehradun with Hands-On Learning & Real Projects
            </h1>

            <p>
              AILYT Learning Centre combines instructor-led IT training with
              hands-on computer practice, smart-board teaching, live projects
              and guided skill development.
            </p>

            <p>
              Our approach is built around understanding concepts, applying them
              through practical work and helping learners explain what they have
              built with confidence.
            </p>

            <div className="about-learning-actions">
              <Link
                to="/learning/contact"
                className="about-learning-primary-btn"
              >
                Book Free Counselling
              </Link>

              <a
                href="#methodology"
                className="about-learning-secondary-btn"
              >
                Explore Teaching Methodology
              </a>
            </div>
          </div>

          <div className="about-learning-hero-panel">
            <div>
              <strong>Instructor-Led</strong>
              <span>Structured concept teaching</span>
            </div>

            <div>
              <strong>Hands-On</strong>
              <span>Computer-lab practice</span>
            </div>

            <div>
              <strong>Project-Based</strong>
              <span>Build practical work</span>
            </div>

            <div>
              <strong>Career-Focused</strong>
              <span>Develop presentation confidence</span>
            </div>
          </div>

        </div>
      </section>


      {/* METHODOLOGY */}
      <section
        className="about-learning-section about-learning-methodology"
        id="methodology"
      >
        <div className="about-learning-container">

          <div className="about-learning-section-heading">
            <span className="about-learning-kicker">
              TEACHING METHODOLOGY
            </span>

            <h2>
              How Practical IT Training Works at AILYT
            </h2>

            <p>
              Our teaching methodology moves learners from explanation to
              application. The exact tools differ by course, but the learning
              process remains consistent: understand, practise, build, review
              and present.
            </p>
          </div>

          <div className="about-learning-card-grid">
            {methodology.map((item, index) => (
              <article
                className="about-learning-card"
                key={item.title}
              >
                <span className="about-learning-card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* LEARNING PROCESS */}
      <section className="about-learning-section about-learning-journey">
        <div className="about-learning-container">

          <div className="about-learning-section-heading">
            <span className="about-learning-kicker">
              LEARNING PROCESS
            </span>

            <h2>
              From First Explanation to Practical Demonstration
            </h2>

            <p>
              A structured learning cycle helps students turn classroom
              knowledge into practical work they can demonstrate and discuss.
            </p>
          </div>

          <div className="about-learning-journey-grid">
            {journey.map((item) => (
              <article
                className="about-learning-journey-card"
                key={item.step}
              >
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* INFRASTRUCTURE */}
      <section
        className="about-learning-section about-learning-infrastructure"
        id="infrastructure"
      >
        <div className="about-learning-container">

          <div className="about-learning-section-heading">
            <span className="about-learning-kicker">
              INFRASTRUCTURE & LEARNING ENVIRONMENT
            </span>

            <h2>
              A Learning Space Designed for Theory and Practice
            </h2>

            <p>
              Effective IT training requires more than notes. Our learning
              environment is designed to support explanation, computer-based
              practice, collaboration and project development.
            </p>
          </div>

          <div className="about-learning-card-grid">
            {infrastructure.map((item, index) => (
              <article
                className="about-learning-card"
                key={item.title}
              >
                <span className="about-learning-card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* LOCAL SEO */}
      <section className="about-learning-section about-learning-local">
        <div className="about-learning-container about-learning-two-column">

          <div>
            <span className="about-learning-kicker">
              IT TRAINING IN DEHRADUN
            </span>

            <h2>
              Practical Technology Learning for Students & Professionals
            </h2>

            <p>
              AILYT Learning Centre supports learners in Dehradun who want to
              strengthen technology skills through structured teaching and
              hands-on application.
            </p>

            <p>
              Learning paths can include Data Analytics, programming, computer
              applications, BCA/MCA support, live-project work and selected
              industrial training exposure.
            </p>
          </div>

          <div className="about-learning-highlight-box">
            <h3>What We Emphasise</h3>

            <ul>
              <li>Clear concept understanding</li>
              <li>Regular hands-on practice</li>
              <li>Project-based IT training</li>
              <li>Professional development tools</li>
              <li>Mentor feedback and review</li>
              <li>Portfolio and presentation confidence</li>
            </ul>
          </div>

        </div>
      </section>


      {/* HYBRID */}
      <section className="about-learning-section about-learning-hybrid">
        <div className="about-learning-container about-learning-two-column">

          <div className="about-learning-highlight-box">
            <h3>Classroom + Digital Support</h3>

            <p>
              Where suitable, IT classes can combine classroom interaction with
              digital resources, online guidance and follow-up support.
            </p>
          </div>

          <div>
            <span className="about-learning-kicker">
              HYBRID LEARNING
            </span>

            <h2>
              Flexible Learning Without Losing Practical Interaction
            </h2>

            <p>
              Hybrid support can help learners stay connected when classroom
              attendance is not always possible, while practical exercises,
              lab work and project discussions remain central to the learning
              experience.
            </p>

            <p>
              Delivery mode depends on the course, batch and learning objective,
              so current arrangements should be confirmed during counselling.
            </p>
          </div>

        </div>
      </section>


      {/* FAQ */}
      <section className="about-learning-section about-learning-faq">
        <div className="about-learning-container">

          <div className="about-learning-section-heading">
            <span className="about-learning-kicker">
              COMMON QUESTIONS
            </span>

            <h2>
              IT Training & Learning at AILYT
            </h2>
          </div>

          <div className="about-learning-faq-grid">
            {faqs.map((faq) => (
              <article
                className="about-learning-faq-card"
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
      <section className="about-learning-final-cta">
        <div className="about-learning-container">
          <h2>
            Find the Right IT Training Program for Your Goals
          </h2>

          <p>
            Speak with the AILYT team about your current skills, learning goals
            and the practical IT training options available at the centre.
          </p>

          <div className="about-learning-final-actions">
            <Link
              to="/learning/contact"
              className="about-learning-primary-btn"
            >
              Book Free Counselling
            </Link>

            <Link
              to="/learning"
              className="about-learning-secondary-btn"
            >
              Explore Learning Programs
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default LearningAbout;
