import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import advanced from '../images/advanced.jpg'

const AdvancedClass = () => {
  return (
    <>
      <div className="general-landing-page wow fadeInUp">
        <div className="landing-content gen wow zoomIn">
          <h1>Advanced Class</h1>
          <p>
            Home <FontAwesomeIcon icon={faCircle} /> Advanced
          </p>
        </div>
      </div>
      <div className="after-landing ess wow fadeInUp">
        <h1>Advanced Class</h1>
        <div className="tofro"></div>
        <p>
          Our Advanced class serves as a continuation of our Essential class,
          offering a comprehensive 3-month program that includes a paid
          internship. This program is ideally suited for individuals seeking to
          advance their technical skills and become a full stack developer. A
          laptop is required for participation in this program, and there is a
          tuition fee of 100,000. Participants can expect to gain expertise in
          Back-End Development, which encompasses a range of topics such as
          Object Oriented Programming, Java script designs, Introduction to
          databases, back-end logic, Patterns, and Application Programming
          Interface (API) development. This intensive program provides a unique
          opportunity for individuals to enhance their skills and gain practical
          experience in advanced programming
        </p>

        <img src={advanced} alt="" />
      </div>
    </>
  );
};

export default AdvancedClass;
