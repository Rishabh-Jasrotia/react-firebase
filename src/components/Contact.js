import React from "react";
import "../css/contact.css";
import cimg from "../assets/contact.svg";

export default function Contact() {
  return (
    <div id="contact-sec">
      <img className="conimg" src={cimg} alt="Contact" />
      <div className="cdetails">
        <form>
          <div className="cline1">
            <input type="text" id="name" placeholder="Name" required="" />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required=""
            />
          </div>
          <div className="cline2">
            <input type="text" id="subject" placeholder="Subject" required="" />
          </div>
          <textarea
            id="textarea"
            placeholder="Message"
            required=""
            defaultValue={""}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
