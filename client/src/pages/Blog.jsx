// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Blog.css';

// const Blog = () => {
//   const navigate = useNavigate();
//   const [blogs, setBlogs] = useState([
//     {
//       id: 1,
//       title: 'Discovering the Future of Ed-Tech',
//       category: 'Discovery',
//       author: 'Kanak Pal KP',
//       date: '2024-02-10',
//       content: 'We believe that education technology is transforming how people learn globally. At Ailyt, we are committed to providing accessible, high-quality learning experiences...',
//       excerpt: 'Exploring how technology is revolutionizing the education sector.'
//     },
//     {
//       id: 2,
//       title: 'Our Brand Philosophy',
//       category: 'Brand',
//       author: 'Kanak Pal KP',
//       date: '2024-02-05',
//       content: 'Our brand is built on the foundation of quality, accessibility, and innovation. We think that every individual deserves an opportunity to learn and grow...',
//       excerpt: 'Understanding what drives our mission at Ailyt.'
//     }
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: 'Discovery',
//     content: '',
//     excerpt: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const categories = [
//     'What We Think',
//     'Discovery',
//     'Brand',
//     'Discussion',
//     'Insights',
//     'Learning',
//     'Innovation'
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.title && formData.content && formData.excerpt) {
//       const newBlog = {
//         id: blogs.length + 1,
//         ...formData,
//         author: 'Kanak Pal KP',
//         date: new Date().toISOString().split('T')[0]
//       };
//       setBlogs([newBlog, ...blogs]);
//       setFormData({ title: '', category: 'Discovery', content: '', excerpt: '' });
//       setShowForm(false);
//       setSubmitted(true);
//       setTimeout(() => setSubmitted(false), 3000);
//     }
//   };

//   return (
//     <section className="blog-section">
//       <div className="blog-container">
//         {/* Back Navigation */}
//         <div className="blog-header-top">
//           <button className="back-btn" onClick={() => navigate('/')}>
//             <span>←</span> Back to Home
//           </button>
//         </div>

//         {/* Main Blog Header */}
//         <div className="blog-header">
//           <h1>Kanak Pal KP Blog</h1>
//           <p className="blog-subtitle">
//             Thoughts, insights, and discoveries about education, technology, and innovation
//           </p>
//           <button className="write-blog-btn" onClick={() => setShowForm(!showForm)}>
//             {showForm ? '✕ Close' : '✎ Write a Blog'}
//           </button>
//         </div>

//         {/* Success Message */}
//         {submitted && (
//           <div className="success-message">
//             ✓ Blog published successfully!
//           </div>
//         )}

//         {/* Blog Write Form */}
//         {showForm && (
//           <div className="blog-form-container">
//             <form className="blog-form" onSubmit={handleSubmit}>
//               <h2>Write a New Blog</h2>

//               <div className="form-group">
//                 <label htmlFor="title">Blog Title *</label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="Enter your blog title"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="category">What We Think Category *</label>
//                 <select
//                   id="category"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   required
//                 >
//                   {categories.map(cat => (
//                     <option key={cat} value={cat}>{cat}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="excerpt">Excerpt *</label>
//                 <textarea
//                   id="excerpt"
//                   name="excerpt"
//                   value={formData.excerpt}
//                   onChange={handleChange}
//                   placeholder="Write a short summary (100-150 words)"
//                   rows="3"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="content">Full Content *</label>
//                 <textarea
//                   id="content"
//                   name="content"
//                   value={formData.content}
//                   onChange={handleChange}
//                   placeholder="Write your complete blog post"
//                   rows="10"
//                   required
//                 />
//               </div>

//               <div className="form-buttons">
//                 <button type="submit" className="submit-btn">Publish Blog</button>
//                 <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Blogs Grid */}
//         <div className="blogs-grid">
//           {blogs.length > 0 ? (
//             blogs.map(blog => (
//               <article key={blog.id} className="blog-card">
//                 <div className="blog-card-header">
//                   <span className="blog-category">{blog.category}</span>
//                   <span className="blog-date">{new Date(blog.date).toLocaleDateString()}</span>
//                 </div>
//                 <h3 className="blog-card-title">{blog.title}</h3>
//                 <p className="blog-card-excerpt">{blog.excerpt}</p>
//                 <div className="blog-card-content">
//                   {blog.content.substring(0, 150)}...
//                 </div>
//                 <div className="blog-card-footer">
//                   <span className="blog-author">By {blog.author}</span>
//                   <button className="read-more-btn">Read More →</button>
//                 </div>
//               </article>
//             ))
//           ) : (
//             <div className="no-blogs">
//               <p>No blogs yet. Be the first to write one!</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* WhatsApp Button */}
//       <a 
//         href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20know%20more%20about%20your%20blogs%20and%20insights"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="whatsapp-button"
//         title="Chat with us on WhatsApp"
//       >
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
//           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.909 1.251c-1.532.766-2.955 1.837-4.112 3.175C2.876 12.768 2.313 14.49 2.313 16.281c0 1.79.563 3.512 1.633 5.003l-1.731 6.413a.75.75 0 00.921.921l6.413-1.731a9.87 9.87 0 005.003 1.633c9.868 0 9.868-7.875 9.868-9.868 0-2.647-.704-5.14-2.04-7.312-1.337-2.171-3.177-4.011-5.348-5.348C17.421 2.017 14.928 1.313 12.281 1.313c-1.792 0-3.512.563-5.003 1.633"/>
//         </svg>
//         WhatsApp
//       </a>
//     </section>
//   );
// };

// export default Blog;
