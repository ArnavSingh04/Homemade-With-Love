// imports/ui/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { CorporateGifting } from "./Pages/CorporateGifting";
import { ProductsServices } from "./Pages/ProductsServices";
import { Footer } from "./Pages/Footer";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ProductsServices" element={<ProductsServices />} />
          <Route path="/CorporateGifting" element={<CorporateGifting />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
