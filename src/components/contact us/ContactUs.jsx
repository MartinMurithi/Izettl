import React from "react";
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa6";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="get-in-touch-parent-section" id="contact-us">
      <div className="get-in-touch-section">
        <div className="get-in-touch-title">Get in touch</div>
        <p className="get-in-touch-description">
          We are determined to carry on our mission for as long as there will be
          a demand for that kind of care.
        </p>
        <h5 className="get-in-touch-cta">Call us! we are available 24/7</h5>

        <div className="reach-us">
          <div className="mobile">
            <FaPhoneVolume className="phone-icon" />
            <a href="tel:+254712345678" className="mobile-cta">
              (254) 712 345678
            </a>
          </div>

          <div className="mobile">
            <FaRegEnvelope className="phone-icon" />
            <a href="mailto:info@example.com" className="mobile-cta">
              info@Izettl.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
