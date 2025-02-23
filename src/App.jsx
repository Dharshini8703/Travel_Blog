import React, { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sideBar";
import Hero from "./pages/Home";
import "./styles/styles.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
     <div>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
    <AppRoutes />
    </div>
      
  );
}

export default App;
