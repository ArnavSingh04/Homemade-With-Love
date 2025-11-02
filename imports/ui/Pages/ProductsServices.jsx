// ProductsServices.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Productsservices.css";

export const ProductsServices = () => {
  // Get all images from the images folder
  const imageFiles = [
    "WhatsApp Image 2025-11-02 at 7.37.48 PM (1).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.48 PM (2).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.48 PM.jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.49 PM (1).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.49 PM (2).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.49 PM (3).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.49 PM.jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.50 PM (1).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.50 PM (2).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.50 PM.jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.51 PM (1).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.51 PM (2).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.51 PM (3).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.51 PM.jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.52 PM (1).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.52 PM (2).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.52 PM (3).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.52 PM.jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.53 PM (1).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.53 PM (2).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.53 PM.jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.54 PM (1).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.54 PM (2).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.54 PM (3).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.54 PM.jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.55 PM (1).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.55 PM (2).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.55 PM.jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.56 PM (1).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.56 PM (2).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.56 PM (3).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.56 PM.jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.57 PM (1).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.57 PM (2).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.57 PM (3).jpeg",
    "WhatsApp Image 2025-11-02 at 7.37.57 PM.jpeg"
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="products-services-wrapper">
      <div className="intro-section">
        <h1 className="headline">
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

      <div className="collection-section custom-hampers">
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

      {/* Image Gallery Section */}
      <div className="gallery-section">
        <h2>Our Creations Gallery</h2>
        <p className="gallery-intro">
          Browse through our collection of handcrafted products, elegant hampers,
          and artisanal creations - each one made with love and attention to detail.
        </p>
        <div className="image-gallery">
          {imageFiles.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={`/images/${image}`}
                alt={`Product ${index + 1}`}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span>View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img
              src={`/images/${selectedImage}`}
              alt="Full size product"
            />
          </div>
        </div>
      )}

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
          <div className="zigzag-row reverse">
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
