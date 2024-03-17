import React from "react";
import "./AboutUsHeader.css";

function AboutUsHeader() {
  return (
    <div className="about-us-header">
      <div className="about-us-header-section">
        <h2 className="header-title">About Izettl</h2>
      </div>

      <div className="about-us-header-section-columns">
        <div className="column">
          <h2 className="column-title">Who We Are</h2>
          <p className="column-content">
            At Izettl, we are on a mission to enhance financial inclusion by
            providing affordable and accessible financial products and services
            to smallholder farmers and micro-businesses. Our vision is to become
            the preferred financial partner for these underserved populations in
            Africa and beyond. Guided by our core values of Growth, Reliability,
            Opportunities, Wealth creation, Teamwork, and Humane business
            practices, we are committed to making a positive impact in the lives
            of those we serve.
          </p>
        </div>
        <div className="column">
          <h2 className="column-title">What We Offer</h2>
          <p className="column-content">
            As the digital bank for the world, we empower small-holder farmers
            and micro-businesses to improve their standards of living. Our
            tailored financial services address the unique needs and income
            cycles of our clients, ensuring they have access to the right
            solutions at the right time. Through our interoperable digital
            platform, we facilitate seamless service delivery, particularly for
            marginalized individuals and communities, ensuring no one is left
            behind in the journey towards financial inclusion.
          </p>
        </div>
      </div>

      <div className="mission-vision-section">
        <div className="mission-section">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-text">
            To address the inclusion gap for smallholder farmers (SHFs) and
            Micro Small and Medium Enterprises (MSMEs) who lack access to
            affordable, accessible, demand-driven financial products and
            services that drive higher productivity and income for their
            households.
          </p>
        </div>

        <div className="vision-section">
          <h2 className="vision-title">Our Vision</h2>
          <p className="vision-text">
            To be the preferred financial partner for SHFs and SMEs in Africa
            and beyond
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHeader;
