import React from "react";
import "../css/SocialMedia.css";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="socials">
      <a href="">
        <FaSquareFacebook />
      </a>
      <a href="">
        <FaSquareInstagram />
      </a>
      <a href="">
        <FaLinkedin />
      </a>
      <a href="">
        <FaSquareXTwitter />
      </a>
      <a href="">
        <AiFillTikTok />
      </a>
      <a href="">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialMedia;
