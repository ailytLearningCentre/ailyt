// import React from 'react';
// import './Services.css';

// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       icon: '💻',
//       title: 'Coding Courses',
//       description: 'Master web development, mobile app development, data science with AI, and more with industry experts.',
//       courses: ['Web Development', 'Mobile App Dev', 'Data Science with AI', 'Cloud Computing']
//     },
//     {
//       id: 2,
//       icon: '🗣️',
//       title: 'English Speaking',
//       description: 'Improve your communication skills and confidence with our comprehensive English language programs.',
//       courses: ['Spoken English', 'Business Communication', 'Interview Prep', 'Presentation Skills']
//     },
//     {
//       id: 3,
//       icon: '🎓',
//       title: 'Internship Programs',
//       description: 'Get real-world experience through our internship programs with leading tech companies.',
//       courses: ['Full Stack Development', 'Frontend Development', 'Backend Development', 'Data Analysis']
//     },
//     {
//       id: 4,
//       icon: '🏆',
//       title: 'Certifications',
//       description: 'Earn recognized certifications that boost your career prospects and professional credibility.',
//       courses: ['Professional Certificates', 'Industry Badges', 'Portfolio Building', 'Job Readiness']
//     }
//   ];

//   return (
//     <section className="services-section" id="services">
//       <div className="services-container">
//         <h2>Our Services</h2>
//         <p className="section-subtitle">Comprehensive learning solutions tailored for your success</p>

//         <div className="services-grid">
//           {services.map((service) => (
//             <div key={service.id} className="service-card">
//               <div className="service-icon">{service.icon}</div>
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//               <div className="service-courses">
//                 {service.courses.map((course, idx) => (
//                   <span key={idx} className="course-tag">{course}</span>
//                 ))}
//               </div>
//               <button className="service-btn">Learn More</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
