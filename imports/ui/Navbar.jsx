import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#ADC1A1", // soft sage
    color: "#000000",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
  };

  const brandContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    textDecoration: "none"
  };

  const logoStyle = {
    width: "42px",
    height: "42px",
    objectFit: "contain"
  };

  const brandTextStyle = {
    fontSize: "1.8rem",
    fontWeight: 600,
    fontFamily: "'Playfair Display', serif",
    color: "#2F4F4F",
    letterSpacing: "0.5px",
    lineHeight: 1.2
  };

  const subTextStyle = {
    fontSize: "0.8rem",
    color: "#333",
    fontStyle: "italic",
    fontFamily: "Georgia, serif"
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap"
  };

  const linkStyle = {
    color: "#000000",
    textDecoration: "none",
    fontWeight: 500,
    padding: "0.3rem 0.6rem",
    borderRadius: "0.3rem",
    transition: "background-color 0.3s, color 0.3s"
  };

  const linkHoverStyle = {
    backgroundColor: "#355E3B"
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/ProductsServices", label: "Products & Services" },
    { to: "/CorporateGifting", label: "Corporate Gifting" },
    { to: "/contact", label: "Contact Us" }
  ];

  return (
    <nav style={navStyle}>
      <Link to="/" style={brandContainerStyle}>
        <img src="/homemade-logo.png" alt="Logo" style={logoStyle} />
        <div>
          <span style={brandTextStyle}>
            <span style={{ fontStyle: "italic", color: "#4B6043" }}>
              Homemade
            </span>{" "}
            <span
              style={{ fontSize: "1.5rem", fontWeight: 100, color: "#4B6043", fontStyle: "italic" }}
            >
              With
            </span>{" "}
            <span
              style={{ color: "#4B6043", fontStyle: "italic" }}
            >
              Love
            </span>
          </span>
          <div style={subTextStyle}>Crafted Gifting & Skincare</div>
        </div>
      </Link>
      <div style={linkContainerStyle}>
        {navLinks.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            style={linkStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                linkHoverStyle.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
