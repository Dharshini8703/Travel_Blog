import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css"

const Sidebar = ({ isOpen }) => {
  return (
    <motion.div
      className={`sidebar ${isOpen ? "open" : ""}`}
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
    >
      <ul>
        <li>HOME</li>
        <li>DESTINATIONS</li>
        <li>ADVENTURE ACTIVITIES</li>
        <li>TRAVEL STORIES & EXPERIENCE</li>
        <li>CONTACT & ABOUT US</li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
