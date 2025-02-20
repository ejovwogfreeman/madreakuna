import React from "react";
import Navbar from "../components/Navbar";
import "../css/Support.css";

const Support = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container support">
        <h1>Support</h1>
        <p>Do you need something? Feel free to write to us for support.</p>

        <form action="">
          <h3>Send us a message</h3>
          <input type="text" placeholder="Enter email address" />
          <textarea name="" id="" placeholder="Enter message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Support;
