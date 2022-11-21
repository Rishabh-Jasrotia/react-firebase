import React from "react";
import "../css/about.css";
import line from "../assets/sqline.png";
import bulb from "../assets/idea.png";
import hline from "../assets/line.png";
import design from "../assets/design.png";
import brain from "../assets/brain.png";
import success from "../assets/success.png";

export default function About() {
  return (
    <div id="about">
      <div className="about-main">
        <div className="about-content">
          <h2>I Design digital products.</h2>
          <span>
            <img src={line} alt="Squiggly Line" />
          </span>
          <p>
            Your brand, your product, your big idea...it is worth pursuing. I
            believe in creating opportunities for elite brand, intrepid startups
            and passionate innovators to change the world.
          </p>
        </div>
        <div className="about-timeline">
          <div className="t-item">
            <div className="t-icon">
              <img src={bulb} alt="Idea Bulb" />
            </div>
            <img src={hline} alt="Line" />
            <p>IDEA</p>
          </div>

          <div className="t-item">
            <div className="t-icon">
              <img src={design} alt="Design" />
            </div>
            <img src={hline} alt="Line" />
            <p>DESIGN</p>
          </div>

          <div className="t-item">
            <div className="t-icon">
              <img src={brain} alt="Brain" />
            </div>
            <img src={hline} alt="Line" />
            <p>DEVELOPMENT</p>
          </div>

          <div className="t-item">
            <div className="t-icon">
              <img src={success} alt="Graph" />
            </div>
            <img src={hline} alt="Line" />
            <p>SUCCESS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
