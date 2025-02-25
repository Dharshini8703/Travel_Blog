import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box, useMediaQuery } from "@mui/material";
import { FaBars, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const SearchBar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f1f1f1",
  padding: "5px 10px",
  borderRadius: "5px",
  width: "300px",
}));

const Sidebar = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  top: 60,
  left: 0,
  width: "235px",
  height: "100%",
  background: "#333",
  color: "white",
  padding: "20px",
  transform: "translateX(-100%)",
  transition: "transform 0.3s ease-in-out",
  fontSize: "14px"
}));

const listItemStyle = {
  padding: "20px 15px",
  borderBottom: "1px solid #444",
  cursor: "pointer",
};

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <FaBars />
            </IconButton>
          )}

          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Travel Blog
          </Typography>

          <SearchBar>
            <InputBase placeholder="Search for Destination..." sx={{ flex: 1 }} />
            <IconButton>
              <FaSearch />
            </IconButton>
          </SearchBar>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit">
              <FaUser />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Sidebar
        animate={{ transform: sidebarOpen || !isMobile ? "translateX(0)" : "translateX(-100%)" }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={listItemStyle}>HOME</li>
          <li style={listItemStyle}>DESTINATIONS</li>
          <li style={listItemStyle}>ADVENTURE ACTIVITIES</li>
          <li style={listItemStyle}>TRAVEL STORIES & EXPERIENCE</li>
          <li style={listItemStyle}>CONTACT & ABOUT US</li>
        </ul>
      </Sidebar>
    </Box>
  );
};

export default Navbar;
