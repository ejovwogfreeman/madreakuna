import React from "react";
import iphone16pro from "../assets/iphone16pro.png";
import PlayAppStore from "./PlayAppStore";
import "../css/Review.css";

const Review = () => {
  return (
    <div className="review container">
      <div className="review-top">
        <ul className="first">
          <h2>The App just for You</h2>
          <li>Coin Market Overview</li>
          <li>Beautiful User Interface</li>
          <li>Current Market Trend</li>
        </ul>
        <div class="img">
          <img src={iphone16pro} alt="" width="300px" />
        </div>
        <ul className="last">
          <h2>Easy to Use</h2>
          <li>Buy, Swap & Sell Crypto</li>
          <li>Improved User experience</li>
          <li>Crypto Watchlist</li>
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
