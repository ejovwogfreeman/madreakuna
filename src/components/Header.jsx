import React from "react";
import iphone from "../assets/iphone16.png";
import "../css/Header.css";
import Navbar from "../components/Navbar";
import background from "../assets/background.png";
import PlayAppStore from "./PlayAppStore";

const Header = () => {
  return (
    <div className="header" id="home">
      <img src={background} alt="" className="bg-img" />
      <Navbar />
      <div className="header-contents container">
        <div className="contents">
          <h1>
            Mantente en Contacto con <br />
            el <span className="text-primary">Mercado Cripto.</span>
            <br />
            Compra, Intercambia y{" "}
            <span className="text-primary">Vende Criptomonedas</span>
          </h1>
          <p>
            <span className="text-primary">Conectando a todos,</span> includes
            las personas con discapacidades, al mundo <br /> digital para un
            acceso equitativo a las criptomonedas
            <br />
            financieras
          </p>
          <PlayAppStore />
        </div>
        <div className="img bounce-animation">
          <img src={iphone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
