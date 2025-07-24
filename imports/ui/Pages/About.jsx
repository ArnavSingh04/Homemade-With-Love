import React from "react";
import "./about.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-inner">
        <h1 className="about-title">
          Homemade With Love: A Story of Passion, Purity and a Personal Promise.
        </h1>

        <div className="section-divider" />

        <p className="about-text">
          In 2012, our journey began not in a boardroom, but in a home, sparked
          by a simple yet profound discovery. A need arose to find alternatives
          free from harsh preservatives, leading to a deep dive into crafting
          everything from scratch – from wholesome pantry staples to gentle,
          organic skincare.
          {"\n\n"}
          This pivotal moment ignited a passion for purity and natural goodness.
          We learned that what's pure can also be profoundly delightful, leading
          to countless hours of joyful experimentation and perfecting recipes
          and formulations.
          {"\n\n"}
          From this dedicated pursuit of wellness and authenticity, Homemade
          With Love blossomed. What started as a personal quest grew into a
          venture committed to bringing that same uncompromising quality,
          natural goodness and heartfelt care to you.
          {"\n\n"}
          Today, HMWL is a testament to the power of passion and mindful
          creation. Every product, every hamper, every design is infused with
          that original spirit: meticulously handcrafted, thoughtfully curated
          and made with love – because some things are just better homemade.
        </p>

        <div className="section-divider" />

        <div className="founder-section">
          <h2 className="founder-title">
            Meet Our Founder: Shruti Arora – The Heart Behind Homemade With Love
          </h2>
          <p className="founder-text">
            Life's always been a wild ride for me! Growing up a "fauji kid," my
            world was a vibrant mix of Punjabi warmth and Oriya charm. Moving
            homes more often than I changed socks, I experienced everything from
            scorching desert heat to biting mountain cold. This kaleidoscope of
            experiences didn't just fill my address book; it truly ignited a
            deep appreciation for diverse cultures, art, and the simple joys of
            life.
            {"\n\n"}
            Even amidst the whirlwind of new schools and landscapes, my creative
            spark was always shining bright. This led me to the world of
            hospitality, where I honed my craft at IHM and the prestigious
            Oberoi Centre of Learning & Development. I even got to be a part of
            opening new properties – a true maestro, if I do say so myself, at
            orchestrating delightful experiences!
            {"\n\n"}
            Then came Sehar, my wonderful daughter, and with her, an unexpected
            plot twist! When little Sehar developed sensitivities to
            preservatives, my world completely transformed. The professional
            chef in me became a passionate home scientist, tirelessly
            researching and perfecting recipes. Ketchup? Homemade. Snacks?
            Wholesome and from scratch. Pickles? Brimming with natural goodness.
            This wasn't just cooking; it was a mission of love.
            {"\n\n"}
            As Sehar grew, so did the need for pure skincare, leading me to
            craft my very first lip scrub and balm. And just like that, a seed
            was planted, and there was no looking back.
            {"\n\n"}
            What started as heartfelt "freebies" for friends and family, born
            from a desire to share purity and passion, quickly blossomed into
            Homemade With Love. The overwhelming joy and positive response
            proved to me that everyone craved a touch of that authentic, natural
            goodness.
            {"\n\n"}
            Today, even with a fantastic team supporting me, I remain the
            vibrant heartbeat of Homemade With Love. Every single gift package
            that leaves our studio gets my personal seal of approval – a final
            check infused with that original love and dedication. My boundless
            passion for food keeps me experimenting daily in the kitchen,
            concocting new edible delights, while my artistic flair ensures the
            design studio is always buzzing with fresh ideas. And all the
            Skinsational essentials? They're meticulously crafted right here in
            my studio kitchen under my watchful eye.
            {"\n\n"}
            For me, every day is a blessing. Surrounded by a supportive circle
            of family and friends who joyfully lend a hand, I continue to
            create, innovate, and share a piece of my heart with every product.
            It's not just a brand; it's a living story of love, laughter, and a
            dash of delightful chaos!
          </p>
        </div>

        <a href="/products" className="about-button">
          Discover Our Creations
        </a>
      </div>
    </div>
  );
};
