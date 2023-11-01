import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import exhibition from "../images/christmasparty.jpg";

const ExhibitionClass = () => {
  return (
    <>
      <div className="general-landing-page wow fadeInUp">
        <div className="landing-content gen wow zoomIn">
          <h1>Exhibition Class</h1>
          <p>
            Home <FontAwesomeIcon icon={faCircle} /> Exhibition
          </p>
        </div>
      </div>
      <div className="after-landing ess wow fadeInUp">
        <h1>Exhibition Class</h1>
        <div className="tofro"></div>
        <p>
          The Exhibition Class is a fully subsidized two-month program aimed at
          equipping individuals with essential tech skills, especially those who
          may not have the financial capacity to enroll in our intensive
          programs. The program meets once per week and requires only a nominal
          application fee of 10,000
        </p>
        <img src={exhibition} alt="" />
      </div>
    </>
  );
};

export default ExhibitionClass;
