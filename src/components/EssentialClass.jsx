import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import essential from '../images/essential.jpg'
const EssentialClass = () => {
  return (
    <>
      <div className="general-landing-page wow fadeInUp">
        <div className="landing-content gen wow zoomIn">
          <h1>Essential Class</h1>
          <p>
            Home <FontAwesomeIcon icon={faCircle} /> Essential
          </p>
        </div>
      </div>
      <div className="after-landing ess wow fadeInUp">
        <h1>Essential Class</h1>
        <div className="tofro"></div>
        <p>
          Our comprehensive 3-month Front-End Development program is designed to
          equip participants with the skills necessary for Web, Software, Mobile
          App, and Product Design. This program includes a paid internship, with
          a tuition fee of 100,000. A laptop is a prerequisite for this
          training, and while we highly recommend bringing your own device to
          enhance your learning experience, temporary laptops can be provided to
          participants who do not have one. By completing this program,
          participants can expect to gain practical skills and expertise in
          Front-End Development, preparing them for a successful career in the
          field.
        </p>
        <div className="tofro"></div>
        <img src={essential} alt="" />
      </div>
    </>
  );
};

export default EssentialClass;
