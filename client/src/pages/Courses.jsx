// import React, { useState } from 'react';
// import '../styles/Courses.css';

// const Courses = () => {
//   const [filter, setFilter] = useState('all');

//   const courses = [
//     {
//       id: 1,
//       title: 'Full Stack Web Development',
//       category: 'coding',
//       level: 'intermediate',
//       price: '$299',
//       duration: '12 weeks',
//       image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop',
//       description: 'Master full stack development with React, Node.js, and MongoDB',
//       students: 450
//     },
//     {
//       id: 2,
//       title: 'React Mastery',
//       category: 'coding',
//       level: 'intermediate',
//       price: '$199',
//       duration: '8 weeks',
//       image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&h=200&fit=crop',
//       description: 'Build modern UIs with React hooks, state management, and more',
//       students: 320
//     },
//     {
//       id: 3,
//       title: 'Data Science with AI',
//       category: 'coding',
//       level: 'advanced',
//       price: '$399',
//       duration: '16 weeks',
//       image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop',
//       description: 'Deep dive into machine learning, AI, and data analysis',
//       students: 280
//     },
//     {
//       id: 4,
//       title: 'Mobile App Development',
//       category: 'coding',
//       level: 'intermediate',
//       price: '$299',
//       duration: '12 weeks',
//       image: 'https://images.unsplash.com/photo-1516321318423-f06f70504c11?w=300&h=200&fit=crop',
//       description: 'Create iOS and Android apps with React Native',
//       students: 210
//     },
//     {
//       id: 5,
//       title: 'Spoken English Mastery',
//       category: 'non-coding',
//       level: 'beginner',
//       price: '$99',
//       duration: '8 weeks',
//       image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=200&fit=crop',
//       description: 'Improve your English speaking skills and confidence',
//       students: 560
//     },
//     {
//       id: 6,
//       title: 'Business Communication',
//       category: 'non-coding',
//       level: 'intermediate',
//       price: '$149',
//       duration: '6 weeks',
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
//       description: 'Master professional communication for the workplace',
//       students: 340
//     },
//     {
//       id: 7,
//       title: 'Python for Beginners',
//       category: 'coding',
//       level: 'beginner',
//       price: '$149',
//       duration: '8 weeks',
//       image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop',
//       description: 'Learn Python programming from scratch',
//       students: 620
//     },
//     {
//       id: 8,
//       title: 'Interview Preparation',
//       category: 'non-coding',
//       level: 'intermediate',
//       price: '$199',
//       duration: '10 weeks',
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
//       description: 'Ace your interviews with expert guidance',
//       students: 430
//     }
//   ];

//   const filteredCourses = filter === 'all' 
//     ? courses 
//     : courses.filter(course => course.category === filter);

//   return (
//     <section className="courses-section">
//       <div className="courses-container">
//         <h1>Our Courses</h1>
//         <p className="courses-subtitle">Choose from our wide range of quality courses</p>

//         <div className="filter-buttons">
//           <button 
//             className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
//             onClick={() => setFilter('all')}
//           >
//             All Courses
//           </button>
//           <button 
//             className={`filter-btn ${filter === 'coding' ? 'active' : ''}`}
//             onClick={() => setFilter('coding')}
//           >
//             Coding
//           </button>
//           <button 
//             className={`filter-btn ${filter === 'non-coding' ? 'active' : ''}`}
//             onClick={() => setFilter('non-coding')}
//           >
//             Non-Coding
//           </button>
//         </div>

//         <div className="courses-grid">
//           {filteredCourses.map((course) => (
//             <div key={course.id} className="course-card">
//               <div className="course-image">
//                 <img src={course.image} alt={course.title} />
//                 <span className="course-level">{course.level}</span>
//               </div>
//               <div className="course-content">
//                 <h3>{course.title}</h3>
//                 <p className="course-description">{course.description}</p>
//                 <div className="course-details">
//                   <span className="duration">📅 {course.duration}</span>
//                   <span className="students">👥 {course.students} students</span>
//                 </div>
//                 <div className="course-footer">
//                   <span className="price">{course.price}</span>
//                   <button className="enroll-btn">Enroll Now</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
