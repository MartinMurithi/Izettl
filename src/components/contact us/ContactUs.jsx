import React from "react";
import { FaPhoneVolume, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa6";
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
            <a href="tel:+254741214387" className="mobile-cta">
              0741214387
            </a>
          </div>

          <div className="mobile">
            <FaPhoneVolume className="phone-icon" />
            <a href="tel:+254781214387" className="mobile-cta">
              0781214387
            </a>
          </div>

          <div className="mobile">
            <FaRegEnvelope className="phone-icon" />
            <a href="" className="mobile-cta">
              contact@izettl.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
