import React, { useRef, useEffect } from 'react';
import './Founder.css';
import founderPhoto from '../assets/images/DAD_pic_linkedin.png';

const Founder = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.min(Math.max((windowH - rect.top) / (windowH + rect.height), 0), 1);
      // scale from 0.9 -> 1.05
      const scale = 0.9 + progress * 0.25;
      el.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="founder-section">
      <div className="founder-inner">
        <div className="founder-photo">
          <img ref={imgRef} src={founderPhoto} alt="Founder" />
        </div>
        <div className="founder-bio">
          <h2>Meet Our Founder</h2>
          <h3>Harcharan Singh Sondhi — Founder & CEO</h3>
          <p>Harcharan is a visionary leader and educator with over 12 years' experience in building teams and teaching practical software skills</p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
