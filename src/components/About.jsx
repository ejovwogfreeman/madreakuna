import React from "react";
import smilinglady from "../assets/smilinglady.png";
import goldpic from "../assets/goldpic.png";
import "../css/About.css";
import SocialMedia from "./SocialMedia";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-top container">
        <div className="contents">
          <div>
            <h1>About Us</h1>
            <p>Get to know about Madre Akuna</p>
          </div>

          <h3 className="text-primary" style={{ marginTop: "20px" }}>
            Madre Akuna
          </h3>

          <p>
            Acceso al mundo digital a las personas con discapacidad para que
            <br />
            puedan acceder a las criptomonedas en esta era de la moneda digital
            <br />y también practicar su uso.
          </p>
          <p>
            At Madre Akuna, we believe financial freedom should be accessible to
            <br /> everyone. Thats why we created a crypto platform also
            designed for people <br />
            with disabilities, ensuring that digital assets and blockchain
            technology are <br /> inclusive, easy to use, and empowering.
          </p>
          <div style={{ marginTop: "20px" }}></div>
          <SocialMedia />
        </div>
        <div className="img">
          <img src={smilinglady} alt="" />
        </div>
      </div>
      <div className="about-bottom container">
        <div className="contents">
          <h3>Nuestra misión</h3>
          <p>
            Nuestra misión es eliminar las barreras en el espacio criptográfico
            al ofrecer una plataforma fácil de usar, accesible y segura que se
            adapte a diversas necesidades. Con funciones como comandos de voz,
            compatibilidad con lectores de pantalla, interfaz personalizable,
            transacciones simplificadas facilitando la participación de todos en
            el futuro de las finanzas.
          </p>
          <p>
            Tanto si eres un operador experimentado como si recién estás
            comenzando tu viaje en el mundo de las criptomonedas.
          </p>
          <p>
            Madre Akuna te brinda las herramientas, los recursos y el apoyo para
            ayudarte a navegar por la economía digital de manera segura y en
            confianza..
          </p>
          <p>
            Únete a nosotros mientras construimos un mundo financiero más
            inclusivo porque las criptomonedas, deben ser para todos.
          </p>
          <h3>Nuestra visión</h3>
          <p>
            Nuestra visión es crear un mundo de moneda digital, donde las
            personas puedan intercambiar activos y realizar inversiones de
            manera rápida y sin inconvenientes.
          </p>
        </div>
        <div className="img">
          <img src={goldpic} alt="" className="bounce-animation" />
        </div>
      </div>
    </div>
  );
};

export default About;
