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
            <strong>Finanzas sin Barreras:</strong> La Revolución Digital para
            la Inclusión Financiera En un mundo cada vez más digitalizado, la
            inclusión financiera debe ser una realidad para todos. Nuestra
            aplicación financiera digital está diseñada especialmente para ser
            totalmente accesible y abrir las puertas del universo de las
            criptomonedas a las personas con discapacidad. Con una interfaz
            intuitiva, herramientas de accesibilidad avanzadas y soporte
            personalizado, brindamos la oportunidad de administrar, invertir y
            hacer transacciones de manera segura y sin limitaciones.
          </p>
          <p>
            <strong>Barriers:</strong> The Digital Revolution for Financial
            Inclusion In an increasingly digitalized world, financial inclusion
            must be a reality for everyone. Our digital financial application is
            specially designed to be fully accessible and open the doors of the
            cryptocurrency universe to people with disabilities. With an
            intuitive interface, advanced accessibility tools and personalized
            support, we provide the opportunity to manage, invest and make
            transactions safely without limitations.
          </p>
          <p>
            <strong>Accesibilidad sin compromisos:</strong> Nuestra aplicación
            incorpora lectores de pantalla, comandos de voz, ajustes de
            contraste y opciones de navegación simplificadas, garantizando que
            todas las personas, sin importar su capacidad visual, auditiva o
            motriz, puedan manejar sus finanzas con total autonomía. Además, el
            diseño inclusivo permite una experiencia fluida para personas con
            diversidad cognitiva, asegurando que las transacciones sean claras y
            sin complicaciones.
          </p>
          <p>
            <strong>Accessibility without compromise:</strong> Our app
            incorporates screen readers, voice commands, contrast adjustments
            and simplified navigation options, ensuring that everyone,
            regardless of their visual, hearing or motor abilities, can manage
            their finances with complete autonomy. In addition, the inclusive
            design allows for a fluid experience for people with cognitive
            diversity, ensuring that transactions are clear and hassle-free.
          </p>
          {/* <p>
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
          </p> */}
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
