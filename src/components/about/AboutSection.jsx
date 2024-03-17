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
              src="/assets/about-image.jpg"
              alt="About Image"
              loading="lazy"
              className="about-us-image"
            />
          </div>
          <div className="about-content">
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              Welcome to Izettl - where financial inclusion meets empowerment.
              Our mission is to uplift smallholder farmers and micro-enterprises
              by providing accessible and affordable financial solutions
              tailored to their needs. Through innovative digital banking
              services and a commitment to customer success, we strive to unlock
              prosperity and drive sustainable growth. Discover more about our
              journey and impact below.
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
