import React from "react";
import HomeContact from "./HomeContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <section className="general">
        <div className="general-landing-page wow fadeInUp">
          <div className="landing-content gen wow zoomIn">
            <h1 >Contact Us</h1>
            <p>
              Home <FontAwesomeIcon icon={faCircle} /> Contact
            </p>
          </div>
        </div>
        <div className="after-landing">
          <div className="contact wow fadeInUp">
            <h2>Contact Us</h2>
            <h1>If you have Any Query Feel Free To Contact Us</h1>
            <div className="tofro"></div>
            <div className="contact-contacts">
              <div className="contact-call wow zoomIn">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div className="call-number">
                  <span>Call to ask any question</span>
                  <span className="number">(+234) 7015815801</span>
                </div>
              </div>
              <div className="contact-call wow zoomIn">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
                <div className="call-number">
                  <span>Email to Get Free Quotes</span>
                  <span className="number">contacticehub@gmail.com</span>
                </div>
              </div>
              <div className="contact-call wow zoomIn">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <div className="call-number">
                  <span>Visit Our Office</span>
                  <span className="number">
                    No 270 Old Onitsha Road,
                    <br /> bethel building Opp. Anglican Girls
                    <br />
                    Sec. School junction (Nnewi) Anambra,
                  </span>
                </div>
              </div>
            </div>
          </div>
        <div className="form-map">
            <form action="" className="contact-form wow slideInUp">
                <div className="text-inputs">
                    <input type="text"  placeholder="Your Name"/>
                    <input type="text" placeholder="Your Email"/>
                </div>
                <input type="text" placeholder="Subject" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <button type="submit">SEND</button>
            </form>

            <div className="africa-map wow slideInUp">
                
            </div>
        </div>
        </div>



      </section>
    </>
  );
};

export default Contact;
