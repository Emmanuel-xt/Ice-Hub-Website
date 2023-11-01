import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import * as Icon from "react-bootstrap-icons";

const Footer = () => {
    return ( 
        <>
        
        
      <footer className="wow fadeInUp">
        <div className="footer-con ">
          <div className="footer-signup">
            <h1 className="brand">ICE HUB</h1>
            <div className="signup">
              <input type="text" name="email" id="" placeholder="Your Email" />
              <button>Sign Up</button>
            </div>
          </div>

          <div className="get-quick">
            <div className="reach-out">
              <div className="get-in-touch">
                <h1>Get In Touch</h1>
                <div className="tofro"></div>

                <div className="footer-location">
                  <FontAwesomeIcon icon={faLocationDot} className="icon" />
                  <span>
                    No 270 Old Onitsha Road, bethel building Opp. Anglican Girls
                    Sec. School junction (Nnewi) Anambra, Nigeria.
                  </span>
                </div>

                <div className="footer-location">
                  <span>
                    <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
                  </span>
                  <span>Contacticehub@gmail.com</span>
                </div>

                <div className="footer-location">
                  <span className="icon">
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                  </span>
                  <span>(+234) 7015815801</span>
                </div>
              </div>
              <div className="footer-social">
                <Icon.Twitter className="social" />
                <Icon.Facebook className="social" />
                <Icon.Instagram className="social" />
              </div>
            </div>

            <div className="reach-out">
              <div className="get-in-touch">
                <h1>Quick Links</h1>
                <div className="tofro"></div>
                <div className="quicklink-link">
                <Icon.ArrowRight  className="icon"/>
                <span>Home</span>
                </div>
                <div className="quicklink-link">
                <Icon.ArrowRight className="icon" />
                <span>About us</span>
                </div>
                <div className="quicklink-link">
                <Icon.ArrowRight  className="icon"/>
                <span>Contact us</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
          <div className="copyright">
            <p>© ICEHUB. All Rights Reserved. Designed by ICEHUB</p>
          </div>
      </footer>
        
        </>
     );
}
 
export default Footer;