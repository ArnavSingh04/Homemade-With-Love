// CorporateGifting.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./corporategifting.css";

export const CorporateGifting = () => {
  return (
    <section className="corporate-wrapper">
      <div className="corporate-hero">
        <h1 className="corporate-title">Corporate Gifting: Elevate Your Brand, Naturally.</h1>
        <div className="section-divider" />
        <p className="intro">
          Leave a lasting impression with corporate gifts that speak volumes
          about your values. <strong>Homemade With Love</strong> crafts bespoke
          solutions that reflect sophistication, appreciation, and a commitment
          to quality.
        </p>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          Move beyond generic. We offer customized branding, diverse product
          inclusion (from our edible/skincare ranges to unique sourced items),
          and elegant packaging — ensuring your corporate gifts are truly
          memorable and impactful.
        </p>
      </div>

      <div className="process-section">
        <h2>Our Process</h2>
        <p>
          For our corporate patrons, we’ve refined a process that’s both
          creative and seamless:
        </p>
        <div className="process-steps">
          <div className="step">
            <h3>1. The Vision Call</h3>
            <p>
              We start with a conversation to understand your objectives,
              budget, and timelines.
            </p>
          </div>
          <div className="step">
            <h3>2. Tailored Concept & Curated Selection</h3>
            <p>
              Based on your needs, we present a bespoke concept with curated
              product options — from our artisanal range to specially sourced
              items.
            </p>
          </div>
          <div className="step">
            <h3>3. Design & Customization</h3>
            <p>
              We create mockups that seamlessly incorporate your branding and
              personalized elements.
            </p>
          </div>
          <div className="step">
            <h3>4. Crafting with Care</h3>
            <p>
              With designs finalized, we handcraft and assemble each gift with
              meticulous care and attention to detail.
            </p>
          </div>
          <div className="step">
            <h3>5. Seamless Delivery</h3>
            <p>
              Your completed gifts are carefully delivered to your specified
              locations, ready to leave a lasting impression.
            </p>
          </div>
        </div>
      </div>

      <div className="cta-corporate">
        <Link to="/contact?type=corporate-gifting" className="cta-button">
          Partner with Us for Your Corporate Gifting Needs: Enquire Now
        </Link>
      </div>
    </section>
  );
};
