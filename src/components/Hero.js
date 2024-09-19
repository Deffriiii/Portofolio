import React, { useEffect } from 'react';
import '../styles/Hero.css';
import feather from 'feather-icons';

const Hero = () => {
  useEffect(() => {
    feather.replace(); // Pastikan icon diganti setelah komponen dirender
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Defri Prasetyo</h1>
        <p>Junior Front-end Developer</p>
        <a href="/CV_Defri_Prasetyo.pdf" download className="download-btn">
          Download CV
        </a>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/defriprasetyo/" target="_blank" rel="noopener noreferrer">
          <i data-feather="linkedin" className="social-icon" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i data-feather="github" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/deffriiiiii/?hl=id" target="_blank" rel="noopener noreferrer">
          <i data-feather="instagram" className="social-icon" />
        </a>
        <a href="mailto:defriprasetyo1902@gmail.com" target="_blank" rel="noopener noreferrer">
          <i data-feather="mail" className="social-icon" />
        </a>
      </div>
      
    </section>
  );
};

export default Hero;
