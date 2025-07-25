import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left: Logo */}
        <img
          src="/homemade-logo.jpg"
          alt="Homemade With Love"
          className="footer-logo"
        />

        {/* Right: Socials + Info */}
        <div className="footer-content">
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
          </div>

          <div className="footer-info">
            <p>
              <strong>Homemade With Love</strong>
            </p>
            <p>📞 +91 98119 90014</p>
            <p>✉️ homemadewithlove@rediffmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Homemade With Love. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
