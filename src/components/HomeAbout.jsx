import { faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import learning from '../images/learning.jpg'

const HomeAbout = (prop) => {
 
  return (
    <>
      <div className="home-about">
        <div className="home-about-contents">
          <div className="texts">
            <h1>ABOUT US</h1>
            <div className="tofro"></div>

            <p>
              We Help Young People; Nigerians, Africans Stat their Careers in
              Technology from Newbie to Full Stack Developer.
            </p>
            <div className="activities">
                <div className="activity wow zoomIn">
                    <span><FontAwesomeIcon icon={faCheck} /></span>
                    <p>Award Winning</p>
                </div>
                <div className="activity wow zoomIn">
                    <span><FontAwesomeIcon icon={faCheck} /></span>
                    <p>Proffesional Staff</p>
                </div>
                <div className="activity wow zoomIn">
                    <span><FontAwesomeIcon icon={faCheck} /></span>
                    <p>24/7 Support</p>
                </div>
                <div className="activity wow zoomIn">
                    <span><FontAwesomeIcon icon={faCheck} /></span>
                    <p>Fair Prices</p>
                </div>
            </div>

            <div className="call wow zoomIn">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div className="call-number wow zoomIn">
                    <span>Call to ask any question</span>
                    <span className="number">(+234) 7015815801</span>
                </div>
            </div>
          </div>

          <div className="image wow zoomIn" >
            <img src={learning} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
