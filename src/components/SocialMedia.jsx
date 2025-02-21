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
      <a href="https://www.facebook.com/madrefajona" target="_blank">
        <FaSquareFacebook />
      </a>
      <a
        href="https://www.instagram.com/madrefajonapr?igsh=ZG1jczFxczlrbms2"
        target="_blank"
      >
        <FaSquareInstagram />
      </a>
      {/* <a href="">
        <FaLinkedin />
      </a> */}
      <a href="https://x.com/MFajona" target="_blank">
        <FaSquareXTwitter />
      </a>
      {/* <a href="">
        <AiFillTikTok />
      </a> */}
      <a
        href="https://youtube.com/@madrefajona1324?si=L-V7rjdWHzy-zWLC"
        target="_blank"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialMedia;
