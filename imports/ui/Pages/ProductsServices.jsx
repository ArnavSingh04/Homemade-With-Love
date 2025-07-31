// ProductsServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Productsservices.css";

export const ProductsServices = () => {
  return (
    <section className="products-services-wrapper">
      <div className="intro-section">
        <h1
          className="headline"
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            display: "inline-block"
          }}
        >
          Gifting & Creations: Thoughtfully Designed, Lovingly Made.
        </h1>
        <div className="section-divider" />
        <p className="intro-text">
          Whether you envision a grand, bespoke gesture or seek exquisite,
          naturally crafted treasures, our collections are designed to make
          every moment memorable. From personalized hampers to our cherished
          artisanal products, we pour our heart into every detail.
        </p>
      </div>

      <div
        className="collection-section"
        style={{
          textAlign: "justify",
          backgroundColor: "var(--sage)",
          textAlignLast: "center",
          margin: "5 auto"
        }}
      >
        <h2>Custom Gift Hampers: Uniquely Yours</h2>
        <p>
          For moments that truly matter, we craft custom gift hampers that tell
          your unique story. From consultation to exquisite hand-assembly, we
          curate every element to perfection, reflecting your vision and
          recipient's delight.
        </p>
        <Link to="/#/contact" className="cta-link">
          Dream Your Perfect Gift: Enquire About a Custom Hamper
        </Link>
      </div>

      <div className="collection-section">
        <h2>Treasures from Our Home to Yours: Our Signature Collections</h2>
        <p>
          Explore our cherished range of artisanal products, each made with
          uncompromising quality and a passion for natural goodness.
        </p>

        <div className="zigzag-collections">
          {/* Row 1: Content Left, Image Right */}
          <div className="zigzag-row">
            <div className="collection-card">
              <h3>Skinsational: Nature's Embrace</h3>
              <p>
                Pure indulgence, naturally crafted: our handmade skincare range,
                free from harsh chemicals, offers a wholesome embrace for your
                skin.
              </p>
              <Link to="/#/contact" className="cta-sub-link">
                Explore Skinsational Range
              </Link>
            </div>
            <div className="collection-image">
              <img
                src="/skinsational.jpg"
                alt="Skinsational skincare products"
              />
            </div>
          </div>

          {/* Row 2: Image Left, Content Right */}
          <div className="zigzag-row">
            <div className="collection-image">
              <img src="/food.jpg" alt="Edible range products" />
            </div>
            <div className="collection-card">
              <h3>Edible Range: A Taste of Home, With Love</h3>
              <p>
                Wholesome flavours, handmade memories: from artisan rubs to
                delectable desserts and traditional pickles, crafted with
                authentic goodness.
              </p>
              <Link to="/#/contact" className="cta-sub-link">
                Explore Edible Range
              </Link>
            </div>
          </div>

          {/* Row 3: Content Left, Image Right */}
          <div className="zigzag-row">
            <div className="collection-card">
              <h3>Packaging with Panache</h3>
              <p>
                The art of presentation, perfected: discover our exquisite
                collection of custom-designed boxes, elegant trays and charming
                baskets for every gift.
              </p>
              <Link to="/#/contact" className="cta-sub-link">
                Explore Packaging Options
              </Link>
            </div>
            <div className="collection-image">
              <img
                src="/gifting.jpg"
                alt="Elegant packaging options"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <Link to="/#/contact" className="main-cta-button">
          Explore Our Collections - Dream Your Perfect Gift
        </Link>
      </div>
    </section>
  );
};
