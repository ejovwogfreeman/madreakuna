import React from "react";
import iphone16pro from "../assets/iphone16pro.png";
import PlayAppStore from "./PlayAppStore";
import "../css/Review.css";

const Review = () => {
  return (
    <div className="review container">
      <div className="review-top">
        <ul className="first">
          <h2>La Aplicación Perfecta y Accesible</h2>
          <li>Descripción general del mercado de monedas</li>
          <li>Hermosa interfaz de usuario</li>
          <li>Tendencia actual del mercado</li>
        </ul>
        <div className="img">
          <img
            src={iphone16pro}
            alt=""
            width="300px"
            className="bounce-animation"
          />
        </div>
        <ul className="last">
          <h2>Fácil de usar</h2>
          <li>Compra, intercambia y vende criptomonedas</li>
          <li>Experiencia de usuario mejorada</li>
          <li>Lista de seguimiento de criptomonedas</li>
        </ul>
      </div>
      <div className="review-bottom">
        <p>Our app is available for download:</p>
        <PlayAppStore />
      </div>
    </div>
  );
};

export default Review;
