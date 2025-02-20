import React from "react";
import playstore from "../assets/playstore.jpg";
import appstore from "../assets/appstore.jpg";
import "../css/PlayAppStore.css";

const PlayAppStore = () => {
  return (
    <div className="play-app-store">
      <a href="">
        <img src={playstore} alt="" />
      </a>
      <a href="">
        <img src={appstore} alt="" />
      </a>
    </div>
  );
};

export default PlayAppStore;
