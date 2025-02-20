import React from "react";
import logo from "../assets/footerlogo.png";
import madreakuna from "../assets/madreakuna.png";
import "../css/Footer.css";
import SocialMedia from "./SocialMedia";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="">
      <img src={madreakuna} alt="" className="bg-img" />
      <div className="container main-footer">
        <div className="left">
          <img src={logo} alt="" />
          <div className="texts" id="contact">
            <h3>Direccion Postal:</h3>
            <p>
              Urb. El Conquistador calle 6 H-61 | Trujillo Alto, P.r. <br />
              00976
            </p>
            <h3>Direccion Fisica</h3>
            <p>
              Urb. El Conquistador calle 6 H-61 | Trujillo Alto, P.r. <br />
              00976
            </p>
            <span style={{ display: "flex", alignItems: "center" }}>
              <FaPhoneAlt />
              <span style={{ marginLeft: "5px" }}>+1 (939) 759-5400</span>
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <IoMdMail />
              <span style={{ marginLeft: "5px" }}>support@madreakuna.com</span>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#support">Support</a>
          </div>
          <SocialMedia />
        </div>
      </div>
      <div className="sub-footer">
        <small>
          All rights reserved. Madre akuna {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
