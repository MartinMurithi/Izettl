import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <Link to={"/"}>
            {" "}
            <img
              src="/assets/logo.png"
              alt="Company Logo"
              className="footer-logo"
            />
          </Link>

          <p className="footer-description">
            Our mission is to uplift smallholder farmers and micro-enterprises
            by providing accessible and affordable financial solutions tailored
            to their needs. Through innovative digital banking services and a
            commitment to customer success, we strive to unlock prosperity and
            drive sustainable growth.
          </p>
        </div>
        <div className="footer-column" id="quick-links">
          <ul className="footer-nav">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"/#products"}>Our Products</Link>
            </li>
            <li>
              <Link to={"/#contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="footer-contact">
            <p>Contact us:</p>
            <a href="mailto:info@example.com" className="footer-link">
              Email: info@example.com
            </a>
            <br />
            <a type="tel" href="+2547123456789" className="footer-link">
              Phone: +1234567890
            </a>
          </div>
          <div className="footer-social">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
