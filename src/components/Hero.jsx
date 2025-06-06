import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>InnovApp Solutions</h1>
        <h2>Innovative Solutions for Modern Businesses</h2>
        <p>We transform your ideas into powerful digital experiences that drive growth and success.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <div className="hero-shape"></div>
      </div>
    </section>
  );
};

export default Hero;