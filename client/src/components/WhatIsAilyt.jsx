import React, { useEffect, useRef } from 'react';
import './WhatIsAilyt.css';

const WhatIsAilyt = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!cardsRef.current) return;
      const rect = cardsRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // progress 0..1 when section in view
      const progress = Math.min(Math.max((windowH - rect.top) / (windowH + rect.height), 0), 1);
      // move cards upward as user scrolls
      const translate = Math.min(140, progress * 180);
      cardsRef.current.style.transform = `translateY(-${translate}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="what-section">
      <div className="what-inner">
        <div className="what-content">
          <h2>Who we are</h2>
          <p>AILYT is an education and IT-services ecosystem focused on practical skills, project-based learning and career acceleration.</p>
        </div>

        <div className="what-cards" ref={cardsRef}>
          <div className="what-card">Project-based courses</div>
          <div className="what-card">Mentorship & Hiring Support</div>
          <div className="what-card">Industry Projects & Delivery</div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAilyt;
