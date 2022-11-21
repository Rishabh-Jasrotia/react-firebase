import React, { useState } from "react"; 
import "../css/navbar.css";
import { Link,Outlet } from "react-router-dom";

export default function NavBar(props) {
  let [navopen, setNav] = useState(false);
  let classList = [];
  let [className, setClass] = useState("");
  const hamClick = () => {
    if (!navopen) {
      classList.push("nav-anim");
      classList.map((e) => {
        if (className.length === 0) className = e;
        else className = className + " " + e;
        return className;
      });
      setClass(className);
      setNav(true);
    } else {
      classList.pop();
      className = "";
      setClass(className);
      setNav(false);
    }
  };
  return (
    <>
      <nav id="nav-bar">
        <div className="nav-sec" id="nav-name">
          <h2>{props.userName}</h2>
          <div>
            <input
              type="checkbox"
              className="dark-toggle"
              id="switch"
              defaultChecked="true"
            />
            <label htmlFor="switch" className="dark-label">
              <span className="material-symbols-outlined dark-icon">
                dark_mode
              </span>
              <span className="material-symbols-outlined dark-icon">sunny</span>
              <div className="dark-ball" />
            </label>
          </div>
        </div>
        <div className="nav-sec" id="nav-links">
          <div className="nav-sec">
            <Link to="/home">
              <div>Home</div>
            </Link>
            <Link to="/about">
              <div>About</div>
            </Link>
          </div>
          <Link to="/contact">
            <button className="contact-btn">Contact</button>
          </Link>
          <span
            className="material-symbols-outlined"
            id="hamburger"
            onClick={() => {
              hamClick();
            }}
          >
            menu
          </span>
        </div>
      </nav>
      <section id="nav-overlay" className={className}>
        <div className="nav-sec">
          <Link to="/home">
            <div
              onClick={() => {
                hamClick();
              }}
            >
              Home
            </div>
          </Link>
          <Link to="/about">
            <div
              onClick={() => {
                hamClick();
              }}
            >
              About
            </div>
          </Link>
        </div>
      </section>
      <Outlet/>
    </>
  );
}
