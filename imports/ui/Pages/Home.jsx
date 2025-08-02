import "./Home.css";
import React, { useRef, useState, useEffect } from "react";

export const Home = () => {
  const logoStyle = {
    marginTop: "1rem",
    width: "120px",
    height: "auto"
  };

  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const scrollToCardIndex = (index) => {
    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll(".testimonial-card");
    if (!cards.length) return;

    const card = cards[index];
    const scrollLeft =
      card.offsetLeft - (carousel.offsetWidth - card.offsetWidth) / 2;

    carousel.scrollTo({
      left: scrollLeft,
      behavior: "smooth"
    });

    setCardIndex(index);
  };

  const scrollLeft = () => {
    const newIndex = Math.max(cardIndex - 1, 0);
    scrollToCardIndex(newIndex);
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll(".testimonial-card");
    const newIndex = Math.min(cardIndex + 1, cards.length - 1);
    scrollToCardIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && carouselRef.current) {
        const cards = carouselRef.current.querySelectorAll(".testimonial-card");
        const nextIndex = (cardIndex + 1) % cards.length;
        scrollToCardIndex(nextIndex);
      }
    }, 2500); // scroll every 4s

    return () => clearInterval(interval);
  }, [isHovered, cardIndex]);


  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Crafting Joy, Naturally.
          <br /> Welcome to Homemade With Love.
        </h1>
        <p>Where Every Creation is a Hug, a Memory, a Story.</p>
        <a href="/#/about" className="cta-button">
          Discover Our World
        </a>
        <div className="hero-logo-container">
          <img
            src="/homemade-logo.png"
            alt="Homemade With Love Logo"
            style={logoStyle}
          />
        </div>
      </section>

      {/* Heartfelt Journey */}
      <section id="journey" className="journey">
        <h2>Our Heartfelt Journey</h2>
        <p>
          In 2012, our journey began not in a boardroom, but in a warm kitchen
          filled with curiosity and care. When we couldn’t find products gentle
          enough for our loved ones, we decided to make our own — from pantry
          essentials to skincare, every item crafted with purity, intention, and
          passion.
        </p>
        <p className="read-more">
          <a href="/#/about">Read More &rarr;</a>
        </p>
      </section>

      {/* Unique Value Section */}
      <section className="unique">
        <h2>What Makes Us Unique?</h2>
        <p className="promise">Our Promise: Crafted with Heart.</p>
        <div className="icon-grid">
          <div className="icon-box">
            <span role="img" aria-label="hands">
              👐
            </span>
            <h3>Handcrafted with Passion</h3>
            <p>
              Every product tells a personal story—no mass production, only
              meaningful creation.
            </p>
          </div>
          <div className="icon-box">
            <span role="img" aria-label="plant">
              🌱
            </span>
            <h3>Naturally Sourced</h3>
            <p>
              Our process is rooted in purity and sustainability, from
              ingredients to packaging.
            </p>
          </div>
          <div className="icon-box">
            <span role="img" aria-label="paint palette">
              🎨
            </span>
            <h3>Artisanally Curated</h3>
            <p>
              Designed with love, tailored to occasions, and finished with
              exquisite detail.
            </p>
          </div>
          <div className="icon-box">
            <span role="img" aria-label="brush">
              🖌️
            </span>
            <h3>Your Vision, Our Artistry</h3>
            <p>
              From hampers to packaging, we bring your ideas to beautiful life.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>Our patrons say it best</h2>

        <div
          className="testimonial-carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            className="arrow left"
            onClick={scrollLeft}
            aria-label="Previous Testimonial"
          >
            &#10094;
          </button>

          <div className="testimonial-carousel" ref={carouselRef}>
            <div className="testimonial-spacer" /> {/* Left Spacer */}
            <div className="testimonial-card">
              <p>
                "Each little box was a work of art and the skincare inside was
                absolute bliss!"
              </p>
              <cite>— Ananya Sharma, Wedding Planner</cite>
            </div>
            <div className="testimonial-card">
              <p>
                "The sustainable packaging left a wonderful impression. Simply
                outstanding!"
              </p>
              <cite>— Rajesh M, Head of HR, Marquee</cite>
            </div>
            <div className="testimonial-card">
              <p>
                "The Skinsational range has been a revelation — natural and
                truly effective."
              </p>
              <cite>— Priya Verma, Skincare Enthusiast</cite>
            </div>
            <div className="testimonial-card">
              <p>
                "The custom mithai boxes were divine — true homemade
                perfection!"
              </p>
              <cite>— Kiran Dev, Celebration Host</cite>
            </div>
            <div className="testimonial-card">
              <p>
                "They crafted a visual story that elevated our entire tea
                brand."
              </p>
              <cite>— Arjun Nayar, Brew & Bloom Teas</cite>
            </div>
            <div className="testimonial-card">
              <p>
                "Their attention to detail and personalized touch made our gifts
                unforgettable."
              </p>
              <cite>— Natasha Iyer, Corporate Gifting Lead</cite>
            </div>
            <div className="testimonial-spacer" /> {/* Left Spacer */}
          </div>

          <button
            className="arrow right"
            onClick={scrollRight}
            aria-label="Next Testimonial"
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Let’s Create Something Beautiful Together</h2>
        <a href="/#/contact" className="cta-button">
          Get in Touch
        </a>
      </section>
    </div>
  );
};
