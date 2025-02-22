import React, { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sideBar";
import Hero from "./pages/Home";
import "./styles/styles.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      <Hero />
    </div>
  );
}

export default App;
