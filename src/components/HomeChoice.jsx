import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faDiceD20,
  faPersonRifle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import students from "../images/austinetcaesar.jpeg";
const HomeChoice = () => {
  return (
    <>
      <div className="home-choice">
        <div className="home-choice-heading">
          <h2 className="wow fadeInUp">WHY CHOOSE US</h2>
          <h1 className="wow fadeInUp">We Are Here to Grow Your Knowledge</h1>
          <div className="tofro"></div>
        </div>
        <div className="home-choice-content">
          <div className="left">
            <div className="icon-text wow zoomIn">
              <span>
                {" "}
                <FontAwesomeIcon icon={faDiceD20} className="icon" />{" "}
              </span>
              <span className="text">Best Industry</span>
            </div>
            <div className="icon-text wow zoomIn">
              <span>
                {" "}
                <FontAwesomeIcon icon={faAward} className="icon" />{" "}
              </span>
              <span className="text">Award Winning</span>
            </div>
          </div>
          <img src={students} alt="" />
          <div className="left">
            <div className="icon-text wow zoomIn">
              <span>
                {" "}
                <FontAwesomeIcon icon={faPersonRifle} className="icon" />{" "}
              </span>
              <span className="text">Professional Staff</span>
            </div>
            <div className="icon-text wow zoomIn">
              <span>
                {" "}
                <FontAwesomeIcon icon={faPhone} className="icon" />{" "}
              </span>
              <span className="text">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeChoice;
