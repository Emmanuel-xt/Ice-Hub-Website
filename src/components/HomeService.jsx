import {
  faMobileAndroid,
  faSearch,
  faShield,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeServices = () => {
  const contents = [
    {
      icon: faShield,
      service: "Web Development",
    },
    {
      icon: faMobileAndroid,
      service: "Mobile App",
    },
    {
      icon: faTag,
      service: "Start Ups",
    },
    {
      icon: faMobileAndroid,
      service: "Software Development",
    },
    {
      icon: faSearch,
      service: "Product UI/UX",
    },
  ];

  return (
    <>
      <div className="home-services">
        <h1>OUR SERVICES</h1>
        <div className="tofro"></div>

        <div className="box-services">
          
          {contents.map((content, index) => {
            return (
              <div className="box-service wow zoomIn" key={index}>
                <div className="icon-box">
                  <FontAwesomeIcon icon={content.icon} className="icon" />
                </div>
                <span>{content.service}</span>
              </div>
            );
          })}

          <div className="box-service wow zoomIn dis">
            <span>
                Call Us<br />+23407045375814
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServices;
