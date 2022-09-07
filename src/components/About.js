import Footer from "./Footer";
import LoginButton from "./Login";
import logo from "./aboutLogo.png";
import "../components/css/About.css";
import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <div id="About">
        <br />
        <LoginButton />
        <div id="ab-right">
          <div id="line"></div>
          <img src={logo} id="logo" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
