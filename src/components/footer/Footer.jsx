import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneVolume, FaRegEnvelope, FaLinkedin } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <Link to={"/"}>
            <img
              src="/assets/logo.png"
              alt="Izettl Logo"
              className="footer-logo"
            />
          </Link>
          <p className="footer-company-description">
            Our mission is to uplift smallholder farmers and micro-enterprises
            by providing accessible and affordable financial solutions tailored
            to their needs.
          </p>
        </div>

        <div className="footer-column">
          <h5 className="quick-links-title">Quick Links</h5>
          <ul className="footer-nav-links">
            <li className="quick-link">
              <Link to={"/"} className="footer-link">
                Home
              </Link>
            </li>

            <li className="quick-link">
              <Link to={"/about-us"} className="footer-link">
                About Us
              </Link>
            </li>

            <li className="quick-link">
              <Link to={"/#products"} className="footer-link">
                Products
              </Link>
            </li>

            <li className="quick-link">
              <Link to={"/#contact-us"} className="footer-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="contacts-title">Contact Us</h5>
          <ul className="footer-contacts">
            <li className="footer-contact">
              <a
                href="tel:+254741214387"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaPhoneVolume /> 0741214387
              </a>
            </li>
            <li className="footer-contact">
              <a
                href="tel:+254781214387"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaPhoneVolume /> 0781214387
              </a>
            </li>

            <li className="footer-contact">
              <a
                href="mailto:contact@izettl.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaRegEnvelope /> contact@izettl.co.ke
              </a>
            </li>

            <li className="footer-contact">
              <a
                href="https://www.linkedin.com/posts/arnold-namusonge-aihrm-fkim-b9735538_customercentricity-bringingpossibilitiestolife-activity-7029994011037741056-LN2N?utm_source=share&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right-parent">
        <p className="copy-right">Copyright © 2024 | Designed by Techcrast</p>
      </div>
    </footer>
  );
}

export default Footer;
