// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#C7D1C5", // soft sage
    color: "#000000", // black text
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
  };

  const brandStyle = {
    fontWeight: "bold",
    fontSize: "1.8rem",
    color: "#000000",
    textDecoration: "none",
    fontFamily: "serif"
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
    backgroundColor: "#D9BFF2" // lavender
  };

  const navLinks = [
    { to: "/about", label: "About Us" },
    { to: "/ProductsServices", label: "Products & Services" },
    { to: "/CorporateGifting", label: "Corporate Gifting" },
    { to: "/contact", label: "Contact Us" }
  ];

  return (
    <nav style={navStyle}>
      <Link to="/" style={brandStyle}>
        Homemade With Love
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
