// ProductsServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Productsservices.css";

export const ProductsServices = () => {
  return (
    <section className="products-services-wrapper">
      <div className="intro-section">
        <h1 className="headline">
          Gifting & Creations: Thoughtfully Designed, Lovingly Made.
        </h1>
        <p className="intro-text">
          Whether you envision a grand, bespoke gesture or seek exquisite,
          naturally crafted treasures, our collections are designed to make
          every moment memorable. From personalized hampers to our cherished
          artisanal products, we pour our heart into every detail.
        </p>
      </div>

      <div className="collection-section" style={{ textAlign: "center" }}>
        <h2>Custom Gift Hampers: Uniquely Yours</h2>
        <p>
          For moments that truly matter, we craft custom gift hampers that tell
          your unique story. From consultation to exquisite hand-assembly, we
          curate every element to perfection, reflecting your vision and
          recipient's delight.
        </p>
        <Link to="/contact?type=custom-hamper" className="cta-link">
          Dream Your Perfect Gift: Enquire About a Custom Hamper
        </Link>
      </div>

      <div className="collection-section">
        <h2>Treasures from Our Home to Yours: Our Signature Collections</h2>
        <p>
          Explore our cherished range of artisanal products, each made with
          uncompromising quality and a passion for natural goodness.
        </p>
        <div className="sub-collections">
          <div className="collection-card">
            <h3>Skinsational: Nature's Embrace</h3>
            <p>
              Pure indulgence, naturally crafted: our handmade skincare range,
              free from harsh chemicals, offers a wholesome embrace for your
              skin.
            </p>
            <Link to="/gallery/skinsational" className="cta-sub-link">
              Explore Skinsational Range
            </Link>
          </div>
          <div className="collection-card">
            <h3>Edible Range: A Taste of Home, With Love</h3>
            <p>
              Wholesome flavours, handmade memories: from artisan rubs to
              delectable desserts and traditional pickles, crafted with
              authentic goodness.
            </p>
            <Link to="/gallery/edibles" className="cta-sub-link">
              Explore Edible Range
            </Link>
          </div>
          <div className="collection-card">
            <h3>Packaging with Panache</h3>
            <p>
              The art of presentation, perfected: discover our exquisite
              collection of custom-designed boxes, elegant trays and charming
              baskets for every gift.
            </p>
            <Link to="/gallery/packaging" className="cta-sub-link">
              Explore Packaging Options
            </Link>
          </div>
        </div>  
      </div>

      <div className="cta-section">
        <Link to="/contact?type=custom-hamper" className="main-cta-button">
          Explore Our Collections - Dream Your Perfect Gift
        </Link>
      </div>
    </section>
  );
};
