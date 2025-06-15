import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Check if current route is login
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-title">
          Medicine Management
        </Link>
        <div className="navbar-actions">
          <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Show hamburger only if not on login page */}
          {!isLoginPage && (
            <button className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? "✖" : "☰"}
            </button>
          )}
        </div>
      </nav>

      {/* Sidebar and Overlay only if not on login page */}
      {!isLoginPage && (
        <>
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)} />}
        </>
      )}
    </>
  );
};

export default Navbar;
