import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Left: Logo and Social Icons */}
          <div className="footer-left">
            <img
              src="/homemade-logo.png"
              alt="Homemade With Love"
              className="footer-logo"
            />
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/homemadewithlove_hwl?igsh=cWNxbDIxNjl3YnNw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/1F9R2k4vzH/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="mailto:homemadewithlove@rediffmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Center: Useful Links */}
          <div className="footer-center">
            <h3>Useful Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/#/ProductsServices">Our Collections</a>
              </li>
              <li>
                <a href="/#/CorporateGifting">Corporate Gifting</a>
              </li>
              <li>
                <a href="/#/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Right: Get in Touch */}
          <div className="footer-right">
            <h3>Get in Touch</h3>
            <div className="contact-info">
              <p>
                <FaEnvelope className="contact-icon" />
                homemadewithlove@rediffmail.com
              </p>
              <p className="phone-info">📞 +91 98119 90014</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright {new Date().getFullYear()},{" "}
            <strong>Homemade With Love</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
