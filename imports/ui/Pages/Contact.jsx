import React, { useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import "./contactus.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [],
    message: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((item) => item !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interests: formData.interests.join(", "),
      message: formData.message
    };

    try {
      const response = await fetch("https://formspree.io/f/xyzpdzla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert("Thank you! We'll get back to you shortly.");
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send. Please try again.");
    }
  };

  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">Let's Connect & Create</h1>
      <p className="contact-intro">
        Ready to craft a truly special gift, discuss bespoke packaging, or
        explore our curated collections? <br />
        We'd love to hear from you.
      </p>

      <div className="contact-info">
        <p>
          <strong>T:</strong> +91 98119 90014
        </p>
        <p>
          <strong>E:</strong> homemadewithlove@rediffmail.com
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          required
          onChange={handleChange}
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          required
          onChange={handleChange}
        />

        <label htmlFor="phone">
          Your Phone <span className="optional">(Optional)</span>:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label>I'm Interested In:</label>
        <div className="checkbox-group">
          {[
            "Creating a Custom Gift Hamper",
            "Learning more about Skinsational (Organic Skincare)",
            "Exploring the edible range (rubs, desserts, pickles, cakes & bakes etc.)",
            "Discovering the packaging solutions",
            "Discussing corporate gifting solutions",
            "A general inquiry / just saying Hello!"
          ].map((interest, index) => (
            <label key={index} className="checkbox-label">
              <input
                type="checkbox"
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={handleChange}
              />
              <span className="checkbox-text">{interest}</span>
            </label>
          ))}
        </div>

        <label htmlFor="message">Tell Us More:</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={formData.message}
          placeholder="Share details—occasion, recipients, theme, ideas..."
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="contact-button">
          Let's Get Started
        </button>
      </form>

      <div className="social-section">
        <p className="follow-label">Follow Us:</p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/homemadewithlove_hwl?igsh=cWNxbDIxNjl3YnNw"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram-link"
          >
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
          <span className="divider">|</span>
          <a
            href="https://www.facebook.com/share/1F9R2k4vzH/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook-link"
          >
            <Facebook size={20} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};
