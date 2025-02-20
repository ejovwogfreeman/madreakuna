import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Flag from "./Flag";
import "../css/Navbar.css";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-container ${isScrolled ? "navbar-dark" : ""}`}>
      <div className="img">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <span className="menu-icon" onClick={toggleMenu}>
        <CiMenuFries />
      </span>
      <div className={`links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About Us
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
        <Link to="support" onClick={() => setMenuOpen(false)}>
          Support
        </Link>
      </div>
      <div className="flag">
        <Flag />
      </div>
    </nav>
  );
};

export default Navbar;
