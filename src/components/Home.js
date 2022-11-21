import React from 'react';
import "../css/home.css";
import "../css/navbar.css";
import img from '../assets/pfp.jpg'
import { useLocation } from 'react-router-dom';

export default function Home(props) {
  return (
    <section id="landing">
        <div>
            <div className="landing-sec">
            <div className="landing-info">
                <div className="landing-head">Hi! I Am</div>
                <div className="landing-head">{props.userName}</div>
                <div className="landing-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
                necessitatibus fugiat distinctio deserunt cum rerum eos, culpa commodi
                perferendis blanditiis nisi reprehenderit tempore quasi quis officiis
                at cumque rem voluptatibus.
                </div>
                <div className="landing-icons">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
            </div>
            <div className="landing-sec">
            <div className="landing-img">
                <img src={props.selectedImg.imgURL} alt="Profile Photo" />
            </div>
            </div>
        </div>
    </section>
  )
}
