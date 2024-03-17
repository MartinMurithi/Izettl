import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="get-in-touch-parent-section">
      <div className="get-in-touch-section">
        <div className="get-in-touch-title">Get in touch</div>
        <p className="get-in-touch-description">
          We are determined to carry on our mission for as long as there will be
          a demand for that kind of care.
        </p>
        <h5 className="get-in-touch-cta">Call us! we are available 24/7</h5>

        <div className="mobile">
          <FaPhoneVolume className="phone-icon" />
          <a href="tel:+254712345678"  className="mobile-cta">(254) 712 345678</a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
