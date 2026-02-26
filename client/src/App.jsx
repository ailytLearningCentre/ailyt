import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LearningNavbar from './components/LearningNavbar';
import ITServicesNavbar from './components/ITServicesNavbar';
import CommunityNavbar from './components/CommunityNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learning from './pages/Learning';
import ITServices from './pages/ITServices';
import Community from './pages/Community';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import BlogPage from './pages/BlogPage';
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
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/community" element={<Community />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* Redirect unknown routes to the home page for MVP */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function NotFound() {
  return <Navigate to="/" replace />;
}

export default App;
