import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Skit from "../images/skit.jpg";

const SkitClass = () => {
  return (
    <>
      <div className="general-landing-page wow fadeInUp">
        <div className="landing-content gen wow zoomIn">
          <h1>Skit Class</h1>
          <p>
            Home <FontAwesomeIcon icon={faCircle} /> Skit
          </p>
        </div>
      </div>
      <div className="after-landing ess wow fadeInUp">
        <h1>Skit Class</h1>
        <div className="tofro"></div>
        <p>
          Our organization offers a specialized summer boot camp program called
          SKIT, designed for children with unique learning needs. Over the
          course of two months, our program provides comprehensive instruction
          in the fields of Coding, Robotics, and Machine Learning. Our SKIT
          program offers a unique opportunity for children between the ages of
          6-12 years to engage in STEM education through the use of Fischer
          Technik models. By participating in SKIT, children have the ability to
          transform their imagination and aspirations into tangible outcomes.
          This summer program runs from June to August, providing a dynamic and
          immersive learning experience for all participants.
        </p>
        <img src={Skit} alt="" />
      </div>
    </>
  );
};

export default SkitClass;
