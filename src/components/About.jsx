import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import HomeAbout from "./HomeAbout";

const About = () => {
    const tag = "dey play"
  return (
    <>
      <section className="general">
        <div className="general-landing-page wow fadeInUp">
          <div className="landing-content gen wow zoomIn">
            <h1>About Us</h1>
            <p>
              Home <FontAwesomeIcon icon={faCircle} /> About
            </p>
          </div>
        </div>
        <div className="after-landing">
          <HomeAbout />
        </div>
      </section>
    </>
  );
};

export default About;
