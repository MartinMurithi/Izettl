import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div>
      <section className="about-section-parent">
        <div className="about-section">
          <div className="about-us-image-parent">
            <img
              src="/assets/About-Us.jpeg"
              alt="About"
              loading="lazy"
              className="about-us-image"
            />
          </div>
          <div className="about-content">
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              Welcome to Izettl - where financial inclusion meets empowerment.
              At Izettl, our mission is to enhance financial inclusion by providing affordable and accessible financial products and services to smallholder farmers and micro-businesses. We envision becoming the preferred financial partner for these underserved populations in Africa and beyond. Our values - Growth, Reliability, Opportunities, Wealth creation, Teamwork, and Humane business practices - guide everything we do.
            </p>
            <Link to="/about-us" className="read-more-btn">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
