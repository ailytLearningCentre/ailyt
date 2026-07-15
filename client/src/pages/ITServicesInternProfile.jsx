import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ITServicesInternProfile.css';

const interns = {
  anushka: {
    name: 'Anushka',
    role: 'Software Development Intern',
    internId: 'AILYT/2026/001',
    education: 'Bachelor of Computer Applications (BCA) – Graduate',
    skills: [
     'HTML', 
     'CSS',
      'JavaScript',
       'MySQL',
       'Flutter',
        'Node.js', 
        'Express.js',
         'MongoDB' ,
          'Render',
    ],
    about:
      'A BCA graduate with a strong interest in software and web development. Passionate about learning new technologies, solving real-world problems, and building user-friendly applications. A quick learner with good communication and teamwork skills.',
    projects: [
      {
        title: 'The Real Health (TRH) App',
        description:
          'A healthcare application designed to connect users, doctors, and administrators. It includes OTP login, registration, health questionnaires, appointment booking, doctor availability, consultation notes, and appointment management. Contributed to frontend development, UI improvements, testing, and integration support.',
      },
      {
        title: 'CRM Application',
        description:
          'A customer relationship management system developed to manage customers, employees, students, sales, notifications, and daily business activities. It includes role-based dashboards for admin, employees, customers, and students. Contributed to UI development, dashboard modules, database-related tasks, and feature testing.',
      },
    ],
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
    email: 'anushkamaurya070@gmail.com',
    linkedin: '',
    certificate: 'Valid',
  },

  'gunjan-verma': {
    name: 'Gunjan Verma',
    role: 'Software Development Intern',
    internId: 'AILYT/2026/002',
    education: 'Bachelor of Computer Applications (BCA) – Graduate',
    skills: [
      'HTML', 
     'CSS',
      'JavaScript',
       'MySQL',
       'Flutter',
        'Node.js', 
        'Express.js',
         'MongoDB' ,
          'Render',,
    ],
    about:
      'A BCA graduate with a strong interest in software and web development. Passionate about learning new technologies, solving real-world problems, and building user-friendly applications. A quick learner with good communication and teamwork skills.',
    projects: [
      {
        title: 'The Real Health (TRH) App',
        description:
          'A healthcare application designed to connect users, doctors, and administrators. It includes OTP login, registration, health questionnaires, appointment booking, doctor availability, consultation notes, and appointment management. Contributed to frontend development, UI improvements, testing, and integration support.',
      },
      {
        title: 'CRM Application',
        description:
          'A customer relationship management system developed to manage customers, employees, students, sales, notifications, and daily business activities. It includes role-based dashboards for admin, employees, customers, and students. Contributed to UI development, dashboard modules, database-related tasks, and feature testing.',
      },
    ],
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
    email: 'gunjanverma7070@gmail.com',
    linkedin: '',
    certificate: 'Valid',
  },

  'kajal-rajput': {
    name: 'Kajal Rajput',
    role: 'Software Development Intern',
    internId: 'AILYT/2026/003',
    education: 'Bachelor of Computer Applications (BCA) – Graduate',
    skills: [
      'HTML', 
     'CSS',
      'JavaScript',
       'MySQL',
       'Flutter',
        'Node.js', 
        'Express.js',
         'MongoDB' ,
          'Render',
    ],
    about:
      'A BCA graduate with a strong interest in software and web development. Passionate about learning new technologies, solving real-world problems, and building user-friendly applications. A quick learner with good communication and teamwork skills.',
    projects: [
      {
        title: 'The Real Health (TRH) App',
        description:
          'A healthcare application designed to connect users, doctors, and administrators. It includes OTP login, registration, health questionnaires, appointment booking, doctor availability, consultation notes, and appointment management. Contributed to frontend development, UI improvements, testing, and integration support.',
      },
      {
        title: 'CRM Application',
        description:
          'A customer relationship management system developed to manage customers, employees, students, sales, notifications, and daily business activities. It includes role-based dashboards for admin, employees, customers, and students. Contributed to UI development, dashboard modules, database-related tasks, and feature testing.',
      },
    ],
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
    email: 'kajalrajput4624@gmail.com',
    linkedin: '',
    certificate: 'Valid',
  },

  
  'nidhi': {
    name: 'Nidhi',
    role: 'Software Development Intern',
    internId: 'AILYT/2026/004',
    education: 'Bachelor of Computer Applications (BCA) – Graduate',
    skills: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    about:
      'A BCA graduate with a strong interest in mobile application and backend development. Passionate about learning new technologies, solving real-world problems, and building reliable applications. A quick learner with good communication and teamwork skills.',
    projects: [
      {
        title: 'TRH (The Real Health) Application',
        description:
          'A healthcare application developed using Flutter, Node.js, Express.js, and MongoDB. It connects users, doctors, and administrators through features such as OTP login, user registration, health questionnaires, appointment booking, doctor availability, consultation management, and role-based dashboards.',
      },
    ],
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
    email: 'nidhii6264@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nidhi-7a72343b5?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    certificate: 'Valid',
  },

  rakhi: {
    name: 'Rakhi',
    role: 'Software Development Intern',
    internId: 'AILYT/2026/004',
    education: 'Bachelor of Computer Applications (BCA) – Graduate',
    skills: [
     'HTML', 
     'CSS',
      'JavaScript',
       'MySQL',
       'Flutter',
        'Node.js', 
        'Express.js',
         'MongoDB' ,
          'Render',
    ],
    about:
      'A BCA graduate with a strong interest in software and web development. Passionate about learning new technologies, solving real-world problems, and building user-friendly applications. A quick learner with good communication and teamwork skills.',
    projects: [
      {
        title: 'The Real Health (TRH) App',
        description:
          'A healthcare application designed to connect users, doctors, and administrators. It includes OTP login, registration, health questionnaires, appointment booking, doctor availability, consultation notes, and appointment management. Contributed to frontend development, UI improvements, testing, and integration support.',
      },
      {
        title: 'CRM Application',
        description:
          'A customer relationship management system developed to manage customers, employees, students, sales, notifications, and daily business activities. It includes role-based dashboards for admin, employees, customers, and students. Contributed to UI development, dashboard modules, database-related tasks, and feature testing.',
      },
    ],
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
    email: 'rakhi.profilemail@gmail.com',
    linkedin: '',
    certificate: 'Valid',
  },

  'ruchi-kothiyal': {
    name: 'Ruchi Kothiyal',
    role: 'Software Development Intern',
    internId: 'AILYT/2026/006',
    education: 'Bachelor of Computer Applications (BCA) – Graduate',
    skills: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    about:
      'A BCA graduate with a strong interest in mobile application and backend development. Passionate about learning new technologies, solving real-world problems, and building reliable applications. A quick learner with good communication and teamwork skills.',
    projects: [
      {
        title: 'TRH (The Real Health) Application',
        description:
          'A healthcare application developed using Flutter, Node.js, Express.js, and MongoDB. It connects users, doctors, and administrators through features such as OTP login, user registration, health questionnaires, appointment booking, doctor availability, consultation management, and role-based dashboards.',
      },
    ],
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
    email: 'kothiyalruchi18@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ruchi-kothiyal-b0608941a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    certificate: 'Valid',
  },

  'saloni-ramola': {
    name: 'Saloni Ramola',
    role: 'Software Development Intern',
    internId: 'AILYT/2026/007',
    education: 'Bachelor of Computer Applications (BCA) – Graduate',
    skills: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    about:
      'A BCA graduate with a strong interest in mobile application and backend development. Passionate about learning new technologies, solving real-world problems, and building reliable applications. A quick learner with good communication and teamwork skills.',
    projects: [
      {
        title: 'TRH (The Real Health) Application',
        description:
          'A healthcare application developed using Flutter, Node.js, Express.js, and MongoDB. It connects users, doctors, and administrators through features such as OTP login, user registration, health questionnaires, appointment booking, doctor availability, consultation management, and role-based dashboards.',
      },
    ],
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
    email: 'ramolasaloni424@gmail.com',
    linkedin: '- https://www.linkedin.com/in/saloni-ramola-81001641a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    certificate: 'Valid',
  },

  suhani: {
    name: 'Suhani',
    role: 'Software Development Intern',
    internId: 'AILYT/2026/008',
    education: 'Bachelor of Computer Applications (BCA) – Graduate',
    skills: [
      'HTML', 
     'CSS',
      'JavaScript',
       'MySQL',
       'Flutter',
        'Node.js', 
        'Express.js',
         'MongoDB' ,
          'Render',
    ],
    about:
      'A BCA graduate with a strong interest in software and web development. Passionate about learning new technologies, solving real-world problems, and building user-friendly applications. A quick learner with good communication and teamwork skills.',
    projects: [
      {
        title: 'The Real Health (TRH) App',
        description:
          'A healthcare application designed to connect users, doctors, and administrators. It includes OTP login, registration, health questionnaires, appointment booking, doctor availability, consultation notes, and appointment management. Contributed to frontend development, UI improvements, testing, and integration support.',
      },
      {
        title: 'CRM Application',
        description:
          'A customer relationship management system developed to manage customers, employees, students, sales, notifications, and daily business activities. It includes role-based dashboards for admin, employees, customers, and students. Contributed to UI development, dashboard modules, database-related tasks, and feature testing.',
      },
    ],
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
    email: 'suhanikashyap478@gmail.com',
    linkedin: '',
    certificate: 'Valid',
  },

  'vidushi-arora': {
    name: 'Vidushi Arora',
    role: 'Software Development Intern',
    internId: 'AILYT/2026/005',
    education: 'Bachelor of Computer Applications (BCA) – Graduate',
    skills: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    about:
      'A BCA graduate with a strong interest in mobile application and backend development. Passionate about learning new technologies, solving real-world problems, and building reliable applications. A quick learner with good communication and teamwork skills.',
    projects: [
      {
        title: 'TRH (The Real Health) Application',
        description:
          'A healthcare application developed using Flutter, Node.js, Express.js, and MongoDB. It connects users, doctors, and administrators through features such as OTP login, user registration, health questionnaires, appointment booking, doctor availability, consultation management, and role-based dashboards.',
      },
    ],
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
    email: 'aroravidushi98@gmail.com',
    linkedin: '',
    certificate: 'Valid',
  },
};

const ITServicesInternProfile = () => {
  const { slug } = useParams();
  const intern = interns[slug];

  if (!intern) {
    return (
      <main className="intern-profile-page">
        <section className="intern-not-found">
          <h1>Intern profile not found</h1>
          <Link to="/it-services/interns">Back to Interns</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="intern-profile-page">
      <section className="intern-profile-container">
        <Link to="/it-services/interns" className="back-to-interns">
          ← Back to Interns
        </Link>

        <div className="intern-profile-header">
          <div className="intern-profile-photo">
            <span>{intern.name.charAt(0)}</span>
          </div>

          <div className="intern-profile-heading">
        
            <h1>{intern.name}</h1>

            <p className="intern-profile-role">{intern.role}</p>

            
          </div>
        </div>

        <div className="intern-details-table-wrapper">
  <table className="intern-details-table">
    <tbody>
      <tr>
        <th>Full Name</th>
        <td>{intern.name}</td>
      </tr>
      <tr>
       <th>Intern ID</th>
       <td>{intern.internId}</td>
      </tr>

      <tr>
        <th>Role</th>
        <td>{intern.role}</td>
      </tr>

      <tr>
        <th>Education</th>
        <td>{intern.education}</td>
      </tr>

      <tr>
        <th>Internship Duration</th>
        <td>
          {intern.startDate} to {intern.endDate}
        </td>
      </tr>

      <tr>
        <th>About</th>
        <td>{intern.about}</td>
      </tr>

      <tr>
        <th>Skills</th>
        <td>
          <div className="profile-skills">
            {intern.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </td>
      </tr>

      <tr>
        <th>Projects</th>
        <td>
          <div className="profile-projects">
  {intern.projects.map((project) => (
    <div className="project-detail" key={project.title}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  ))}
</div>
        </td>
      </tr>

      <tr>
        <th>LinkedIn</th>
        <td>
          {intern.linkedin ? (
            <a
              href={intern.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-table-link"
            >
              View LinkedIn Profile
            </a>
          ) : (
            <span className="table-not-available">
              LinkedIn link coming soon
            </span>
          )}
        </td>
      </tr>
      
      <tr>
  <th>Email</th>
  <td>
    <a
      href={`mailto:${intern.email}`}
      className="profile-table-link"
      
    >
      {intern.email}
    </a>
  </td>
   </tr>

      <tr>
        <th>Certificate</th>
        <td>
          
              Valid
          
        </td>
      </tr>
        
    </tbody>
  </table>
</div>
      </section>
    </main>
  );
};

export default ITServicesInternProfile;

