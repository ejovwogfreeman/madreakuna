import React from "react";
import smilinglady from "../assets/smilinglady.png";
import goldpic from "../assets/goldpic.png";
import "../css/About.css";
import SocialMedia from "./SocialMedia";

const About = () => {
  return (
    <div className="about">
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
            Acercar el mundo digital a las personas con descapacidead y cno
            discapacidad <br /> para que puededn accedar a las crytomonedas en
            esta era de la moneda <br /> digital y lambien practicar su uso.
          </p>
          <p>
            At Madre Akuna, we believe financial freedom should be accessible to{" "}
            <br /> everyone. Thats why we created a crypto platform also
            designed for people <br />
            with disabilities, ensuring that digital assets and blockchain
            technology are <br /> are inclusive, easy to use, and empowering.
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
          <h3>Our Mission</h3>
          <p>
            Our mission is to remove barriers in the crypto space by offering a
            user-friendly,
            <br /> accessible, and secre platform that accomodates diverse
            needs. With features <br />
            like voice commands, screen reader compatibility, customizable
            interface and <br /> simplified transactions. We make it easier for
            everyone to participte in the future of <br />
            finance.
          </p>
          <p>
            Whether you're an experienced trader or just starting your crypto
            journey, Madre <br />
            Akuna provides the tools, resources, and support to help you
            navigate the digital <br /> economy with confidence
          </p>
          <p>
            Join us as we build a more inclusive financial world because crypto
            should be for <br />
            everyone
          </p>
          <h3>Our Vision</h3>
          <p>
            Our vision is to create a world of digital currency, where people
            can trade assets <br /> and make investments fast and seamlessly
          </p>
        </div>
        <div className="img">
          <img src={goldpic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
