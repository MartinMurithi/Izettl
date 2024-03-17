import React from 'react';
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section-parent">
        <div className="hero-section">
            <p className="hero-text-intro">Big Enough to Grow You</p>
             <h1 className="hero-title">Welcome to <span className='hero-company-name'>Izettl</span></h1>
      <h2 className="hero-description">
        Empowering small-holder farmers and micro-business growth
      </h2>

      <div className="hero-cta-btns">
        <button className='hero-btn-learn-more'>Learn More</button>
        <button className="hero-btn-contact-us">Get In Touch</button>
      </div>
        </div>
     
    </div>
  );
}

export default Hero