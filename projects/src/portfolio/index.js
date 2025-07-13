import React, { useState } from "react";
import "./index.css";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="body">
        <div className="navigation-bar">
          <div className="logo">
            <h1>Aalekh_Dhapke</h1>
          </div>
          <div className="nav-links">
            <a href="#home">home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="home" id="home">
          <div className="home-content">
            <div className="home-text">
              <h1>Hi, I'm Aalekh Dhapke</h1>
              <p>I'm a Full Stack Developer</p>
              <div className="home-buttons">
                <button className="btn">Contact Me</button>
                <button className="btn"> Resume</button>
              </div>
            </div>
            <div className="home-image">
              <img
                src="https://aalekhdhapke.github.io/portfolio/assets/images/prtfolioimg%20Background%20Removed.png"
                alt="profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>

        <section className="about" id="about">
          <h2 className="aboutmetext">About Me</h2>
        </section>
      </div>
    );
  }
}
