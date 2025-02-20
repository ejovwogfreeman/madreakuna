import React from "react";
import iphone from "../assets/iphone16.png";
import "../css/Header.css";
import Navbar from "../components/Navbar";
import background from "../assets/background.png";
import playstore from "../assets/playstore.jpg";
import appstore from "../assets/appstore.jpg";

const Header = () => {
  return (
    <div className="header">
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
          <div className="play-app-store">
            <a href="">
              <img src={playstore} alt="" />
            </a>
            <a href="">
              <img src={appstore} alt="" />
            </a>
          </div>
        </div>
        <div className="img">
          <img src={iphone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
