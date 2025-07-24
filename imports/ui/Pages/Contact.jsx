import React, { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! We'll get back to you shortly.");
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
        <p>
          <strong>Location:</strong> Delhi NCR
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChange}
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={handleChange}
        />

        <label htmlFor="phone">
          Your Phone <span className="optional">(Optional)</span>:
        </label>
        <input type="tel" name="phone" id="phone" onChange={handleChange} />

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
              <input type="checkbox" value={interest} onChange={handleChange} />{" "}
              {interest}
            </label>
          ))}
        </div>

        <label htmlFor="message">Tell Us More:</label>
        <textarea
          name="message"
          id="message"
          rows="5"
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
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <span className="divider">|</span>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};
