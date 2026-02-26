// import React, { useState, useEffect } from 'react';
// import './Reviews.css';

// const Reviews = () => {
//   const reviews = [
//     {
//       id: 1,
//       name: 'Priya Sharma',
//       title: 'Full Stack Developer',
//       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
//       review: 'Ailyt transformed my career! The courses are comprehensive and the instructors are incredibly supportive.',
//       rating: 5
//     },
//     {
//       id: 2,
//       name: 'Rahul Kumar',
//       title: 'Data Scientist',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
//       review: 'The AI and data science course was exactly what I needed. Got placed in a top tech company within 3 months!',
//       rating: 5
//     },
//     {
//       id: 3,
//       name: 'Sneha Patel',
//       title: 'Mobile App Developer',
//       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
//       review: 'Excellent project-based learning approach. I built 3 real apps during my course and landed an internship!',
//       rating: 5
//     },
//     {
//       id: 4,
//       name: 'Anand Singh',
//       title: 'Business Analyst',
//       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
//       review: 'The English speaking course improved my communication skills dramatically. Highly recommended!',
//       rating: 4
//     },
//     {
//       id: 5,
//       name: 'Neha Gupta',
//       title: 'Frontend Developer',
//       image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
//       review: 'Ailyt provided me with the skills and confidence to transition into tech. Best investment ever!',
//       rating: 5
//     },
//     {
//       id: 6,
//       name: 'Vikram Desai',
//       title: 'Software Engineer',
//       image: 'https://images.unsplash.com/photo-1519085360771-9852612628ac?w=150&h=150&fit=crop',
//       review: 'The mentorship and career guidance were phenomenal. I found my dream job within months!',
//       rating: 5
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [reviews.length]);

//   const getVisibleReviews = () => {
//     return [
//       reviews[currentIndex],
//       reviews[(currentIndex + 1) % reviews.length],
//       reviews[(currentIndex + 2) % reviews.length]
//     ];
//   };

//   const renderStars = (rating) => {
//     return (
//       <div className="stars">
//         {[...Array(5)].map((_, i) => (
//           <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section className="reviews-section" id="reviews">
//       <div className="reviews-container">
//         <h2>Student Reviews & Testimonials</h2>
//         <p className="section-subtitle">Join thousands of successful learners</p>

//         <div className="reviews-carousel">
//           <div className="reviews-grid">
//             {getVisibleReviews().map((review) => (
//               <div key={review.id} className="review-card">
//                 <div className="review-header">
//                   <img src={review.image} alt={review.name} className="reviewer-image" />
//                   <div className="reviewer-info">
//                     <h4>{review.name}</h4>
//                     <p>{review.title}</p>
//                   </div>
//                 </div>
//                 {renderStars(review.rating)}
//                 <p className="review-text">"{review.review}"</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="carousel-indicators">
//           {reviews.map((_, index) => (
//             <button
//               key={index}
//               className={`indicator ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => setCurrentIndex(index)}
//             ></button>
//           ))}
//         </div>
//       </div>

//       {/* Clients Section */}
//       <div className="clients-section">
//         <h2>Our Clients & Partners</h2>
//         <p className="section-subtitle">Trusted by leading organizations</p>
//         <div className="clients-grid">
//           <div className="client-logo">
//             <span>Google</span>
//           </div>
//           <div className="client-logo">
//             <span>Amazon</span>
//           </div>
//           <div className="client-logo">
//             <span>Microsoft</span>
//           </div>
//           <div className="client-logo">
//             <span>Meta</span>
//           </div>
//           <div className="client-logo">
//             <span>Apple</span>
//           </div>
//           <div className="client-logo">
//             <span>IBM</span>
//           </div>
//           <div className="client-logo">
//             <span>TCS</span>
//           </div>
//           <div className="client-logo">
//             <span>Infosys</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;
