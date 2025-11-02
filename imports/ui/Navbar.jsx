import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/ProductsServices", label: "Products & Services" },
    { to: "/CorporateGifting", label: "Corporate Gifting" },
    { to: "/contact", label: "Contact Us" }
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img
          src="/homemade-logo.png"
          alt="Homemade With Love Logo"
          className="navbar-logo"
        />
        <div className="navbar-brand-text">
          <span className="brand-name">
            <span className="homemade">Homemade</span>{" "}
            <span className="with">With</span>{" "}
            <span className="love">Love</span>
          </span>
          <div className="brand-subtitle">Crafted Gifting & Skincare</div>
        </div>
      </Link>
      <div className="navbar-links">
        {navLinks.map((item, i) => (
          <Link key={i} to={item.to} className="navbar-link">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
