import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learning.css';

const Learning = () => {
  /* =====================================================
     SEO
     ===================================================== */

  useEffect(() => {
    const previousTitle = document.title;

    let description = document.querySelector('meta[name="description"]');
    const createdDescription = !description;
    const previousDescription =
      description?.getAttribute('content') || '';

    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;
    const previousCanonical =
      canonical?.getAttribute('href') || '';

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    document.title =
      'Data Analytics, BCA/MCA & Computer Courses in Dehradun | AILYT TECHNOLOGIES';

    description.setAttribute(
      'content',
      'Explore Data Analytics, IGNOU BCA/MCA support and practical computer courses in Dehradun at AILYT. Learn through instructor-led classes, live projects, industrial training and career-focused skill development.'
    );

    canonical.setAttribute(
      'href',
      'https://ailyt.in/learning'
    );

    return () => {
      document.title = previousTitle;

      if (createdDescription) {
        description.remove();
      } else {
        description.setAttribute(
          'content',
          previousDescription
        );
      }

      if (createdCanonical) {
        canonical.remove();
      } else {
        canonical.setAttribute(
          'href',
          previousCanonical
        );
      }
    };
  }, []);

  /* =====================================================
     COURSE CATEGORIES
     ===================================================== */

  const courses = [
    {
      category: 'English & Communication',
      items: [
        'Spoken English',
        'Confidence Building',
        'Interview Skills'
      ],
      link: '/courses',
      linkText: 'Explore Communication Courses'
    },

    {
      category: 'Computer Courses',
      items: [
        'CCC (Course on Computer Concepts)',
        'O-Level',
        'Basic Computers',
        'MS Office & Digital Skills'
      ],
      link: '/courses',
      linkText: 'Explore Computer Courses'
    },

    {
      category: 'Data & Analytics',
      items: [
        'Data Analyst Program',
        'Advanced Excel',
        'SQL',
        'Power BI',
        'Python for Data Analysis'
      ],
      link: '/data-analyst-course-dehradun',
      linkText: 'Explore Data Analyst Program'
    },

    {
      category: 'IGNOU BCA & MCA',
      items: [
        'Semester-Wise Academic Support',
        'Programming & Lab Practice',
        'Live Projects',
        'Industrial Training',
        'Portfolio & Career Preparation'
      ],
      link: '/learning/courses/ignou-bca-mca',
      linkText: 'Explore BCA/MCA Professional Track'
    },

    {
      category: 'Programming & Development',
      items: [
        'Python Programming',
        'Programming Fundamentals',
        'Web Development',
        'Project-Based Coding'
      ],
      link: '/courses',
      linkText: 'Explore Programming Courses'
    }
  ];

  /* =====================================================
     WHY AILYT
     ===================================================== */

  const whyChoose = [
    {
      title: 'Instructor-Led Learning',
      description:
        'Learn concepts through structured teaching, demonstrations and regular mentor interaction.'
    },

    {
      title: 'Hands-On Practice',
      description:
        'Apply what you learn through guided computer-lab exercises and practical assignments.'
    },

    {
      title: 'Small Batch Learning',
      description:
        'Get more opportunities to ask questions, practise concepts and receive focused feedback.'
    },

    {
      title: 'Live Projects',
      description:
        'Build practical work that helps connect classroom concepts with real applications.'
    },

    {
      title: 'Industrial Training',
      description:
        'Gain guided exposure to project briefs, professional workflows, documentation, reviews and presentations.'
    },

    {
      title: 'Career Preparation',
      description:
        'Develop stronger project stories, portfolios, resumes and interview confidence as your skills grow.'
    }
  ];

  /* =====================================================
     PRACTICAL LEARNING PROCESS
     ===================================================== */

  const practicalLearning = [
    {
      title: 'Understand',
      description:
        'Build clear foundations through instructor-led concept teaching.'
    },

    {
      title: 'Practice',
      description:
        'Apply concepts through guided exercises and lab sessions.'
    },

    {
      title: 'Build',
      description:
        'Create mini projects, dashboards, programs and practical work.'
    },

    {
      title: 'Review',
      description:
        'Receive mentor feedback and improve your approach.'
    },

    {
      title: 'Industrial Training',
      description:
        'Experience structured project workflows, documentation and professional-style reviews.'
    },

    {
      title: 'Present',
      description:
        'Learn to explain your projects, decisions and outcomes confidently.'
    }
  ];

  /* =====================================================
     INTERNSHIPS
     ===================================================== */

  const internshipPrograms = [
    {
      title: 'Structured Internship Model',
      description:
        'Develop practical experience through guided work, project deliverables and mentor reviews.'
    },

    {
      title: 'Technology Tracks',
      description:
        'Work within focused technical areas that connect classroom learning with practical application.'
    },

    {
      title: 'Professional Workflow',
      description:
        'Practise project planning, documentation, version control, reviews and presentations.'
    }
  ];

  /* =====================================================
     FAQ
     ===================================================== */

  const faqs = [
    {
      question:
        'Which courses are available at AILYT Learning Centre?',
      answer:
        'AILYT offers learning paths in Data Analytics, computer applications, programming, communication skills and structured IGNOU BCA/MCA academic and professional support.'
    },

    {
      question:
        'Can beginners join AILYT courses?',
      answer:
        'Yes. Many programs begin from the fundamentals. The right starting point depends on your current knowledge and the course you choose.'
    },

    {
      question:
        'Do AILYT programs include practical work?',
      answer:
        'Yes. Practical exercises, lab work and projects are included where relevant so students can apply the concepts they learn.'
    },

    {
      question:
        'What is industrial training at AILYT?',
      answer:
        'Industrial training gives students guided exposure to professional-style project work such as project briefs, task planning, documentation, reviews, debugging and presentations.'
    },

    {
      question:
        'Does AILYT provide career preparation?',
      answer:
        'Selected programs include portfolio development, resume improvement, project presentation and interview preparation to help students present their skills professionally.'
    },

    {
      question:
        'Where is AILYT Learning Centre located?',
      answer:
        'AILYT Learning Centre is based in Dehradun. Contact the team for current batch timings, course modes and counselling details.'
    }
  ];

  const scrollToCourses = () => {
    document
      .getElementById('courses')
      ?.scrollIntoView({
        behavior: 'smooth'
      });
  };

  return (
    <div className="learning-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="learning-hero">

        <div className="learning-hero-content">

          <div className="learning-hero-text">

            <h1>
              Learn Practical Skills.
              Build Real Projects.
              Grow with Confidence.
            </h1>

            <p>
              Explore Data Analytics, programming,
              computer applications and structured
              IGNOU BCA/MCA support at AILYT Learning Centre,
              Dehradun.
              Our programs combine instructor-led learning,
              hands-on practice, live projects,
              industrial training and career-focused
              skill development.
            </p>

            <div className="learning-hero-ctas">

              <Link
                to="/contact"
                className="cta-primary"
              >
                Book Free Counselling
              </Link>

              <button
                type="button"
                className="cta-secondary"
                onClick={scrollToCourses}
              >
                Explore Courses
              </button>

            </div>

          </div>

          <div className="learning-hero-visual">

            <div className="hero-box hero-box-1"></div>

            <div className="hero-box hero-box-2"></div>

            <div className="hero-box hero-box-3"></div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY AILYT
          ===================================================== */}

      <section className="learning-why">

        <div className="section-container">

          <h2>
            Why AILYT Learning Centre
          </h2>

          <p className="section-subtitle">
            Learn through a practical environment where
            understanding, practice and building matter.
          </p>

          <div className="why-grid">

            {whyChoose.map((item, index) => (

              <div
                key={item.title}
                className="why-card"
              >

                <div className="why-card-icon">

                  <span className="icon-number">
                    {index + 1}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          COURSES / LEARNING PATHS
          ===================================================== */}

      <section
        className="learning-courses"
        id="courses"
      >

        <div className="section-container">

          <h2>
            Explore Our Learning Paths
          </h2>

          <p className="section-subtitle">
            Choose a learning path based on your
            academic goals, current skills and career interests.
          </p>

          <div className="courses-grid">

            {courses.map((course) => (

              <div
                key={course.category}
                className="course-category"
              >

                <div className="course-header">

                  <h3>
                    {course.category}
                  </h3>

                </div>

                <ul className="course-items">

                  {course.items.map((item) => (

                    <li key={item}>

                      <span className="course-item-icon">
                        →
                      </span>

                      {item}

                    </li>

                  ))}

                </ul>

                <Link
                  to={course.link}
                  className="course-link"
                >
                  {course.linkText}
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PRACTICAL LEARNING
          ===================================================== */}

      <section className="learning-internships">

        <div className="section-container">

          <h2>
            From Learning to Real-World Practice
          </h2>

          <p className="section-subtitle">
            Students progressively move from understanding
            concepts to practising, building, reviewing and
            presenting practical work.
          </p>

          <div className="internship-grid">

            {practicalLearning.map((step, index) => (

              <div
                key={step.title}
                className="internship-card"
              >

                <div className="internship-number">
                  {index + 1}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRIAL TRAINING
          ===================================================== */}

      <section className="learning-about">

        <div className="section-container">

          <div className="about-content">

            <div className="about-text">

              <h2>
                Industrial Training That Connects
                Learning with Practice
              </h2>

              <p>
                Industrial training at AILYT is designed
                to introduce students to professional-style
                project work while they are still learning.
              </p>

              <p>
                Depending on the program, students may gain
                guided exposure to project briefs, task planning,
                Git/GitHub, documentation, debugging,
                mentor reviews and project presentations.
              </p>

              <ul className="about-features">

                <li>
                  Project Briefs & Milestones
                </li>

                <li>
                  Task Planning & Documentation
                </li>

                <li>
                  Professional Tools & Workflows
                </li>

                <li>
                  Mentor Review & Improvement
                </li>

                <li>
                  Project Presentation
                </li>

              </ul>

            </div>

            <div className="about-visual">

              <div className="about-box about-box-1"></div>

              <div className="about-box about-box-2"></div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTERNSHIP PROGRAMS
          ===================================================== */}

      <section className="learning-internships">

        <div className="section-container">

          <h2>
            Internship Programs
          </h2>

          <p className="section-subtitle">
            Extend your classroom learning through
            structured practical experience and
            guided professional workflows.
          </p>

          <div className="internship-grid">

            {internshipPrograms.map(
              (program, index) => (

                <div
                  key={program.title}
                  className="internship-card"
                >

                  <div className="internship-number">
                    {index + 1}
                  </div>

                  <h3>
                    {program.title}
                  </h3>

                  <p>
                    {program.description}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          LEARNING JOURNEY
          ===================================================== */}

      <section className="student-journey">

        <div className="section-container">

          <h2>
            Your Learning Journey
          </h2>

          <p className="section-subtitle">
            Move from choosing the right learning path
            to building practical work you can explain
            with confidence.
          </p>

          <div className="journey-steps">

            <div className="journey-step">

              <div className="step-number">
                1
              </div>

              <h3>
                Counselling
              </h3>

              <p>
                Understand your goals and choose
                a suitable learning path.
              </p>

            </div>

            <div className="journey-arrow">
              →
            </div>

            <div className="journey-step">

              <div className="step-number">
                2
              </div>

              <h3>
                Enrollment
              </h3>

              <p>
                Begin with a structured course
                and learning plan.
              </p>

            </div>

            <div className="journey-arrow">
              →
            </div>

            <div className="journey-step">

              <div className="step-number">
                3
              </div>

              <h3>
                Learn & Practice
              </h3>

              <p>
                Build concepts through instructor-led
                classes and hands-on work.
              </p>

            </div>

            <div className="journey-arrow">
              →
            </div>

            <div className="journey-step">

              <div className="step-number">
                4
              </div>

              <h3>
                Projects
              </h3>

              <p>
                Turn your learning into practical
                projects and demonstrable work.
              </p>

            </div>

            <div className="journey-arrow">
              →
            </div>

            <div className="journey-step">

              <div className="step-number">
                5
              </div>

              <h3>
                Career Preparation
              </h3>

              <p>
                Improve project presentation,
                portfolio quality and interview readiness.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT
          ===================================================== */}

      <section className="learning-about">

        <div className="section-container">

          <div className="about-content">

            <div className="about-text">

              <h2>
                About AILYT Learning Centre
              </h2>

              <p>
                AILYT Learning Centre helps learners build
                practical technology, computer and
                professional skills through structured
                teaching and hands-on application.
              </p>

              <p>
                Whether you are beginning with computer
                fundamentals, studying BCA/MCA,
                learning programming or moving toward
                Data Analytics, our goal is to help you
                build skills that you can understand,
                apply and explain confidently.
              </p>

              <ul className="about-features">

                <li>
                  Interactive Smart Board Learning
                </li>

                <li>
                  Hands-On Computer Lab Practice
                </li>

                <li>
                  Small Batches for Focused Attention
                </li>

                <li>
                  Live Projects & Industrial Training
                </li>

                <li>
                  Portfolio, Resume & Interview Preparation
                </li>

              </ul>

            </div>

            <div className="about-visual">

              <div className="about-box about-box-1"></div>

              <div className="about-box about-box-2"></div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
          ===================================================== */}

      <section className="learning-why">

        <div className="section-container">

          <h2>
            Frequently Asked Questions
          </h2>

          <p className="section-subtitle">
            Quick answers about learning,
            practical training and course selection.
          </p>

          <div className="why-grid">

            {faqs.map((faq, index) => (

              <div
                key={faq.question}
                className="why-card"
              >

                <div className="why-card-icon">

                  <span className="icon-number">
                    {index + 1}
                  </span>

                </div>

                <h3>
                  {faq.question}
                </h3>

                <p>
                  {faq.answer}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="learning-cta">

        <div className="section-container">

          <h2>
            Not Sure Which Program Is Right for You?
          </h2>

          <p>
            Speak with the AILYT team about your goals,
            current skills and the learning path
            that fits you best.
          </p>

          <div className="cta-buttons">

            <Link
              to="/contact"
              className="cta-primary"
            >
              Book Free Counselling
            </Link>

            <Link
              to="/courses"
              className="cta-secondary"
            >
              Explore Courses
            </Link> 

          </div>

        </div>

      </section>
      </div>
  );
};

export default Learning;
