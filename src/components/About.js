import LoginButton from "./Login";
import logo from "./aboutLogo.png";
import "../components/css/About.css";
import React from "react";
import AboutHeader from "./AboutHeader";

const About = () => {
  return (
    <>
      <AboutHeader />
      <div id="About">
        <br />

        <div id="ab-right">
          <div id="hero">
            <div>
              <h2>Welcome to Resu-mii!</h2>
              <br />
            </div>
            <div>
              <h3>
                Our mission is to make finding the right candidate as easy as
                picking out the right experience!
              </h3>
              <br />
            </div>
            <br />
            <div id="loginbutton">
              <LoginButton />
            </div>
          </div>

          <div id="line"></div>
          <img src={logo} id="logo" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default About;
