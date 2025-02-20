import React from "react";
import iphone16pro from "../assets/iphone16pro.jpg";
import playstore from "../assets/playstore.jpg";
import appstore from "../assets/appstore.jpg";

const Review = () => {
  return (
    <div>
      <div className="review-top">
        <ul>
          <h2>The App just for You</h2>
          <li>Coin Market Overview</li>
          <li>Beautiful User Interface</li>
          <li>Current Market Trend</li>
        </ul>
        <div></div>
        <ul>
          <h2>Easy to Use</h2>
          <li>Buy, Swap & Sell Crypto</li>
          <li>Improved User experience</li>
          <li>Crypto Watchlist</li>
        </ul>
      </div>
      <div className="review-bottom">
        <img src={iphone16pro} alt="" />
        <p>Our app is available for download:</p>
        <div className="play-app-store">
          <a href="">
            <img src={playstore} alt="" />
          </a>
          <a href="">
            <img src={appstore} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
