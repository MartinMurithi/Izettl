import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section-parent">
      <div className="hero-section">
        <p className="hero-text-intro">Big Enough to Grow You</p>
        <h1 className="hero-title">
          Welcome to <span className="hero-company-name">Izettl</span>
        </h1>
        <h2 className="hero-description">
          Empowering small holder farmers (SHFs) and Micro Small and Medium
          Enterprises (MSMEs) growth
        </h2>

        <div className="hero-cta-btns">
          <Link to={"/about-us"} className="hero-btn-learn-more">
            Learn More
          </Link>
          <Link to={"/#contact-us"} className="hero-btn-contact-us">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
