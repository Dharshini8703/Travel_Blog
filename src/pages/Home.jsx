import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";
import ImageCarousel from "../components/Carousel";
import pic from "../assets/pic1.webp";

const Home = () => {
  return (
    <section className="hero">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{
          backgroundImage: `url(${pic})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "0px"
        }}>
          <h1>Tamil Nadu's Precious Views & Timeless Vibes - A must-visit Destination</h1>
          <h1>Welcome to my Travel Blog - Tamil Nadu</h1>
        </div>
        <button className="shop-now" style={{ marginBottom: "50px" }}>Show Places</button>
        <ImageCarousel />
      </motion.div>
    </section>
  );
};

export default Home;
