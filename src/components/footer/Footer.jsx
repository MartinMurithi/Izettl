import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <img
            src="/assets/logo.png"
            alt="Company Logo"
            className="footer-logo"
          />
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
              <Link>Home</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Products</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="footer-contact">
            <p>Contact us:</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="footer-social">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
