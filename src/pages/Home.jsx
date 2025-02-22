import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";
import ImageCarousel from "../components/Carousel";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Tamil Nadu's Precious Views & Timeless Vibes - A must-visit Destination</h1>
        <h2>Welcome to my Travel Blog - Tamil nadu</h2>
        <button className="shop-now" style={{marginBottom: "50px"}}>Show Places</button>
        <ImageCarousel />
      </motion.div>
     
    </section>
  );
};

export default Hero;
