// import React from "react";
// import logo from "../assets/logo.png";
// import Flag from "./Flag";
// import "../css/Navbar.css";
// import { CiMenuFries } from "react-icons/ci";

// const Navbar = () => {
//   return (
//     <nav className="nav-container">
//       <div className="img">
//         <img src={logo} alt="" />
//       </div>
//       <span className="menu-icon">
//         <CiMenuFries />
//       </span>
//       <div className="links">
//         <a href="#home">Home</a>
//         <a href="#about">About Us</a>
//         <a href="#contact">Contact</a>
//         <a href="#support">Support</a>
//       </div>
//       <div className="flag">
//         <Flag />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logo from "../assets/logo.png";
import Flag from "./Flag";
import "../css/Navbar.css";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="img">
        <img src={logo} alt="Logo" />
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
        <a href="#support" onClick={() => setMenuOpen(false)}>
          Support
        </a>
      </div>
      <div className="flag">
        <Flag />
      </div>
    </nav>
  );
};

export default Navbar;
