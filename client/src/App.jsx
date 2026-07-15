import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LearningNavbar from './components/LearningNavbar';
import ITServicesNavbar from './components/ITServicesNavbar';
import CommunityNavbar from './components/CommunityNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learning from './pages/Learning';
import LearningCourses from './pages/LearningCourses';
import LearningInternshipPrograms from './pages/LearningInternshipPrograms';
import LearningAbout from './pages/LearningAbout';
import LearningContact from './pages/LearningContact';
import LearningEnquiries from './pages/LearningEnquiries';
import ITServices from './pages/ITServices';
import ITServicesServices from './pages/ITServicesServices';
import ITServicesIndustries from './pages/ITServicesIndustries';
import ITServicesProjects from './pages/ITServicesProjects';
import ITServicesInterns from './pages/ITServicesInterns';
import ITServicesInternProfile from './pages/ITServicesInternProfile';
import ITServicesHireInterns from './pages/ITServicesHireInterns';
import ITServicesContact from './pages/ITServicesContact';
import Community from './pages/Community';
import Courses from './pages/Courses';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import BlogPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = require('react-router-dom').useLocation();
  const isLearning = location.pathname.startsWith('/learning');
  const isITServices = location.pathname.startsWith('/it-services');
  const isCommunity = location.pathname.startsWith('/community');

  return (
    <>
      {isCommunity ? <CommunityNavbar /> : isLearning ? <LearningNavbar /> : isITServices ? <ITServicesNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/learning/courses" element={<LearningCourses />} />
        <Route path="/learning/internship-programs" element={<LearningInternshipPrograms />} />
        <Route path="/learning/about" element={<LearningAbout />} />
        <Route path="/learning/contact" element={<LearningContact />} />
        <Route path="/learning/enquiries" element={<LearningEnquiries />} />
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/it-services/services" element={<ITServicesServices />} />
        <Route path="/it-services/industries" element={<ITServicesIndustries />} />
        <Route path="/it-services/projects" element={<ITServicesProjects />} />
        <Route path="/it-services/interns" element={<ITServicesInterns />} />
        <Route path="/it-services/interns/:slug" element={<ITServicesInternProfile />} />
        <Route path="/it-services/hire-interns" element={<ITServicesHireInterns />} />
        <Route path="/it-services/contact" element={<ITServicesContact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/details" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

